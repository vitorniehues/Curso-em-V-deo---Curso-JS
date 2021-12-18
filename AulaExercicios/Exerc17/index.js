function geraTabuada() {
    const num = Number(document.getElementById('txt1').value)
    const slc = document.getElementById('slc')
    if (num == 0) document.getElementById('txt1').value = 0

    slc.replaceChildren();
    for (let i = 1; i <= 10 ; i++) {
        let opt = document.createElement('option')
        opt.innerHTML = `${num} X ${i} = ${i*num}`
        slc.appendChild(opt);
 }
}