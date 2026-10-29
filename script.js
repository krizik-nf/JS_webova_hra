let plemena = ["Ragdoll","Ragdoll","Norská lesní kočka", "Norská lesní kočka", "Bobcat","Bobcat","Tilcayo", "Tilcayo"];

// ragdoll - druha nejvetsi rasa kocek domacich https://cs.wikipedia.org/wiki/Ragdoll
// norska lesni kocka - prirodne adaptovana na chladne podminky https://cs.wikipedia.org/wiki/Norsk%C3%A1_lesn%C3%AD_ko%C4%8Dka
// bobcat/lynx - ma kratky ocas https://en.wikipedia.org/wiki/Bobcat
// tilcayo - nove objeveny druh v roce 2026 https://en.wikipedia.org/wiki/Tilcayo

const board = document.getElementById("pexeso");
const text_kocka = document.getElementById("text_kocka");

let kolo = 0;
let prvni_karta;
let druha_karta;
let nalezene_pary = 0;

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
      const fotkakocka = document.createElement("img");
      fotkakocka.src = "kocky/" + kocka + ".png"; //
      karta.appendChild(fotkakocka);
      kolo++;

      if (kolo === 1) {
        prvni_karta = karta;
      } else if (kolo === 2) {
        druha_karta = karta;

        if (prvni_karta.innerText === druha_karta.innerText) {
          console.log("test");
          kolo = 0;
          
          nalezene_pary++;
          if(nalezene_pary == 4)
            {
              alert("konec hry!");
            }

          if (prvni_karta.innerText === "Ragdoll") {
            text_kocka.innerText = "Ragdoll je druhá největší rasa koček domácích.";
          }
          if (prvni_karta.innerText === "Norská lesní kočka") {
            text_kocka.innerText = "Norská lesní kočka je přírodně adaptovaná na chladné podmínky.";
          }
          if (prvni_karta.innerText === "Bobcat") {
            text_kocka.innerText = "Bobcat má krátký ocas.";
          }
          if (prvni_karta.innerText === "Tilcayo") {
            text_kocka.innerText = "Tilcayo je nově objevený druh v roce 2026.";
          }
        }
      }
    }
  });
 
  board.appendChild(karta);
}
