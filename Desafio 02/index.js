
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function saldoVitoria (vitoria, derrota){
    let saldo = vitoria - derrota
    return saldo
}

//Solicita ao usuario o número de Vitórias e Derrotas
rl.question('Número de Vitórias: ', (vitoria) => {
    rl.question('Número de Derrotas: ', (derrota) => {
                        
        let vitoriasPositivas = saldoVitoria(parseInt(vitoria), parseInt(derrota));
        let nivel;

        if ( vitoriasPositivas < 10) {
            nivel = 'Ferro';
        } else if (vitoriasPositivas >= 11 && vitoriasPositivas <= 20) {
            nivel = 'Bronze';
        } else if (vitoriasPositivas >= 21 && vitoriasPositivas <= 50) {
            nivel = 'Prata';
        } else if (vitoriasPositivas >= 51 && vitoriasPositivas <= 80) {
            nivel = 'Ouro';
        } else if (vitoriasPositivas >= 81 && vitoriasPositivas <= 90) {
            nivel = 'Diamante';
        } else if (vitoriasPositivas >= 91 && vitoriasPositivas <= 100) {
            nivel = 'Lendário';
        } else {
            nivel = 'Imortal';
        }

        // Exibe a mensagem com o saldo de positivo de vitórias e o nivel
        console.log(`O Herói tem de saldo de ${vitoriasPositivas} está no nível de ${nivel}`);

       rl.close();
    })
});