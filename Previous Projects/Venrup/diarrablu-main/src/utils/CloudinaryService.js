import { Cloudinary as CoreCloudinary, Util } from 'cloudinary-core';
// var cloudinary = require('cloudinary').v2;
// import cloudinary from 'cloudinary'

export const url = (publicId, options) => {
    try {
        const scOptions = Util.withSnakeCaseKeys(options);
        const cl = CoreCloudinary.new();
        return cl.url(publicId, scOptions);
    } catch (e) {
        console.error(e);
        return null;
    }
};

// export const openUploadWidget = (options, callback) => {
//
//     const scOptions = Util.withSnakeCaseKeys(options);
//     console.log(options, scOptions)
//     window.cloudinary.openUploadWidget(scOptions, callback);
// };

// export const openUploadWidget = () => {
//  window.cloudinary.openUploadWidget({
//     cloud_name: "diarrablu",
//     upload_preset: "diarrablu",
//     sources: [
//         "local",
//         "url",
//         "camera",
//         "image_search",
//         "google_drive",
//         "facebook",
//         "dropbox",
//         "instagram",
//         "shutterstock"
//     ],
//     googleApiKey: "<image_search_google_api_key>",
//     showAdvancedOptions: true,
//     cropping: false,
//     multiple: false,
//     defaultSource: "local",
//     styles: {
//         palette: {
//             window: "#FFFFFF",
//             windowBorder: "#90A0B3",
//             tabIcon: "#0078FF",
//             menuIcons: "#5A616A",
//             textDark: "#000000",
//             textLight: "#FFFFFF",
//             link: "#0078FF",
//             action: "#FF620C",
//             inactiveTabIcon: "#0E2F5A",
//             error: "#F44235",
//             inProgress: "#0078FF",
//             complete: "#20B832",
//             sourceBg: "#E00000"
//         },
//         fonts: {
//             default: null,
//             "'IBM Plex Sans', sans-serif": {
//                 url: "https://fonts.googleapis.com/css?family=IBM+Plex+Sans",
//                 active: true
//             }
//         }
//     }
// },
//  (err, info) => {
//    if (!err) {
//      console.log("Upload Widget event - ", info);
//    }
//   });
//  }

export const openUploadWidget = (options, callback) => {
    // console.log(options)
    const scOptions =  {
    cloudName: "dirrablu",
    uploadPreset: "dirrablu",
    showAdvancedOptions: false,
    // api_key:474153881533846,
    styles: {
       palette: {
           window: "#FFFFFF",
           windowBorder: "#90A0B3",
           tabIcon: "#0078FF",
           menuIcons: "#5A616A",
           textDark: "#000000",
           textLight: "#FFFFFF",
           link: "#0078FF",
           action: "#FF620C",
           inactiveTabIcon: "#0E2F5A",
           error: "#F44235",
           inProgress: "#0078FF",
           complete: "#20B832",
           sourceBg: "#E00000"
       },
       fonts: {
           default: null,
           "'IBM Plex Sans', sans-serif": {
               url: "https://fonts.googleapis.com/css?family=IBM+Plex+Sans",
               active: true
           }
       }}
     }
    window.cloudinary.createUploadWidget(scOptions, callback);
};

// export const openUploadWidget = (options, callback) => {
//   window.cloudinary.openUploadWidget({
//     cloudName: "diarrablu",
//     uploadPreset: "diarrablu",   // default preset
//     showAdvancedOptions: true,
//     // getUploadPresets: getMyUploadPresets
//     },  (error, result) => { });
//     // const scOptions = Util.withSnakeCaseKeys(options);
//     // window.cloudinary.openUploadWidget(scOptions, callback);
// };

export const fetchPhotos = cloudName => {
    // instead of maintaining the list of images, we rely on the 'myphotoalbum' tag
    // and simply retrieve a list of all images with that tag.
    // the version property is used for cache bust (lists are cached by the CDN for 1 minute)
    // *************************************************************************
    // Note that this practice is DISCOURAGED in production code and is here
    // for demonstration purposes only
    // *************************************************************************
    const options = {
        cloudName: cloudName,
        format: 'json',
        type: 'list',
        styles:{
        palette: {
          window: "red",
          windowBorder: "red",
          tabIcon: "#0E2F5A",
          menuIcons: "#5A616A",
          textDark: "#000000",
          textLight: "#FFFFFF",
          link:  "#0078FF",
          action:  "#FF620C",
          inactiveTabIcon: "#0E2F5A",
          error: "#F44235",
          inProgress: "#0078FF",
          complete: "#20B832",
          sourceBg: "#E4EBF1"
        },   fonts: {
        "'Cute Font', cursive": "https://fonts.googleapis.com/css?family=Cute+Font",
    }},
        version: Math.ceil(new Date().getTime() / 1000),
    };

    const urlPath = url('myphotoalbum', options);

    return fetch(urlPath)
        .then(res => res.text())
        .then(text => (text ? JSON.parse(text).resources : []));
};
//
// cloudinary.v2.search.expression(
//   'folder:xx/*' // add your folder
//   ).sort_by('public_id','desc').max_results(30).execute().then(result=>console.log(result));
