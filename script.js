function pilihanComp() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function rules(comp, p) {
  if (p == comp) return "SERI";
  if (p == "gajah") return comp == "orang" ? "MENANG" : "KALAH";
  if (p == "semut") return comp == "gajah" ? "MENANG" : "KALAH";
  if (p == "orang") return comp == "semut" ? "MENANG" : "KALAH";
}

function putar() {
  const imgComp = document.querySelector(".img-comp");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComp.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

let hPlayer = 0;
let hComp = 0;
const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (i) {
  i.addEventListener("click", function () {
    const pComp = pilihanComp();
    const pPlayer = i.className;
    const hasil = rules(pComp, pPlayer);

    putar();
    setTimeout(function () {
      const imgComp = document.querySelector(".img-comp");
      imgComp.setAttribute("src", "img/" + pComp + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;

      const skorComp = document.querySelector(".skor-comp");
      const skorPlayer = document.querySelector(".skor-player");

      if (hasil == "MENANG") hPlayer++;
      skorPlayer.innerHTML = hPlayer;
      if (hasil == "KALAH") hComp++;
      skorComp.innerHTML = hComp;
    }, 1000);
  });
});

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pComp = pilihanComp();
//   const pPlayer = pGajah.className;
//   const hasil = rules(pComp, pPlayer);

//   const imgComp = document.querySelector(".img-comp");
//   imgComp.setAttribute("src", "img/" + pComp + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pComp = pilihanComp();
//   const pPlayer = pOrang.className;
//   const hasil = rules(pComp, pPlayer);

//   const imgComp = document.querySelector(".img-comp");
//   imgComp.setAttribute("src", "img/" + pComp + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pComp = pilihanComp();
//   const pPlayer = pSemut.className;
//   const hasil = rules(pComp, pPlayer);

//   const imgComp = document.querySelector(".img-comp");
//   imgComp.setAttribute("src", "img/" + pComp + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
