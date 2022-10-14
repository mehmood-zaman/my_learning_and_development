import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import PhotosListReducer from './reducers/PhotosListReducer';
import UploadedPhotosReducer from './reducers/UploadedPhotosReducer';
import config from './config/config';
import { Auth0Provider } from "@auth0/auth0-react";

const rootReducer = combineReducers({
    photos: PhotosListReducer,
    uploadedPhotos: UploadedPhotosReducer,
});

const store = createStore(rootReducer);
const {cloud_name, upload_preset} = config;

render(
    <Auth0Provider
    domain="diarrablu.us.auth0.com"
    clientId="foozCN67mzbKRKWLGMcXrtBJppEJKzOi"
    redirectUri={window.location.origin}
    >

    <Provider store={store}>
        <App cloudName={cloud_name} uploadPreset={upload_preset}/>
    </Provider>
    </Auth0Provider>,
    document.getElementById('root')
);
