function carregar() {
    let mensagem = document.getElementById("container-msg");
    let imagem = document.getElementById("img");

    let data = new Date();
    // let hora = data.getHours();
    let hora = 15;
    mensagem.innerHTML = `Agora são ${hora} horas`;

    if (hora >= 0 && hora < 12) {
        imagem.src = "./assets/manha.jpg";
        document.body.style.background = "#CC6800";
    } else if (hora >= 12 && hora <= 18) {
        imagem.src = "./assets/tarde.jpg";
        document.body.style.background = "#6F2815";
    } else {
        imagem.src = "./assets/noite.jpg";
        document.body.style.background = "#003262";
    }
}
