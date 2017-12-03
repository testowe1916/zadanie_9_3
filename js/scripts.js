var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
alert(text)
var dinosaur = "triceratops".toUpperCase();
alert(dinosaur)
var dinosaurReplace = text.replace("Velociraptor", dinosaur);
alert(dinosaurReplace)
alert(dinosaurReplace.length)
var newText = dinosaurReplace.slice(0,dinosaurReplace.length/2);
alert(dinosaurReplace.length/2)
console.log(newText);
alert(newText)