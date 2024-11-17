const button = document.getElementById("ganti-btn");
button.addEventListener("click", changeImage);
let dahKlikTombol = false;

function changeImage(){  
    
    if (dahKlikTombol) {
       
       image.src = "https://akcdn.detik.net.id/visual/2024/09/02/jung-hae-in-2_43.jpeg?w=720&q=90"; /*ubah gambar*/
       dahKlikTombol = false;
    } else {
        image = document.getElementById("jungHaein")
            image.src= "https://media.tenor.com/8T91D6nIuQAAAAAM/bagogo-mantap.gif";
            dahKlikTombol = true;
    }
   
}



