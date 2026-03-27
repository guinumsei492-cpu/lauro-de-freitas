const locais = [
    {
        nome: "Buraco da Velha",
        descricao: "Piscina natural em Vilas do Atlântico, perfeita para relaxar na maré baixa.",
        categoria: "Praia"
    },
    {
        nome: "Parque Shopping Bahia",
        descricao: "Um dos maiores centros de lazer e compras da região metropolitana.",
        categoria: "Shopping"
    },
    {
        nome: "Estrada do Coco",
        descricao: "A principal via que conecta belezas naturais e o polo comercial.",
        categoria: "Lazer"
    },
    {
        nome: "Vilas do Atlântico",
        descricao: "Bairro nobre com belas praias, calçadão e ótimos restaurantes.",
        categoria: "Bairro / Praia"
    }
];

const container = document.getElementById('pontos-turisticos');

locais.forEach(local => {
    const card = `
        <div class="card">
            <div class="card-img">${local.nome}</div>
            <div class="card-info">
                <h3>${local.nome}</h3>
                <p>${local.descricao}</p>
                <span style="font-size: 0.8rem; color: #64748b;"># ${local.categoria}</span>
            </div>
        </div>
    `;
    container.innerHTML += card;
});
