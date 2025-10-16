let gyumolcsokJson = '{"neve":"alma","ara":200,"mennyiseg":5}';
console.log(gyumolcsokJson);
console.log(typeof gyumolcsokJson);
let gyumolcsokObj = JSON.parse(gyumolcsokJson);
console.log(typeof gyumolcsokObj);
console.log(gyumolcsokObj.neve);
console.log(gyumolcsokObj.ara);

// újra szövegé alakítástovábbítás elött
let gyumolcsokJson2 = JSON.stringify(gyumolcsokObj);
console.log(gyumolcsokJson2);