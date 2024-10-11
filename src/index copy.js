  // dropzone.on("addedfile", file => {
  //   console.log(file); 
  // });

  // const target = document.getElementById("dropzone-upload");
  
  // window.addEventListener("dragenter", (event) => {
  //   console.log(event);
  //   // highlight potential drop target when the draggable element enters it
  //   //if (event.target.classList.contains("dropzone-upload")) {
  //     event.target.classList.add("dragover");
  //   //}

  //   //$(".dropzone").show();
  // });

  // window.addEventListener("dragleave", (event) => {
  //   console.log(event);
  //   // reset background of potential drop target when the draggable element leaves it
  //   //if (event.target.classList.contains("dropzone-upload")) {
  //     event.target.classList.remove("dragover");
  //   //}
  //   //$(".dropzone").hide();
  // });

  // // Show Dropzone when files are dragged over the window
  // window.addEventListener('dragenter', function (e) {

  //   //console.log("drag ebter");
  //   // Only show the Dropzone if the user is dragging files (not just dragging in general)

  //   //console.log(e);
  //   //console.log(e.dataTransfer);

  //   if (e.dataTransfer.dropEffect != "move") {
  //     $(".dropzone-container").show();
  //     console.log(e.dataTransfer);
  //   }
  // });

  // // Hide Dropzone when files are dragged out or dropped
  // window.addEventListener('dragleave', function (e) {
  //   // Hide Dropzone if we're leaving the window or no items are being dragged anymore
  //   //$(".dropzone-container").hide();
  //   //console.log(e.dataTransfer);

  //   if (!$(e.target).closest(dropzoneElement).length) {
      
  //   }
  // });

  // // Hide Dropzone after dropping the file
  // window.addEventListener('drop', function (e) {
  //   $(dropzoneElement).hide();
  // });

// let dropzone = Dropzone.options.dropzoneUpload = {
//   paramName: "file", // The name that will be used to transfer the file
//   maxFilesize: 2, // MB
//   accept: function(file, done) {
//     if (file.name == "justinbieber.jpg") {
//       done("Naha, you don't.");
//     }
//     else { done(); }
//   }};

//   console.log(dropzone);

  

  //callFileMakerScript(__loadContentScript__, "");

  

  /*var theURL =
    "fmp://$/" + __fileName__ + "?script=" +
    script +
    "&param=" +
    encodeURIComponent(JSON.stringify(params, null, 2));

  window.location = theURL;*/

// // Function to call a FileMaker script via Data API
// async function callFileMakerServerScript(scriptName, scriptParam) {
//   const serverUrl = "https://team-gm.skdata.cloud/fmi/data/v2/databases/"+ __fileName__ +"/sessions";
  
//   const response = await fetch(serverUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'c2tlbGV0b24ua2V5:VkI4c1Yqc15TcFJYdnhJ', 
//     },
//     params:{ "fmDataSource":
//       [ { "database":config.__fileName__, "username":"skeleton.key", "password":"VB8sV*s^SpRXvxI" } ]
//     }
//   });

//   //const data = await response.json();
//   //console.log("Script Result: ", data);
// }


    // //call FileMaker when ready
    /*try {
      // FileMaker.PerformScriptWithOption("Item: Detail: Photo Viewer: Load Content", "", 5);
      FileMaker.PerformScript("Item: Detail: Photo Viewer: Load Content", "");
    } catch (Error) {
      console.log(Error);
      //onError("Failed to load form data. Please close this window and try again.", Error);
    }*/

    //load libaries and other initial logic
   
      
      /*{
        animation: 150,  // Smooth drag animation
        onStart: function (event) { },
        onEnd: function (event) {
          //call FileMaker function to set some field to be the new position
        }
      });*/

      // Dropzone.options.myGreatDropzone = { // camelized version of the `id`
      // paramName: "file", // The name that will be used to transfer the file
      // maxFilesize: 2, // MB
      // accept: function (file, done) {
      //   if (file.name == "justinbieber.jpg") {
      //     done("Naha, you don't.");
      //   }
      //   else { done(); }
      // }


      //const imageHeight = 100;

      /*const gallery_img = document.querySelector('.gallery-item img');
      gallery_img.style.height = imageHeight;*/

      /*const scrollContainer = document.body; //document.querySelector('.carousel');

      scrollContainer.addEventListener('wheel', function (event) {
        event.preventDefault(); // Prevent vertical scroll
        scrollContainer.scrollLeft += event.deltaY; // Scroll horizontally
        //console.log(scrollContainer.scrollLeft);
        //console.log(event);
      });*/