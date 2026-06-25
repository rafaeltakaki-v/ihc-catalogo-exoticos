// Base de dados dos veículos — usada por details.html e proposal.html.
// A página lê o parâmetro ?car=<id> da URL e preenche os campos.
window.CARS = {
    porsche: {
        img: "assets/card-porsche.png",
        name: "911 GT3 RS",
        full: "Porsche 911 GT3 RS",
        subtitle: "Shark Blue • 2024",
        velocidade: "296", potencia: "525", zero100: "3.2",
        motor: "BOXER 4.0 ASP.", transmissao: "PDK 7 MARCHAS", tracao: "TRASEIRA", ano: "2024",
        preco: "R$ 2.450.000",
        desc: "Uma máquina de precisão projetada para quem exige o ápice do desempenho automotivo. O 911 GT3 RS leva a engenharia de pista para a rua: motor boxer aspirado de altíssima rotação, aerodinâmica ativa e resposta imediata. Uma experiência de condução visceral e sem concessões."
    },
    ferrari: {
        img: "assets/card-ferrari.png",
        name: "SF90 Stradale",
        full: "Ferrari SF90 Stradale",
        subtitle: "Rosso Corsa • 2023",
        velocidade: "340", potencia: "1000", zero100: "2.5",
        motor: "V8 4.0 BITURBO HÍBRIDO", transmissao: "DCT 8 MARCHAS", tracao: "INTEGRAL", ano: "2023",
        preco: "R$ 4.890.000",
        desc: "A primeira Ferrari de série híbrida plug-in. Três motores elétricos somados ao V8 biturbo entregam 1000 cv e tração integral. Aceleração brutal, controle absoluto e tecnologia de Fórmula 1 transposta para as ruas."
    },
    lamborghini: {
        img: "assets/card-lamborghini.png",
        name: "Aventador SVJ",
        full: "Lamborghini Aventador SVJ",
        subtitle: "Nero Nemesis • 2022",
        velocidade: "350", potencia: "770", zero100: "2.8",
        motor: "V12 6.5 ASP.", transmissao: "ISR 7 MARCHAS", tracao: "INTEGRAL", ano: "2022",
        preco: "Sob consulta",
        desc: "O ápice do V12 aspirado da Lamborghini. Com aerodinâmica ativa ALA e 770 cv de pura emoção, o Aventador SVJ é um dos hipercarros mais radicais já produzidos. Som inconfundível e presença imbatível."
    },
    bmw: {
        img: "assets/card-bmw.png",
        name: "M4 Competition",
        full: "BMW M4 Competition",
        subtitle: "Isle of Man Green • 2024",
        velocidade: "290", potencia: "510", zero100: "3.5",
        motor: "6 EM LINHA BITURBO", transmissao: "M STEPTRONIC 8", tracao: "TRASEIRA", ano: "2024",
        preco: "R$ 950.000",
        desc: "O esportivo alemão que une uso diário e pista. O seis-cilindros biturbo de 510 cv, o acerto de chassi M e o icônico verde Isle of Man fazem do M4 Competition um clássico instantâneo."
    }
};
