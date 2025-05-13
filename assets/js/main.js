// Arquivo principal de JavaScript
import { identificarFigura } from './figuras-geomanticas.js';

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todas as linhas das mães
    const linhasMae = document.querySelectorAll('.maes .linha');
    
    // Função para contar asteriscos
    function contarAsteriscos(texto) {
        return texto.split('*').length - 1;
    }

    // Função para atualizar sentença
    function atualizarSentenca() {
        for(let linha = 1; linha <= 4; linha++) {
            const tribunal1Valor = document.querySelector(`#tribunal-1 .linha:nth-child(${linha})`).textContent;
            const tribunal2Valor = document.querySelector(`#tribunal-2 .linha:nth-child(${linha})`).textContent;
            const totalAsteriscos = contarAsteriscos(tribunal1Valor) + contarAsteriscos(tribunal2Valor);
            const sentencaLinha = document.querySelector(`#sentenca-1 .linha:nth-child(${linha})`);
            sentencaLinha.textContent = totalAsteriscos % 2 === 0 ? '**' : '*';
        }
    }

    // Função para atualizar juiz
    function atualizarJuiz() {
        for(let linha = 1; linha <= 4; linha++) {
            const tribunal1Valor = document.querySelector(`#tribunal-1 .linha:nth-child(${linha})`).textContent;
            const tribunal2Valor = document.querySelector(`#tribunal-2 .linha:nth-child(${linha})`).textContent;
            const totalAsteriscos = contarAsteriscos(tribunal1Valor) + contarAsteriscos(tribunal2Valor);
            const juizLinha = document.querySelector(`#juiz-1 .linha:nth-child(${linha})`);
            juizLinha.textContent = totalAsteriscos % 2 === 0 ? '**' : '*';
        }
    }

    // Função para atualizar tribunal
    function atualizarTribunal() {
        // Tribunal 1 (Sobrinhas 1 e 2)
        for(let linha = 1; linha <= 4; linha++) {
            const sobrinha1Valor = document.querySelector(`#sobrinha-1 .linha:nth-child(${linha})`).textContent;
            const sobrinha2Valor = document.querySelector(`#sobrinha-2 .linha:nth-child(${linha})`).textContent;
            const totalAsteriscos = contarAsteriscos(sobrinha1Valor) + contarAsteriscos(sobrinha2Valor);
            const tribunal1Linha = document.querySelector(`#tribunal-1 .linha:nth-child(${linha})`);
            tribunal1Linha.textContent = totalAsteriscos % 2 === 0 ? '**' : '*';
        }

        // Tribunal 2 (Sobrinhas 3 e 4)
        for(let linha = 1; linha <= 4; linha++) {
            const sobrinha3Valor = document.querySelector(`#sobrinha-3 .linha:nth-child(${linha})`).textContent;
            const sobrinha4Valor = document.querySelector(`#sobrinha-4 .linha:nth-child(${linha})`).textContent;
            const totalAsteriscos = contarAsteriscos(sobrinha3Valor) + contarAsteriscos(sobrinha4Valor);
            const tribunal2Linha = document.querySelector(`#tribunal-2 .linha:nth-child(${linha})`);
            tribunal2Linha.textContent = totalAsteriscos % 2 === 0 ? '**' : '*';
        }

        // Atualiza o juiz após atualizar o tribunal
        atualizarJuiz();
    }

    // Função para obter as linhas de uma figura
    function obterLinhasFigura(id) {
        const linhas = [];
        document.querySelectorAll(`#${id} .linha`).forEach(linha => {
            linhas.push(linha.textContent);
        });
        return linhas;
    }

    // Função para atualizar a tabela
    function atualizarTabela() {
        // Casas 1-6 (Mães 1-4 e Filhas 1-2)
        const figuras1 = [
            { id: 'mae-1', casa: 1 },
            { id: 'mae-2', casa: 2 },
            { id: 'mae-3', casa: 3 },
            { id: 'mae-4', casa: 4 },
            { id: 'filha-1', casa: 5 },
            { id: 'filha-2', casa: 6 }
        ];

        // Casas 7-12 (Filhas 3-4 e Sobrinhas 1-4)
        const figuras2 = [
            { id: 'filha-3', casa: 7 },
            { id: 'filha-4', casa: 8 },
            { id: 'sobrinha-1', casa: 9 },
            { id: 'sobrinha-2', casa: 10 },
            { id: 'sobrinha-3', casa: 11 },
            { id: 'sobrinha-4', casa: 12 }
        ];

        // Atualizar casas 1-6
        figuras1.forEach(({ id, casa }) => {
            const linhas = obterLinhasFigura(id);
            const nomeFigura = identificarFigura(linhas);
            const linha = document.querySelector(`tr:nth-child(${casa + 1})`); // +1 porque o primeiro tr é o cabeçalho
            if (linha && nomeFigura) {
                linha.children[1].textContent = nomeFigura;
            }
        });

        // Atualizar casas 7-12
        figuras2.forEach(({ id, casa }) => {
            const linhas = obterLinhasFigura(id);
            const nomeFigura = identificarFigura(linhas);
            const linha = document.querySelector(`tr:nth-child(${casa - 6})`); // -6 para alinhar com as linhas da tabela
            if (linha && nomeFigura) {
                linha.children[3].textContent = nomeFigura;
            }
        });
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

        // Atualiza o tribunal após atualizar as sobrinhas
        atualizarTribunal();

        // Atualizar a tabela após atualizar as sobrinhas
        atualizarTabela();
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

            // Atualiza todas as sobrinhas e o tribunal após cada mudança
            atualizarSobrinhas();
        });
    });

    // Atualiza as sobrinhas e o tribunal inicialmente
    atualizarSobrinhas();
}); 