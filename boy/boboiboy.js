"use strict";
// nama: nahdia hasanah
// nim: 2303110110
(function() {

  window.addEventListener("load", init);

  function init() {
    let btnAdd = document.getElementById("add");
    btnAdd.addEventListener("click", tambahGambar);
    let btnReplaceFirst = document.getElementById("replace-first");
    btnReplaceFirst.addEventListener("click", gantiGambar);
    let btnRemoveLast = document.getElementById("remove-last");
    btnRemoveLast.addEventListener("click", hapusTerakhir);
    let btnRemoveAll = document.getElementById("remove-all");
    btnRemoveAll.addEventListener("click", hapusSemua);
  }

  function tambahGambar() {
      let gambarBaru = document.createElement("img");
      gambarBaru.src = "fig/boboiboy.png";
      let parent= document.getElementById("icons");
      parent.appendChild(gambarBaru);
 }

 function gantiGambar(){
  document.getElementById("icons").firstElementChild.src ="fig/adudu.png";
 }

 function hapusTerakhir (){
  let gambarTerakhir = document.getElementById("icons").lastElementChild;
  document.getElementById("icons").removeChild(gambarTerakhir);
 } 


 function hapusSemua(){
  let deleteAll = document.getElementById("icons");
  deleteAll.innerHTML = "";
 }
})();