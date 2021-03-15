function evKalk(){
  var born = document.getElementById('born').value;

  born = born.split("-");
  var year = parseInt(born[0]);
  var month = parseInt(born[1]);
  var day = parseInt(born[2]);

  var age = new Date().getFullYear() - year;

  var zodiacList = [
    "Bak",
    "Vízöntő",
    "Halak",
    "Kos",
    "Bika",
    "Ikrek",
    "Rák",
    "Mérleg",
    "Szűz",
    "Skorpió",
    "Nyilas",
  ];

  if(day < 20) month--;
  month = month %12;

  var zodiac = zodiacList[month];

  var response = `Te most ${age} éves lehetsz, a csillagjegyed pedig ${zodiac}`;


  alert(response);
};



