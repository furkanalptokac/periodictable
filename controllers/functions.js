const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const path = require('path');

const adapterPath = path.join(__dirname, 'data.json');
const adapter = new FileSync(adapterPath);
const db = low(adapter);

const dirPath = path.join(__dirname, '/public/media/img/elements/');
const ext = '.gif';

const getir = (input) => {
  let inputDeger = Number(input.value); 
  let atomNo = document.getElementById("atomno");
  let adi = document.getElementById("adi");
  let simge = document.getElementById("simge");
  let dizilis = document.getElementById("dizilis");
  let bagtipi = document.getElementById("bagtipi");
  let grup = document.getElementById("grup");
  let sene = document.getElementById("sene");
  let erimeNoktasi = document.getElementById("erimenoktasi");
  let kaynamaNoktasi = document.getElementById("kaynamanoktasi");
  let standartHali = document.getElementById("standarthali");
  let atomImg = document.getElementById("atomimg");

  const atom = db
    .find({
      atomNumarasi: inputDeger
    })
    .value();

  atomNo.innerHTML = atom.atomNumarasi;
  adi.innerHTML = atom.adi;
  simge.innerHTML = atom.sembol;
  dizilis.innerHTML = atom.elektronDizilisi;
  bagtipi.innerHTML = atom.bagTipi;
  grup.innerHTML = atom.hangiGrup;
  sene.innerHTML = atom.kesfedildigiYil;
  erimeNoktasi.innerHTML = atom.erimeNoktasi;
  kaynamaNoktasi.innerHTML = atom.kaynamaNoktasi;
  standartHali.innerHTML = atom.standartHali;

  atomImg.src = `${dirPath}${inputDeger}${ext}`;
}

const pressed = (btn) => {
  let atomNo = document.getElementById("atomno");
  let adi = document.getElementById("adi");
  let simge = document.getElementById("simge");
  let dizilis = document.getElementById("dizilis");
  let bagtipi = document.getElementById("bagtipi");
  let grup = document.getElementById("grup");
  let sene = document.getElementById("sene");
  let erimeNoktasi = document.getElementById("erimenoktasi");
  let kaynamaNoktasi = document.getElementById("kaynamanoktasi");
  let standartHali = document.getElementById("standarthali");
  let atomImg = document.getElementById("atomimg");

  let btnId = parseInt(btn.id);

  const atom = db
    .find({
      atomNumarasi: btnId
    })
    .value();

  atomNo.innerHTML = atom.atomNumarasi;
  adi.innerHTML = atom.adi;
  simge.innerHTML = atom.sembol;
  dizilis.innerHTML = atom.elektronDizilisi;
  bagtipi.innerHTML = atom.bagTipi;
  grup.innerHTML = atom.hangiGrup;
  sene.innerHTML = atom.kesfedildigiYil;
  erimeNoktasi.innerHTML = atom.erimeNoktasi;
  kaynamaNoktasi.innerHTML = atom.kaynamaNoktasi;
  standartHali.innerHTML = atom.standartHali;

  atomImg.src = `${dirPath}${btn.id}${ext}`;
}

const goster = () => {
  const video1 = document.getElementById("infovideo");
  const video2 = document.getElementById("infovideo2");

  video1.style.display = "inline";
  video2.style.display = "inline";
}

const gizle = () => {
  const video1 = document.getElementById("infovideo");
  const video2 = document.getElementById("infovideo2");

  video1.style.display = "none";
  video2.style.display = "none";
}
