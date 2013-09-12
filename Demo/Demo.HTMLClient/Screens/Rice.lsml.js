/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.Rice.created = function (screen) {
    // Write code here.
    screen.findContentItem("ScreenContent").tag = screen.data;
};

myapp.Rice.ScreenContent_render = function (element, contentItem) {
    var data = contentItem.tag;
    
    element.innerText = "first name: " + data.firstname;
};