import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image, Transformation } from "cloudinary-react";
import SingleModelModule from "./SingleModelModule";
import { url } from "../utils/CloudinaryService";
import PhotoThumbnails from "./PhotoThumbnails";
import { CloudinaryContext } from "cloudinary-react";
import "../main.css";
import "../mobile.css";

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = { showMore: false, mains: null, plains: null };
  }
  componentDidMount() {
    // console.log(this.props.ghostModels)
    // this.props.ghostModels && this.getMainsAndPlains()

    const width = this.divElement && this.divElement.clientWidth;
    const height = this.divElement && this.divElement.clientHeight;
    this.setState({ width: width, height: height });
    //console.log(height,width,this.divElement)
  }

  getMainsAndPlains(ghostModels) {
    let mains = {};
    let plains = {};
    let models = {};
    // console.log(ghostModels)
    ghostModels.map((data) => {
      // console.log(data)
      var fileName = data.public_id.split("/")[2];
      var modelHeight = data.height;
      var modelName = fileName.split("_")[0];
      var modelType = fileName.split("_")[1];
      var modelSide = fileName.split("_")[2];
      var modelTitle = fileName.split("_")[0].replace("-", " ");
      if (modelType === "main" && modelSide === "front") {
        mains[modelName] = {
          modelUrlPath: fileName + ".png",
          modelHeight: modelHeight,
          modelTitle: modelTitle,
        };
      }

      if (modelType === "plain" && modelSide === "front") {
        plains[modelName] = {
          coverUrlPath: fileName + ".png",
          modelHeight: modelHeight,
        };
      }
    });
    // console.log(mains)
    return { mains, plains };
  }

  renderModel(urlPath, mains, plains) {
    console.log(urlPath);
    console.log(mains);
    console.log(plains);
    const prefix =
      "https://res.cloudinary.com/diarrablu/image/upload/diarrablu/ghost_models/";
    const pattern = urlPath;
    const padding = 20;
    const size = `auto ${this.state.height / this.props.size}px`;
    var xSize = this.state.width * (this.props.xValue / 100.0);
    var ySize = this.state.height * (this.props.yValue / 100.0);
    var repeat = this.props.size == 1 ? "repeat" : "repeat";

    const toRender = Object.keys(mains).map((item, index) => (
      <div
        ref={(divElement) => {
          this.divElement = divElement;
        }}
      >
        <SingleModelModule
          ghostImage={`url(${prefix + mains[item].modelUrlPath})`}
          ghostSize={`contain`}
          patternImage={pattern ? `url(${pattern})` : null}
          patternPosition={`${xSize}px ${ySize}px`}
          patternRepeat={`${repeat}`}
          patternSize={size}
          patternRotation={this.props.rotation}
          coverImage={
            Object.keys(plains).includes(item)
              ? `url(${prefix + plains[item].coverUrlPath})`
              : null
          }
          modelName={mains[item].modelTitle}
        />
      </div>
    ));
    return toRender;
  }

  render() {
    const options = { ...this.context, ...this.props };
    const urlPath = url(options.publicId, options);

    const { mains, plains } = this.getMainsAndPlains(options.ghostModels);
    // console.log(options)

    return (
      <div className="model-container">
        {this.renderModel(urlPath, mains, plains)}
      </div>
    );
  }

  showMore() {
    this.setState({ showMore: true });
  }

  showLess() {
    this.setState({ showMore: false });
  }

  static contextType = CloudinaryContext.contextType;
}

Photo.propTypes = {
  context: PropTypes.object,
  publicId: PropTypes.string,
};

export default Photo;
