let plemena = ["Ragdoll","Ragdoll","Norska", "Norska", "Bobcat","Bobcat","Tilcayo", "Tilcayo"];

// ragdoll - druha nejvetsi rasa kocek domacich https://cs.wikipedia.org/wiki/Ragdoll
// norska lesni kocka - prirodne adaptovana na chladne podminky https://cs.wikipedia.org/wiki/Norsk%C3%A1_lesn%C3%AD_ko%C4%8Dka
// bobcat/lynx - ma kratky ocas https://en.wikipedia.org/wiki/Bobcat
// tilcayo - nove objeveny druh v roce 2026 https://en.wikipedia.org/wiki/Tilcayo

const board = document.getElementById("pexeso");
const text_kocka = document.getElementById("text_kocka");
const skore = document.getElementById("skore");

let kolo = 0;
let prvni_karta;
let druha_karta;
let nalezene_pary = 0;

function refreshPage() {
  location.reload();
}

// w3 schools - sorting an array in random order
// zamicha pole
plemena.sort(function () {
  return 0.5 - Math.random();
});

for (let i = 0; i < 8; i++) {
  const karta = document.createElement("button");
  karta.innerText = "?";

  let kocka = plemena[i];

  karta.addEventListener("click", (event) => {
    if (karta.innerText === "?") //jen zakryty karty
    {
      if (kolo === 2) // kdyz jsou odkryty dve karty, ktery se neshodovali, schovame je a dame novy kolo
      {
        prvni_karta.innerText = "?";
        druha_karta.innerText = "?";
        kolo = 0;
      }

      if (kocka === "Norska") { // odkryti karty, Norska kvuli hostingu
        karta.innerText = "Norská lesní kočka";
      } else {
        karta.innerText = kocka;
      }

      // vytvori obrazek karty
      const fotkakocka = document.createElement("img");
      fotkakocka.src = "kocky/" + kocka + ".png";
      karta.appendChild(fotkakocka);

      kolo++; 

      if (kolo === 1) {
        prvni_karta = karta; //prvni odkryta karta
      } else if (kolo === 2) {
        druha_karta = karta; // odkryta druha karta a porovname

        if (prvni_karta.innerText === druha_karta.innerText) { //kdyz je stejny par
          kolo = 0;

          nalezene_pary++;

          skore.innerText = "Skóre: " + nalezene_pary + "/4";

          if (nalezene_pary === 4) { // win
            const reset_tlacitko = document.createElement("button");
            reset_tlacitko.innerText = "Restartovat hru";
            skore.appendChild(reset_tlacitko);

            alert("Konec hry!");

            reset_tlacitko.onclick = refreshPage;
          }

          if (prvni_karta.innerText === "Ragdoll") {
            text_kocka.innerText =
              "Ragdoll je druhá největší rasa koček domácích.";
          }
          if (prvni_karta.innerText === "Norská lesní kočka") {
            text_kocka.innerText =
              "Norská lesní kočka je přírodně adaptovaná na chladné podmínky.";
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
