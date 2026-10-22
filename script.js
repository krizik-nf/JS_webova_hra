let plemena = ["Ragdoll", "Norská lesní kočka", "Bobcat", "Tilcayo"];
// ragdoll - druha nejvetsi rasa kocek domacich
// norska lesni kocka - prirodne adaptovana na chladne podminky
// bobcat/lynx - ma kratky ocas
// tilcayo - nove objeveny druh v roce 2026

const board = document.getElementById("pexeso");

let kolo = 0;
let prvni_karta;
let druha_karta;

for(let i = 0; i<8; i++)
{
    const karta = document.createElement("button");
    karta.innerText = "?";
    karta.addEventListener("click", event=>{

    })

    board.appendChild(karta);
}