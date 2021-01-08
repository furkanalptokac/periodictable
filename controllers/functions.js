const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('data.json');
const db = low(adapter);

const path = './media/img/elements/';
const ext = '.gif'

function getir(input) {
    let inputdeger = Number(input.value);
  
    let atomno = document.getElementById("atomno");
    let adi = document.getElementById("adi");
    let simge = document.getElementById("simge");
    let dizilis = document.getElementById("dizilis");
    let bagtipi = document.getElementById("bagtipi");
    let sene = document.getElementById("sene");
    let atomimg = document.getElementById("atomimg");

    atom = db.find({ atomNumarasi: inputdeger }).value();
    atomno.innerHTML = atom.atomNumarasi;
    adi.innerHTML = atom.adi;
    simge.innerHTML = atom.sembol;
    dizilis.innerHTML = atom.elektronDizilisi;
    bagtipi.innerHTML = atom.bagTipi;
    sene.innerHTML = atom.kesfedildigiYil;
    atomimg.src = `${path}${inputdeger}${ext}`;
}

function pressed (btn) {
    let atomno = document.getElementById('atomno');
    let adi = document.getElementById('adi');
    let simge = document.getElementById('simge');
    let dizilis = document.getElementById('dizilis');
    let bagtipi = document.getElementById('bagtipi');
    let sene = document.getElementById('sene');
    let atomimg = document.getElementById('atomimg');
    let btnid = parseInt(btn.id);
    
    atom = db
        .find({ atomNumarasi: btnid })
        .value();

    atomno.innerHTML = atom.atomNumarasi;
    adi.innerHTML = atom.adi;
    simge.innerHTML = atom.sembol;
    dizilis.innerHTML = atom.elektronDizilisi;
    bagtipi.innerHTML = atom.bagTipi;
    sene.innerHTML = atom.kesfedildigiYil;
    atomimg.src = `${path}${btn.id}${ext}`;
}