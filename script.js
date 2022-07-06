function calculateSalary (salario, vendas) {
    let newSalary = salario
    if(vendas > 1200) {
        let newSalesUm = 1200 * 0.03
        let newSales = (vendas - 1200)
        newSalary += (newSales * 0.05) + newSalesUm

    } else if (vendas <= 1200) {
        let newSalesDois = (vendas * 0.03)
        newSalary += newSalesDois
    }
    
    return newSalary
}

console.log(calculateSalary(1000, 1300))
console.log('--------------------------xxx--------------------------')

function cashMachine (salario, saque, vendas) {

    let valorConta = calculateSalary(salario, vendas)
    let contador200 = 0
    let contador100 = 0
    let contador50 = 0
    let contador20 = 0
    let contador10 = 0
    let contador5 = 0
    let contador2 = 0
    let newSaldo = salario - saque
    
    let bankStatement = 'Notas sacadas: '
    while(saque > 2) {
        if(saque >= 200) {
            contador200 = Math.floor(saque/200)
            saque -= contador200 * 200
        } else if (saque >= 100) {
            contador100 = Math.floor(saque/100)
            saque -= contador100 * 100
        } else if (saque >= 50) {
            contador50 = Math.floor(saque/50)
            saque -= contador50 * 50
        } else if (saque >= 20) {
            contador20 = Math.floor(saque/20)
            saque -= contador20 * 20
        } else if (saque >= 10) {
            contador10 = Math.floor(saque/10)
            saque -= contador10 * 10
        } else if (saque >= 5) {
            contador5 = Math.floor(saque/5)
            saque -= contador5 * 5
        } else if (saque >= 2) {
            contador2 = Math.floor(saque/2)
            saque -= contador2 * 2
        }
    }

    if(contador200 > 1) {
        bankStatement += `${contador200} notas de R$200, `
    } else if (contador200 == 1){
        bankStatement += `${contador200} nota de R$200, `
    }

    if(contador100 > 1) {
        bankStatement += `${contador100} notas de R$100, `
    } else if (contador100 == 1) {
        bankStatement += `${contador100} nota de R$100, `
    }

    if(contador50 > 1) {
        bankStatement += `${contador50} notas de R$50, `
    } else if (contador50 == 1) {
        bankStatement += `${contador50} nota de R$50, `
    }

    if(contador20 > 1) {  
        bankStatement += `${contador20} notas de R$20, `
    } else if (contador20 == 1) {
        bankStatement += `${contador20} nota de R$20, `
    }

    if (contador10 > 1) {
        bankStatement += `${contador10} notas de R$10, `
    } else if (contador10 == 1) {
        bankStatement += `${contador10} nota de R$10, `
    }

    if (contador5 > 1) {
        bankStatement += `${contador5} notas de R$5, `
    } else if (contador5 == 1) {
        bankStatement += `${contador5} nota de R$5, `
    }

    if (contador2 > 1) {
        bankStatement += `${contador2} notas de R$2 `
    } else if (contador2 == 1) {
        bankStatement += `${contador2} nota de R$2, `
    }
    
    
    return bankStatement + ` Saldo Atual: R$${newSaldo}.`
   
}


console.log(cashMachine (1000, 480, 1300))
console.log('--------------------------xxx--------------------------')

function calculateStock (atual, maxima, minima) {
    let media = (maxima + minima)/2

    if(atual >= media) {
        return 'Não efetuar compra!'
    } else {
        return 'Efetuar compra!'
    }

}

console.log(calculateStock(100, 500, 5))
console.log('--------------------------xxx--------------------------')


function calculateAge(nascimento, atual) {
    let idadeAnos = atual - nascimento
    let idadeMeses = idadeAnos * 12
    let idadeDias = idadeAnos * 365
    let idadeSemanas = idadeMeses * 4

    return `A idade da pessoa em, anos: ${idadeAnos}, meses: ${idadeMeses}, dias: ${idadeDias}, semanas: ${idadeSemanas}!`
}

console.log(calculateAge(1997, 2022))
console.log('--------------------------xxx--------------------------')


function getDiagonal (matriz) {
    let newArr = []
    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[i].length; j++) {

            if(i == j) {
                newArr.push(matriz[i][j])

            }
        }
    }

    return newArr

}
let arr = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
    ]


console.log(getDiagonal(arr))