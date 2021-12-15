function contar() {
    let txt1 = document.getElementById('txt1').value;
    let txt2 = document.getElementById('txt2').value;
    let txt3 = document.getElementById('txt3').value;
    let ini = Number(txt1);
    let fim = Number(txt2);
    let passo = Number(txt3);

    
    let res = document.getElementById('res')
    res.innerHTML = ''

    for (let i = txt1; i < txt2; i += txt3) {
        res.innerHTML += i + ' '
    }
}