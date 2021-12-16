function contar() {
    let ini   = Number(document.getElementById('txt1').value);
    let fim   = Number(document.getElementById('txt2').value);
    let passo = Number(document.getElementById('txt3').value);
    let res = document.getElementById('res')
    let err = '';
    
    res.innerHTML = ''

    if (ini == 0) document.getElementById('txt1').value = 0 
    if (fim == 0) document.getElementById('txt2').value = 0 
    if (ini > fim)          err += 'Erro! Inicio maior que fim.<br>'
    if (passo == 0)         err += 'Erro! Passo em branco.<br>'
    if (fim - ini < passo)  err += 'Erro! Passo maior que o intervalo.<br>'
    
    if (err !== '') return res.innerHTML = err

    for (let i = ini; i < fim; i += passo) {
        res.innerHTML += i;
        if ( i + 1 < fim)  res.innerHTML += ', '
    }
    res.innerHTML += '!'
}