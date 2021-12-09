function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fAno = document.getElementById('txtAno');
    let res = document.querySelector('div#res');

    if (fAno.value.length == 0 || fAno.value > ano || fAno.value < 1900){
        alert('[Erro] Verifique os dados e tente novamente!');
    }
    else{
        let fSex = document.getElementsByName('radSex');
        let idade = ano - Number(fAno.value);
        let genero = '';

        if (fSex[0].checked) {
            genero = 'Homen';
        } else {
            genero = 'Mulher';
        }

        res.innerHTML = `Selecionado: ${genero} de ${idade} anos.`
    }

}