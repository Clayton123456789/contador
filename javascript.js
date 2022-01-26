function calcular () {
    let inicio = document.querySelector('#n1')
    let fim = document.querySelector('#n2')
    let passo = document.querySelector('#n3')
    let res = document.querySelector('#res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Falta De dados')
    } else {
        res.innerHTML = 'Contando...  ' 
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
       
        if(i <= f){
            for(var x = i ; x <= f ; x+= p) {
                res.innerHTML += `${x} \u{1f449} `
            }
    
        } else {
            for(var x = i ; x > f ; x= x-p)
            res.innerHTML += `${x} \u{1f449} `
        }
        res.innerHTML += ` \u{1f3c1}`

       
    }
}