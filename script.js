const lugares = [
    {
        nome: "Buraco da Velha",
        info: "A famosa piscina natural de Vilas do Atlântico. Águas rasas e cristalinas perfeitas para relaxar na maré baixa.",
        // Foto Real do Buraco da Velha (Fonte: Correio 24h)
        foto: "https://correio-cdn1.b-cdn.net/wp-content/uploads/2023/11/01153401/Buraco-da-Velha.jpg"
    },
    {
        nome: "Parque Shopping Bahia",
        info: "O maior centro de compras e lazer da região, com arquitetura moderna e diversas opções de gastronomia.",
        // Foto Real da Fachada do Parque Shopping (Fonte: Bahia de Valor)
        foto: "https://www.bahiadevalor.com.br/wp-content/uploads/2020/03/parque-shopping-bahia-2.jpg"
    },
    {
        nome: "Praia de Vilas do Atlântico",
        info: "Uma das praias mais bonitas da Bahia, famosa pelos seus coqueirais e excelente estrutura de barracas.",
        // Foto Real de Vilas (Fonte: Pref. de Lauro de Freitas)
        foto: "https://www.laurodefreitas.ba.gov.br/2021/assets/uploads/noticias/29729a43a6d71f7601f09514f9d140e7.jpg"
    }
];

function renderizarLugares() {
    const grid = document.getElementById('lista-lugares');
    
    if (grid) {
        grid.innerHTML = ""; 
        lugares.forEach(l => {
            grid.innerHTML += `
                <div class="card" style="background:white; border-radius:15px; overflow:hidden; box-shadow:0 10px 20px rgba(0,0,0,0.1); margin-bottom:20px;">
                    <img src="${l.foto}" alt="${l.nome}" style="width:100%; height:250px; object-fit:cover; display:block;" onerror="this.src='https://via.placeholder.com/600x400?text=Carregando+Imagem...'">
                    <div class="card-content" style="padding:20px; text-align:left;">
                        <h3 style="color:#004aad; margin-bottom:10px; font-family:sans-serif;">${l.nome}</h3>
                        <p style="color:#555; font-size:14px; font-family:sans-serif;">${l.info}</p>
                    </div>
                </div>
            `;
        });
    }
}

document.addEventListener('DOMContentLoaded', renderizarLugares);
