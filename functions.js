const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('data.json');
const db = low(adapter);

const path = './media/img/elements/';
const ext = '.gif'

function pressed (btn) {
    var atomno = document.getElementById('atomno');
    var adi = document.getElementById('adi');
    var simge = document.getElementById('simge');
    var dizilis = document.getElementById('dizilis');
    var bagtipi = document.getElementById('bagtipi');
    var sene = document.getElementById('sene');
    var atomimg = document.getElementById('atomimg');
    var btnid = parseInt(btn.id);
    
    atom = db
        .find({ atomicNumber: btnid })
        .value();

    atomno.innerHTML = atom.atomicNumber;
    adi.innerHTML = atom.name;
    simge.innerHTML = atom.symbol;
    dizilis.innerHTML = atom.electronicConfiguration;
    bagtipi.innerHTML = atom.bondingType;
    sene.innerHTML = atom.yearDiscovered;
    atomimg.src = `${path}${btn.id}${ext}`;
}