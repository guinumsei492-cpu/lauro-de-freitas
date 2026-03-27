const lugares = [
    {
        nome: "Buraco da Velha",
        info: "A famosa piscina natural de Vilas do Atlântico. Ideal para relaxar com a família na maré baixa com águas mornas.",
        foto: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/59/3a/f7/barraca-buraco-da-velha.jpg?w=800"
    },
    {
        nome: "Parque Shopping Bahia",
        info: "O maior centro de compras e lazer da região, com arquitetura moderna, cinema e diversas opções gastronômicas.",
        foto: "https://www.bahiasocialvip.com.br/wp-content/uploads/2020/03/Parque-Shopping-Bahia-Fachada-Noturna-1024x683.jpg"
    },
    {
        nome: "Praia de Vilas do Atlântico",
        info: "Uma das praias mais bonitas da Bahia, com coqueirais extensos, calçadão para caminhada e excelentes barracas.",
        foto: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/51/97/81/caption.jpg?w=800"
    }
];

function renderizarLugares() {
    const grid = document.getElementById('lista-lugares');
    
    if (grid) {
        grid.innerHTML = ""; 
        lugares.forEach(l => {
            grid.innerHTML += `
                <div class="card">
                    <img src="${l.foto}" alt="${l.nome}" onerror="this.src='https://via.placeholder.com/600x400?text=Imagem+Lauro+City'">
                    <div class="card-content">
                        <h3>${l.nome}</h3>
                        <p>${l.info}</p>
                    </div>
                </div>
            `;
        });
    }
}

document.addEventListener('DOMContentLoaded', renderizarLugares);
