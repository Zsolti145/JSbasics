function evKalk() {
  var born = document.getElementById("born").value;

  if (born.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)) {
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

    if (day < 20) month--;
    month = month % 12;

    var zodiac = zodiacList[month];

    var response = `Te most ${age} éves lehetsz, a csillagjegyed pedig ${zodiac}`;

    alert(response);
  } else alert("Nem megfelelő formátum!");
}


  function CompByLength(m1,m2){
      return m1.length - m2.length;
  }
  


function showMonths(){
var months = [
    "Január",
    "Február",
    "Március",
    "Április",
    "Május",
    "Június",
    "Július",
    "Augusztus",
    "Szeptember",
    "Október",
    "November",
    "December"
  ];
  months.sort(CompByLength);
  months.reverse();

  var ul = document.createElement("ul");
  document.body.appendChild(ul);

  for(var m of months)
  {
      ul.innerHTML += `<li>${m}</li>`;
  }

  var ul = document.createElement("ul");
  document.body.appendChild(ul);

  for(var m of months)
  {
      if(m.endsWith("ber")){
      ul.innerHTML += `<li>${m}</li>`;
      }
  }
}