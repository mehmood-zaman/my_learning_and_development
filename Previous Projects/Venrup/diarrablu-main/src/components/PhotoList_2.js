import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { openUploadWidget } from '../utils/CloudinaryService';
import { photosUploaded } from '../actions';
import { updateUploadedPhoto } from '../actions';
import InputSlider from "./Slider";
import Photo from './Photo';
// import Introduction from './Introduction';
import {CloudinaryContext} from 'cloudinary-react';
import {state, useState} from 'react';

function PhotoList ({contextType, onPhotosUploaded, photos, context}) {
    // constructor(props) {
    //     super(props);
    //     this.state = { newPhoto: false };
    //     this.handleChange = this.handleChange.bind(this);
    // }

    const [state, setState] = useState({ newPhoto: false })
    const [size, setSize] = useState({ size: 0  })
    const [newPhoto,setNewPhoto] = useState({newPhoto:""})

    const handleChange = (event) => {
      setSize(event.target.value);
      // event.preventDefault();
    }

    const uploadImageWithCloudinary = () => {
        const uploadOptions = { tags: 'myphotoalbum', context };
        openUploadWidget(uploadOptions, (error, photos) => {
            if (!error) {
                onPhotosUploaded(photos);
                setNewPhoto({newPhoto:photos})
                // console.log(this.state.newPhoto,photos)
            } else {
                console.log(error);
            }
        });
    }

        return (
            <div className="photoList">
                <div className="actions">
                    <a
                        className="upload_link"
                        onClick={uploadImageWithCloudinary}
                    >
                        Add photo
                    </a>

                    <div className="size">
                      <label className="sizeLabel">
                        Adjust tiling:
                        <input  type="text" pattern="[0-9]*"
                            onChange={handleChange}/>
                      </label>
                    </div>
                </div>

                <div className="photos">
                    {photos.length === 0 && (
                        <p>No photos were added yet.</p>
                    )}

                            {
                            // <Photo
                            //     size={this.state.size}
                            //     key={this.state.newPhoto ? this.state.newPhoto[0].public_id: undefined}
                            //     publicId={this.state.newPhoto ? this.state.newPhoto[0].public_id: undefined}
                            // />
                          }


                </div>
            </div>
        );
}

PhotoList.contextType = CloudinaryContext.contextType;
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
