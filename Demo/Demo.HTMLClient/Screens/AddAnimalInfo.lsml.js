/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddAnimalInfo.created = function (screen) {
    // Write code here.
    if (screen.AnimalInfo === null) {
        screen.AnimalInfo = new myapp.AnimalInfo();
    }

    screen.AnimalInfo.AnimalName = screen.Animal;
};