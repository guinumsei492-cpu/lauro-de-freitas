// Base de dados dos pontos turísticos
const locais = [
    {
        nome: "Buraco da Velha",
        descricao: "Uma piscina natural protegida por recifes em Vilas do Atlântico. Na maré baixa, a água é calma e cristalina, ideal para famílias e para relaxar.",
        categoria: "Praias & Natureza",
        // Imagem real do Buraco da Velha
        imagem: "https://imgur.com/u3lYF6Z.png"
    },
    {
        nome: "Parque Shopping Bahia",
        descricao: "O maior centro de compras e lazer da região, com arquitetura moderna, dezenas de restaurantes, cinemas de última geração e alameda de serviços.",
        categoria: "Compras & Lazer",
        // Imagem real do Parque Shopping
        imagem: "https://imgur.com/k6lP09V.png"
    },
    {
        nome: "Praia de Vilas do Atlântico",
        descricao: "Conhecida por seu extenso calçadão, barracas de praia estruturadas e coqueirais. É um dos pontos mais badalados e procurados da cidade.",
        categoria: "Praias & Badalação",
        // Imagem real de Vilas
        imagem: "https://imgur.com/vH9R67N.png"
    },
    {
        nome: "Shopping Estrada do Coco",
        descricao: "Um shopping tradicional e aconchegante, focado em conveniência, com boa variedade de lojas e praça de alimentação no coração de Lauro.",
        categoria: "Compras & Serviços",
        // Imagem real do Shopping Estrada do Coco
        imagem: "https://imgur.com/5O5yW4T.png"
    }
];

// Motor do Sistema: Preenche os cards dinamicamente
function carregarCards() {
    const container = document.getElementById('pontos-turisticos');
    let htmlContent = '';

    locais.forEach(local => {
        htmlContent += `
            <article class="card">
                <img src="${local.imagem}" alt="${local.nome}" class="card-img">
                <div class="card-info">
                    <h3>${local.nome}</h3>
                    <p>${local.descricao}</p>
                    <span class="tag">${local.categoria}</span>
                </div>
            </article>
        `;
    });

    container.innerHTML = htmlContent;
}

// Inicia o sistema quando a página carrega
window.onload = carregarCards;
