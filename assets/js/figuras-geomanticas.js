const FIGURAS_GEOMANTICAS = {
    CAPUT_DRACONIS: {
        nome: "CAPUT DRACONIS",
        linhas: ["**", "*", "*", "*"]
    },
    FORTUNA_MAJOR: {
        nome: "FORTUNA MAJOR",
        linhas: ["**", "**", "*", "*"]
    },
    TRISTITIA: {
        nome: "TRISTITIA",
        linhas: ["**", "**", "**", "*"]
    },
    POPULUS: {
        nome: "POPULUS",
        linhas: ["**", "**", "**", "**"]
    },
    CAUDA_DRACONIS: {
        nome: "CAUDA DRACONIS",
        linhas: ["*", "*", "*", "**"]
    },
    FORTUNA_MINOR: {
        nome: "FORTUNA MINOR",
        linhas: ["*", "*", "**", "**"]
    },
    LAETITIA: {
        nome: "LAETITIA",
        linhas: ["*", "**", "**", "**"]
    },
    VIA: {
        nome: "VIA",
        linhas: ["*", "*", "*", "*"]
    },
    ALBUS: {
        nome: "ALBUS",
        linhas: ["**", "**", "*", "**"]
    },
    ACQUISITIO: {
        nome: "ACQUISITIO",
        linhas: ["**", "*", "**", "*"]
    },
    PUELLA: {
        nome: "PUELLA",
        linhas: ["*", "**", "*", "*"]
    },
    CARCER: {
        nome: "CARCER",
        linhas: ["*", "**", "**", "*"]
    },
    RUBEUS: {
        nome: "RUBEUS",
        linhas: ["**", "*", "**", "**"]
    },
    AMISSIO: {
        nome: "AMISSIO",
        linhas: ["*", "**", "*", "**"]
    },
    PUER: {
        nome: "PUER",
        linhas: ["*", "*", "**", "*"]
    },
    CONJUNCTIO: {
        nome: "CONJUNCTIO",
        linhas: ["**", "*", "*", "**"]
    }
};

// Função auxiliar para identificar uma figura baseada em suas linhas
function identificarFigura(linhas) {
    // Primeiro, vamos garantir que temos um array de linhas válido
    if (!Array.isArray(linhas) || linhas.length !== 4) {
        return null;
    }

    // Procura a figura que corresponde exatamente às linhas fornecidas
    const figuraEncontrada = Object.values(FIGURAS_GEOMANTICAS).find(figura => 
        figura.linhas.every((linha, index) => linha === linhas[index].trim())
    );

    return figuraEncontrada ? figuraEncontrada.nome : null;
}

// Função para verificar se um conjunto de linhas forma uma figura válida
function ehFiguraValida(linhas) {
    return Object.values(FIGURAS_GEOMANTICAS).some(figura => 
        figura.linhas.every((linha, index) => linha === linhas[index])
    );
}

export { FIGURAS_GEOMANTICAS, identificarFigura, ehFiguraValida }; 