/* INTERAL FUNCTIONS - ONLY ACCESSIBLE WITHIN THIS SCRIPT */

//adds a single photo to the body - data is base64 image
function addPhoto(data) {

    //create div element
    const divTemplate = document.createElement("div");
    divTemplate.className = "gallery-item";
    divTemplate.onclick = function () { callFileMakerScript(__openModalScript__, data.id); };

    const deleteButton = document.createElement("button");

    const viewButton = document.createElement("button");

    //create img element
    const imgTemplate = document.createElement("img");
    imgTemplate.src = `data:image/png;base64,${data.src}`;
    imgTemplate.id = data.id;

    //append img to div, then div to gallery
    divTemplate.appendChild(imgTemplate);
    document.querySelector(".gallery").appendChild(divTemplate);

    return;
}

//calls filemaker script, with parameter and option
function callFileMakerScript(script, params, option) {

    console.log(JSON.parse(JSON.stringify(params)));
    console.log("script: " + script);

    //"3" produces the same result as the normal "PerformScript" function
    if (option == null) {
        option = 3;
    }

    try {
        FileMaker.PerformScriptWithOption(script, params, option);
    }
    catch (Error) {
        $("#error").innerText = "Error: " + Error;
        return Error;
    }
    return;
}

export { addPhoto, callFileMakerScript };