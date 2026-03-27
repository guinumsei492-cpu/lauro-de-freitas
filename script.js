const lugares = [
    {
        nome: "Buraco da Velha",
        info: "A piscina natural mais famosa de Vilas. Águas mornas e tranquilas na maré baixa.",
        foto: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    },
    {
        nome: "Parque Shopping Bahia",
        info: "Um dos maiores centros de compras da Bahia, com lazer completo e gastronomia.",
        foto: "https://images.unsplash.com/photo-1567449303078-57ad995bd17a?auto=format&fit=crop&w=600&q=80"
    },
    {
        nome: "Praia de Vilas",
        info: "Calçadão impecável, coqueirais e as melhores barracas de praia da região.",
        foto: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80"
    },
    {
        nome: "Shopping Estrada do Coco",
        info: "O shopping pioneiro de Lauro, unindo tradição e praticidade no dia a dia.",
        foto: "https://images.unsplash.com/photo-1542211440-2729938b8989?auto=format&fit=crop&w=600&q=80"
    }
];

const grid = document.getElementById('lista-lugares');

lugares.forEach(l => {
    grid.innerHTML += `
        <div class="card">
            <img src="${l.foto}" alt="${l.nome}">
            <div class="card-content">
                <h3>${l.nome}</h3>
                <p>${l.info}</p>
            </div>
        </div>
    `;
});
