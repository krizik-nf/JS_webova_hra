let plemena = ["Ragdoll","Ragdoll","Norská lesní kočka", "Norská lesní kočka", "Bobcat","Bobcat","Tilcayo", "Tilcayo"];
// ragdoll - druha nejvetsi rasa kocek domacich
// norska lesni kocka - prirodne adaptovana na chladne podminky
// bobcat/lynx - ma kratky ocas
// tilcayo - nove objeveny druh v roce 2026

const board = document.getElementById("pexeso");

let kolo = 0;
let prvni_karta;
let druha_karta;

//w3 schools - sorting an array in random order
plemena.sort(function (){return 0.5 - Math.random()});

for(let i = 0; i<8; i++)
{
    const karta = document.createElement("button");
    karta.innerText = "?";

    let kocka = plemena[i];

    karta.addEventListener("click", event=>{
        karta.innerText = kocka;

    })

    board.appendChild(karta);
}