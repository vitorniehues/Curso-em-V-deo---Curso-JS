function carregar() {
    let ps = document.getElementById('msg').getElementsByTagName('p');
    let img = document.getElementById('img');
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    
    ps[1].innerHTML = `agora são ${hora}h${min}min.`
    
    if (hora >= 0 && hora < 12){
        ps[0].innerHTML = 'Bom dia,'
        img.src = 'images/manha.jpg'
        document.body.style.background = '#ffbd6d';
    }
    else if (hora >= 12 && hora <= 18){
        ps[0].innerHTML = 'Boa tarde,'
        img.src = 'images/tarde.jpg'
        document.body.style.background = '#6ea4bf';
    }
    else{
        ps[0].innerHTML = 'Boa noite,'
        img.src = 'images/noite.jpg'
        document.body.style.background = '#966cac';
    }
}