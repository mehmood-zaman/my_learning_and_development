import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { openUploadWidget } from '../utils/CloudinaryService';
import { photosUploaded } from '../actions';
import { updateUploadedPhoto } from '../actions';
import InputSlider from "./Slider";
import Select from '@material-ui/core/Select';
import Photo from './Photo';
// import Introduction from './Introduction';
import {CloudinaryContext} from 'cloudinary-react';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const tagList = ["dress"]
class PhotoList extends Component {
    constructor(props) {
        super(props);
        this.state = { newPhoto: false,
                       xValue:0,
                       yValue:0,
                       size:1,
                       rotation:0,
                       ghostModels:{},
                       renderModels:null,
                       selectedTag:"dress"};

        this.tileSizeSet = this.tileSizeSet.bind(this);
        this.xValueSet = this.xValueSet.bind(this);
        this.yValueSet = this.yValueSet.bind(this);
        this.rotationSet = this.rotationSet.bind(this);
        this.selectModelsbyTag = this.selectModelsbyTag.bind(this);
    }

    componentDidMount() {
        this.getModelImages(this.state.selectedTag)
        window.addEventListener("scroll", this.onScroll);
        this.setState({ y: window.pageYOffset })
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.onScroll);
    }

    onScroll = () => {

        let maxScroll = document.body.scrollHeight - window.innerHeight;
        let previousPos
        if (this.state.y > window.pageYOffset) {
          this.setState({ scrolledDown: false })

        } else if (this.state.y < window.pageYOffset) {
          this.setState({ scrolledDown: false })

          this.setState({ scrolledDown: true })
        }

      this.setState({ y: window.pageYOffset });
    };


    getModelImages(selectedTag){

      if (!Object.keys(this.state.ghostModels).includes(selectedTag)){

        axios.get(`https://res.cloudinary.com/diarrablu/image/list/${selectedTag}.json`)
            .then(res => {
                // console.log(tagList, tagIndex)
                this.setState(prevState => {
                  let ghostModels = Object.assign({}, prevState.ghostModels);  // creating copy of state variable jasper
                  ghostModels[selectedTag] = res.data.resources;                     // update the name property, assign a new value
                  return { ghostModels };                                 // return new object jasper object
                })

                this.setState({renderModels:this.state.ghostModels[selectedTag]})

            });
      } else {
             //console.log(this.state.ghostModels);
             this.setState({renderModels:this.state.ghostModels[selectedTag]})
      }

    }

    tileSizeSet(size) {
      this.setState({size: size});
    }

    rotationSet(rotation) {
      this.setState({rotation: rotation});

    }


    xValueSet(xValue){
      this.setState({xValue:xValue})
    }

    yValueSet(yValue){
      this.setState({yValue:yValue})
    }

    selectModelsbyTag(e) {
      var selectedTag = e.target.value;
      this.setState({selectedTag: selectedTag});
      this.getModelImages(selectedTag);

    }

    openUploadWidget = () => {

        window.cloudinary.openUploadWidget({
        cloudName: "diarrablu",
        uploadPreset: "diarrablu",
        sources: [
            "local",
            "camera",
            "instagram"
        ],
        googleApiKey: "<image_search_google_api_key>",
        showAdvancedOptions: false,
        cropping: true,
        multiple: false,
        defaultSource: "local",
        styles: {
            palette: {
                window: "#FFFFFF",
                windowBorder: "#90A0B3",
                tabIcon: "#585858",
                menuIcons: "#5A616A",
                textDark: "#000000",
                textLight: "#FFFFFF",
                link: "#696969",
                action: "#FF620C",
                inactiveTabIcon: "#F1E4D8",
                error: "#F44235",
                inProgress: "#0078FF",
                complete: "#20B832",
                sourceBg: "#F1E4D8"
            },
            fonts: {
                default: null,
                "'IBM Plex Sans', sans-serif": {
                    url: "https://fonts.googleapis.com/css?family=IBM+Plex+Sans",
                    active: true
                }
            }
        }
    },
      (error, result) => {
       if (result.event === "success") {
         console.log("Upload Widget event - ");
         this.getUploadedPhoto(result)
       }
      });
    }

    getUploadedPhoto = (photos) =>  {
      this.setState({newPhoto:photos.info.secure_url})

    }

    render() {

        const navBarHeight = this.state.scrolledDown ? "0px" : "320px" ;
        const navBarTop = this.state.y > 40 ? "0px": "40px";

        if (this.state.renderModels) {
        return (
              <div className="photoList">
              <div className="actions" style = {{height:navBarHeight, top: navBarTop, transition: "height 2s"}}>
                <div className="upload-column">
                  <div className="control-labels">
                  Upload Photo
                  </div>
                    <a
                        className="upload_link"
                        onClick={this.openUploadWidget}
                    >
                        Upload new texture
                    </a>
                </div>

                    <div className="control-columns">
                      <div className="control-labels">
                        Adjust tiling:
                      </div>

                      <InputSlider  label = {"Tiling size"}
                                    val={this.state.size}
                                    marks = {true}
                                    valueSet = {this.tileSizeSet}
                                    track={true}
                                    min={1}
                                    max={10}/>

                       <div className="control-labels">
                         Adjust rotation:
                       </div>

                       <InputSlider  label = {"Rotation"}
                                     val={this.state.rotation}
                                     marks = {false}
                                     valueSet = {this.rotationSet}
                                     track={false}
                                     min={0}
                                     max={180}/>

                      <div className="control-labels"> Adjust positioning </div>

                       <InputSlider  label = {"Horizontal"}
                                     val={this.state.xValue}
                                     valueSet = {this.xValueSet}
                                     min={-100}
                                     max={100}
                                     />

                        <InputSlider label = {"Vertical"}
                                     val={this.state.yValue}
                                     valueSet = {this.yValueSet}
                                     min={-100}
                                     max={100}/>
                  </div>

                  <div className="filter-tags">
                      <InputLabel class= "filter-label" id="demo-simple-select-label">Filter Products</InputLabel>
                       <Select
                         labelId="demo-simple-select-label"
                         id="demo-simple-select"
                         value={this.state.selectedTag}
                         onChange={this.selectModelsbyTag}
                       >
                         <MenuItem  value={"shoe"}>Shoes</MenuItem>
                         <MenuItem  value={"dress"}>Dresses</MenuItem>
                         <MenuItem  value={"bottom"}>Bottoms</MenuItem>
                       </Select>
                  </div>
                 </div>

                <div className="photos">
                    <Photo
                        ghostModels = {this.state.renderModels}
                        xValue={this.state.xValue}
                        yValue={this.state.yValue}
                        rotation={this.state.rotation}
                        size={this.state.size == 1 && this.state.rotation > 0 ? this.state.size * 1.35 : this.state.size}
                        key={this.state.newPhoto ? this.state.newPhoto[0].public_id: undefined}
                        publicId={this.state.newPhoto ? this.state.newPhoto: undefined}
                    />
                </div>
            </div>

        );
      }  else {
        return <div> Loading </div>
      }

    }


    uploadImageWithCloudinary() {
        const uploadOptions = {
          uploadPreset:"diarrablu", tags: 'pattern', ...this.context };

        openUploadWidget(uploadOptions, (error, photos) => {
            if (!error) {
                this.props.onPhotosUploaded(photos);
                this.setState({newPhoto:photos})
                console.log(this.state.newPhoto,photos)
            } else {
                console.log(error);
            }
        });
    }

    static contextType = CloudinaryContext.contextType;
}

PhotoList.propTypes = {
    photos: PropTypes.array,
    onPhotosUploaded: PropTypes.func,
};

const PhotoListContainer = connect(
    state => ({ photos: state.photos }),
    {
        onPhotosUploaded: photosUploaded,
    }
)(PhotoList);

Object.keys(PhotoListContainer).includes("contextTypes") && Object.assign(PhotoListContainer.contextTypes, PhotoList.contextTypes);

export default PhotoListContainer;
