// Dados reais e links de imagem que funcionam (Wikipedia/Imgur)
const pontosReais = [
    {
        nome: "Buraco da Velha (Vilas)",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Praia_de_Ipitanga_-_Lauro_de_Freitas.jpg/800px-Praia_de_Ipitanga_-_Lauro_de_Freitas.jpg",
        desc: "Piscina natural famosa em Vilas do Atlântico, perfeita na maré baixa."
    },
    {
        nome: "Parque Shopping Bahia",
        img: "https://i.imgur.com/vHpxl4Z.jpeg",
        desc: "O maior centro de compras e lazer da região, na Estrada do Coco."
    },
    {
        nome: "Praia de Ipitanga",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Praia_de_Ipitanga.jpg/800px-Praia_de_Ipitanga.jpg",
        desc: "Conhecida pelas ondas fortes, ideal para o surf e lazer na orla."
    }
];

function carregarConteudo() {
    const grid = document.getElementById('grade-principal');
    
    // Verifica se o elemento existe antes de tentar usar
    if (grid) {
        grid.innerHTML = ""; // Limpa qualquer conteúdo prévio
        
        // Mapeia os dados reais para o HTML do card
        const cardsHTML = pontosReais.map(ponto => `
            <div class="card-item">
                <div class="card-img" style="background-image: url('${ponto.img}')">
                    </div>
                <div class="card-info">
                    <h3>${ponto.nome}</h3>
                    <p>${ponto.desc}</p>
                </div>
            </div>
        `).join(''); // Une todos os cards em uma única string
        
        // Injeta o HTML gerado na grade
        grid.innerHTML = cardsHTML;
    } else {
        console.error("Erro: Não foi possível encontrar o elemento #grade-principal");
    }
}

// Executa a função assim que a janela (window) carregar completamente
window.onload = carregarConteudo;
