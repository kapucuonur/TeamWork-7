const tasıyıcı =document.querySelector(".tasıcıyı")
const h1=document.querySelector(".baslık")
const kutu=document.querySelector(".kutu")
const texarea=document.querySelector(".input")
const gönder=document.querySelector(".gönder")
const reset=document.querySelector(".reset")
const ul=document.querySelector(".cevaplar")
const info=document.querySelector(".info")
function sesliHarf(x) {
  let sesli = ['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'];
  let sesliHarfDizi = [];
  for (let i = 0; i < x.length; i++) {
    let harf = x[i].toLowerCase();
    if (sesli.includes(harf)) {
      sesliHarfDizi.push(x[i]);
    }
  }
  return sesliHarfDizi;
}
gönder.addEventListener("click",()=>{
  let mesaj= texarea.value;
  let sonuc=sesliHarf(mesaj)
// ul.textContent=``
// for(let i=0; i<sonuc.length;i++){
//   let li=document.createElement("li")
//   li.textContent=sonuc[i];
//   ul.appendChild(li);
// }
let prginfo=document.createElement("p")
prginfo.textContent=`Girdiğiniz metinde ${sonuc.length} sesli harf vardır. Bunlar (${sonuc}) `
info.appendChild(prginfo)
prginfo.classList.add("baslık")
let buton=document.createElement("button")
buton.textContent=`delete`
info.appendChild(buton)
buton.classList.add(`buton`)
console.log();
console.log(prginfo);
});
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   document.getElementById("myButton").addEventListener("click", function() {
//   document.getElementById("message").textContent = "Butona tıklandı!";
// });
// // Enter tuşuna basıldığında da aynı işlemi yapalım
// document.getElementById("myButton").addEventListener("keydown", function(event) {
//     if (event.key === 'Enter') {
//         document.getElementById("message").textContent = "Enter tuşuna basıldı!";
//     }
// });
//!!!!!!!!!!!!!!!!!!!!!!!!