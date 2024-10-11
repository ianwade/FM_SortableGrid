//import libraries
import Sortable from 'sortablejs';
import $ from 'jquery';
import Dropzone from "dropzone";
import OnFMReady from "onfmready.js";

//import custom functions
import { addPhoto, callFileMakerScript } from '../scripts/sortable-grid';

//import config variables
import * as config from '../widget.config';

//Calls a function as soon as FileMaker functions are ready
window.addEventListener('filemaker-ready', () => {
  FileMaker.PerformScriptWithOption(__loadContentScript__, "", 5);
});

// Assign all config variables to the global scope dynamically
Object.keys(config).forEach(key => {
  window[key] = config[key];
});

$(document).ready(function () {

  //initialize sortablejs
  let gallery = document.querySelector('.gallery');
  let sortable = Sortable.create(gallery, {
    animation: 150,
  });

  //initialize dropzonejs
  let dropzoneElement = document.querySelector("#dropzone-upload");
  let dropzone = new Dropzone(dropzoneElement, {
    url: "/file/post",
    maxFilesize: 100, // MB
    uploadMultiple: true,
    autoProcessQueue: false,

    init: function () {
      this.on("addedfile", function (file) {
        // Convert file to Base64 using FileReader
        let reader = new FileReader();

        reader.onload = function (e) {
          // Base64 encoded file
          let base64String = e.target.result.split(',')[1]; // Strip off the data URL prefix

          let fileObj = {
            name: file.name,
            size: file.size,
            path: file.path,
            contents: base64String,
            count: file.count
            //total: ""
          }

          // Call FileMaker script with Base64 data
          if (typeof FileMaker !== "undefined") {
            FileMaker.PerformScriptWithOption(__uploadFileScript__, JSON.stringify(fileObj), "5");
          } else {
            console.error("FileMaker.PerformScript is not available.");
          }
        };

        // Read file as a Data URL
        reader.readAsDataURL(file);
      });
    }
  });
});

/* EXTERNAL FUNCTIONS - CALLED BY FILEMAKER */

//processes FileMaker Data API response - creates new DOM element for each photo passed
window.initialize = function (data) {

  try {
    if (data.length == 0)
      throw new Error("No data passed");

    let json = JSON.parse(data);

    for (let img of json) {

      let obj = {
        src: img.fieldData["Photo_Base64"],
        id: img.fieldData["ID"],
        id_item: img.fieldData["ID Item"],
        filename: img.fieldData["File Name"]
      }

      addPhoto(obj);
    }

    $("#error").hide(); //let status = document.querySelector(".status-container").style.display = "none";

  } catch (e) {
    $("#error-message").text("No Photos"); //let status = document.querySelector(".error").innerText = "No Photos";
  } finally {
    $("#loader").hide(); //let loader = document.querySelector(".loader-container").style.display = "none";
  }
}

//will hide/show dropzone element when called ; returns the current state of the dropzone ("hidden"/"shown")
window.toggleUpload = function () {

  try {
    let state = "";
    if ($("#dropzone").is(":visible")) {
      $("#dropzone").hide();
      $("#gallery").show();
      state = "hidden";
    }
    else {
      $("#dropzone").show();
      $("#gallery").hide();
      state = "shown";
    }

    return callFileMakerScript(__returned__, state, 5);
  } catch (Error) {
    return Error;
  }
}