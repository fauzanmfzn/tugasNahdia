
"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * Pasang event listener
   */
  function init() {
    let plants = document.querySelectorAll("#plant-container img");
    for(let i = 0; i < plants.length; i++) {
        plants[i].addEventListener("click", siram);
    }
  }

  /**
   * Siram tanaman
   */
  function siram(event) {
      //Selesaikan implementasi method ini
      //Anda harus gambar tanaman layu menjadi tanaman segar ketika disiram
      //Anda juga harus menghitung berapa tanaman layu yang sudah disiram
        let jumlah = document.getElementById("jumlah");
     
      if(!event.currentTarget.classList.contains("siram")){
        event.currentTarget.src = "fig/tanaman_segar.png";
        event.currentTarget.classList.add("siram");
        let count = parseInt(jumlah.textContent);
        jumlah.textContent = count + 1;

        let jumlahBunga = document.querySelectorAll("#plant-container img").length;
        if (jumlah.textContent == jumlahBunga) {
          jumlah.textContent = "semua";         
        }     
        
      }
    }
  })();

