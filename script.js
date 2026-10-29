let plemena = ["Ragdoll","Ragdoll","Norská lesní kočka", "Norská lesní kočka", "Bobcat","Bobcat","Tilcayo", "Tilcayo"];

// ragdoll - druha nejvetsi rasa kocek domacich
// norska lesni kocka - prirodne adaptovana na chladne podminky
// bobcat/lynx - ma kratky ocas
// tilcayo - nove objeveny druh v roce 2026

const board = document.getElementById("pexeso");
const text_kocka = document.getElementById("text_kocka");

let kolo = 0;
let prvni_karta;
let druha_karta;

//w3 schools - sorting an array in random order
plemena.sort(function () {
  return 0.5 - Math.random();
});

for (let i = 0; i < 8; i++) {
  const karta = document.createElement("button");
  karta.innerText = "?";

  let kocka = plemena[i];

  karta.addEventListener("click", (event) => {
    if (karta.innerText === "?") //jen zakryty kartky
    {
      if (kolo === 2) // kdyz minule byl spatny par tak se zakryjou
      {
        prvni_karta.innerText = "?";
        druha_karta.innerText = "?";
        kolo = 0;
      }
      
      karta.innerText = kocka;
      kolo++;

      if (kolo === 1) {
        prvni_karta = karta;
      } else if (kolo === 2) {
        druha_karta = karta;

        if (prvni_karta.innerText === druha_karta.innerText) {
          console.log("test");
          kolo = 0;

          if (prvni_karta.innerText === "Ragdoll") {
            text_kocka.innerText = "Ragdoll je druha nejvetsi rasa kocek domacich";
          }
          if (prvni_karta.innerText === "Norská lesní kočka") {
            text_kocka.innerText = "Norská lesní kočka je prirodne adaptovana na chladne podminky";
          }
          if (prvni_karta.innerText === "Bobcat") {
            text_kocka.innerText = "Bobcat ma kratky ocas";
          }
          if (prvni_karta.innerText === "Tilcayo") {
            text_kocka.innerText = "Tilcayo je nove objeveny druh v roce 2026";
          }
        }
      }
    }
  });

  board.appendChild(karta);
}
