import React, { Component } from 'react';
// import { useEffect } from 'react'
import {state, useState,useEffect} from 'react';
import { connect } from 'react-redux';
import {Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import {HashRouter as Router} from 'react-router-dom';
import PropTypes from 'prop-types';
import { CloudinaryContext, Image } from 'cloudinary-react';
import { photosFetched } from './actions';
import PhotoListContainer from './components/PhotoList';
// import PhotosUploaderContainer from './components/PhotosUploader';
import { fetchPhotos } from './utils/CloudinaryService';
import './App.css';
import { Cloudinary as CoreCloudinary, Util } from 'cloudinary-core';
import Login from './components/Login';
import { useAuth0 } from '@auth0/auth0-react';

function App ({
              uploadPreset =  "diarrablu",
              onPhotosFetched = PropTypes.func,
              cloudName= "diarrablu",
                                            })
    {

    useEffect(() => {
        // fetchPhotos(cloudName).then(onPhotosFetched);
    })

    const {
      isLoading,
      isAuthenticated,
      error,
      user,
      loginWithRedirect,
      logout,
    } = useAuth0();

    if (isLoading) {
   return <div>Loading...</div>;
     }
     if (error) {
       return <div>Oops... {error.message}</div>;
     }

     if (isAuthenticated) {

      return (
              <CloudinaryContext
                  cloudName={"diarrablu"}
                  uploadPreset={"diarrablu"}
              >
                <div className="navbar">
                  <div className="logo" ></div>
                  <div
                    onClick={() => logout({ returnTo: window.location.origin })}
                    >Log out
                  </div>
                 </div>
                <PhotoListContainer/>
              </CloudinaryContext>
          );
    } else {

       return (
         <div className="login-page">
           <div className="navbar-login">
             <div className="logo" ></div>
            </div>
          <button className="login-button" onClick={loginWithRedirect}>Log in</button>
       </div>
     )
   }
}

    App.propTypes = {
        cloudName: PropTypes.string,
        uploadPreset: PropTypes.string,
        onPhotosFetched: PropTypes.func,
    };
    //
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
