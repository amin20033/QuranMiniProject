let surahURL = "https://quranapi.pages.dev/api/surah.json";
let btn = document.querySelector("button");
let h1 = document.querySelector(".h1");
let bengali = document.querySelector(".bengali");
let urdu = document.querySelector(".urdu");
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let p3 = document.querySelector(".p3");
let h2=document.querySelector("h2")
async function runData() {
  let data = await fetch(surahURL);
  let randSurahNum = (Math.floor(Math.random() * 114))+1;
  let readData = await data.json();
  let totalAyat = Number(readData[randSurahNum]["totalAyah"]);
  let randAyat = Math.floor(Math.random() * totalAyat) + 1;
  let verseURL = await fetch(
    `https://quranapi.pages.dev/api/${randSurahNum}/${randAyat}.json`
  );
  let readVerse = await verseURL.json();
  h1.innerHTML = readVerse["english"];
  p1.innerHTML = "Surah Name: " + readVerse["surahName"];
  p2.innerHTML = "Ayat Number: " + readVerse["ayahNo"];
  p3.textContent = readVerse["arabic1"];
  h2.style.display="block"
  urdu.innerHTML=readVerse["urdu"]
  bengali.innerHTML=readVerse["bengali"]
  let audio = readVerse["audio"]["1"]["url"];
  document.querySelector("a").setAttribute("href",`${audio}`)
}
btn.addEventListener("click", runData);
