// Arquivo principal de JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todas as linhas das mães
    const linhasMae = document.querySelectorAll('.maes .linha');
    
    // Função para contar asteriscos
    function contarAsteriscos(texto) {
        return texto.split('*').length - 1;
    }

    // Função para atualizar sobrinhas
    function atualizarSobrinhas() {
        // Sobrinha 1 (Mãe 1 e Mãe 2)
        for(let linha = 1; linha <= 4; linha++) {
            const mae1Valor = document.querySelector(`#mae-1 .linha[data-linha="${linha}"]`).textContent;
            const mae2Valor = document.querySelector(`#mae-2 .linha[data-linha="${linha}"]`).textContent;
            const totalAsteriscos = contarAsteriscos(mae1Valor) + contarAsteriscos(mae2Valor);
            const sobrinha1Linha = document.querySelector(`#sobrinha-1 .linha:nth-child(${linha})`);
            sobrinha1Linha.textContent = totalAsteriscos % 2 === 0 ? '**' : '*';
        }

        // Sobrinha 2 (Mãe 3 e Mãe 4)
        for(let linha = 1; linha <= 4; linha++) {
            const mae3Valor = document.querySelector(`#mae-3 .linha[data-linha="${linha}"]`).textContent;
            const mae4Valor = document.querySelector(`#mae-4 .linha[data-linha="${linha}"]`).textContent;
            const totalAsteriscos = contarAsteriscos(mae3Valor) + contarAsteriscos(mae4Valor);
            const sobrinha2Linha = document.querySelector(`#sobrinha-2 .linha:nth-child(${linha})`);
            sobrinha2Linha.textContent = totalAsteriscos % 2 === 0 ? '**' : '*';
        }

        // Sobrinha 3 (Filha 1 e Filha 2)
        for(let linha = 1; linha <= 4; linha++) {
            const filha1Valor = document.querySelector(`#filha-1 .linha[data-linha="${linha}"]`).textContent;
            const filha2Valor = document.querySelector(`#filha-2 .linha[data-linha="${linha}"]`).textContent;
            const totalAsteriscos = contarAsteriscos(filha1Valor) + contarAsteriscos(filha2Valor);
            const sobrinha3Linha = document.querySelector(`#sobrinha-3 .linha:nth-child(${linha})`);
            sobrinha3Linha.textContent = totalAsteriscos % 2 === 0 ? '**' : '*';
        }

        // Sobrinha 4 (Filha 3 e Filha 4)
        for(let linha = 1; linha <= 4; linha++) {
            const filha3Valor = document.querySelector(`#filha-3 .linha[data-linha="${linha}"]`).textContent;
            const filha4Valor = document.querySelector(`#filha-4 .linha[data-linha="${linha}"]`).textContent;
            const totalAsteriscos = contarAsteriscos(filha3Valor) + contarAsteriscos(filha4Valor);
            const sobrinha4Linha = document.querySelector(`#sobrinha-4 .linha:nth-child(${linha})`);
            sobrinha4Linha.textContent = totalAsteriscos % 2 === 0 ? '**' : '*';
        }
    }

    // Adiciona o evento de clique para cada linha das mães
    linhasMae.forEach(linha => {
        linha.addEventListener('click', function() {
            // Obtém o número da mãe (1-4)
            const maeNumero = this.parentElement.id.split('-')[1];
            // Obtém o número da linha (1-4)
            const linhaNumero = this.dataset.linha;
            
            // Alterna entre * e **
            if (this.textContent === '**') {
                this.textContent = '*';
            } else {
                this.textContent = '**';
            }
            
            // Atualiza a linha correspondente na filha
            const filhaCorrespondente = document.querySelector(`#filha-${linhaNumero} .linha[data-linha="${maeNumero}"]`);
            filhaCorrespondente.textContent = this.textContent;

            // Atualiza todas as sobrinhas após cada mudança
            atualizarSobrinhas();
        });
    });

    // Atualiza as sobrinhas inicialmente
    atualizarSobrinhas();
}); 