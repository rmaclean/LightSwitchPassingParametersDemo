/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseAnimals.ShowWeaselCodeWay_execute = function (screen) {
    // Write code here.
    myapp.showWeasel(screen.AnimalsSet.selectedItem.Name);
};
myapp.BrowseAnimals.ShowAnimalInfo_execute = function (screen) {
    // Write code here.
    myapp.showAddAnimalInfo(null, screen.AnimalsSet.selectedItem.Name);
};