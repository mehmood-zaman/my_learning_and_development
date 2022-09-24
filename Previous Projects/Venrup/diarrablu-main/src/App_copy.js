import React, { Component } from 'react';
import {state, useState} from 'react';
import { connect } from 'react-redux';
import {Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import {HashRouter as Router} from 'react-router-dom';
import PropTypes from 'prop-types';
import { CloudinaryContext, Image } from 'cloudinary-react';
import { photosFetched } from './actions';
import PhotoListContainer from './components/PhotoList';
import PhotosUploaderContainer from './components/PhotosUploader';
import { fetchPhotos } from './utils/CloudinaryService';
import './App.css';
import { Cloudinary as CoreCloudinary, Util } from 'cloudinary-core';
import Login from './components/Login';
// import PropTypes from 'prop-types'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {token:false}
    }


    componentDidMount() {
        fetchPhotos(this.props.cloudName).then(this.props.onPhotosFetched);
    }



    setToken (){

    }

    render() {

        return (
            <CloudinaryContext
                cloudName={this.props.cloudName}
                uploadPreset={this.props.uploadPreset}
            >

              <PhotoListContainer/>
            </CloudinaryContext>
        );
    }

}

App.propTypes = {
    cloudName: PropTypes.string,
    uploadPreset: PropTypes.string,
    onPhotosFetched: PropTypes.func,
};

App.contextTypes = {
    cloudName: PropTypes.string,
    uploadPreset: PropTypes.string,
};

const AppContainer = connect(
    null,
    { onPhotosFetched: photosFetched }
)(App);
Object.keys(AppContainer).includes("contextTypes") && Object.assign(AppContainer.contextTypes, App.contextTypes);

export default AppContainer;
