/// <reference path="../GeneratedArtifacts/viewModel.js" />

var d;

myapp.Weasel.ScreenContent_render = function (element, contentItem) {
    // Write code here.
    element.innerText = d;
};

myapp.Weasel.created = function (screen) {
    // Write code here.
    d = screen.myData;
};