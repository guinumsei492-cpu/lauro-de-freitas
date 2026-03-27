const fotosReais = [
    {
        titulo: "Buraco da Velha (Vilas)",
        texto: "A piscina natural mais famosa da região de Vilas do Atlântico.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Praia_de_Ipitanga_-_Lauro_de_Freitas.jpg/800px-Praia_de_Ipitanga_-_Lauro_de_Freitas.jpg"
    },
    {
        titulo: "Parque Shopping Bahia",
        texto: "O principal centro de compras e lazer da nossa cidade.",
        imagem: "https://i.imgur.com/vHpxl4Z.jpeg"
    },
    {
        titulo: "Praia de Vilas",
        texto: "Orla paradisíaca com coqueirais e águas quentes.",
        imagem: "https://i.imgur.com/yK6XU4Q.jpeg"
    }
];

function carregarSite() {
    const container = document.getElementById('lista-final');
    
    if (container) {
        container.innerHTML = ""; // Limpa o que tiver lá
        
        fotosReais.forEach(item => {
            container.innerHTML += `
                <div style="background:white; border-radius:15px; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,0.1);">
                    <img src="${item.imagem}" style="width:100%; height:250px; object-fit:cover; display:block;">
                    <div style="padding:20px;">
                        <h3 style="margin:0 0 10px; color:#004aad;">${item.titulo}</h3>
                        <p style="margin:0; color:#666; font-size:14px;">${item.texto}</p>
                    </div>
                </div>
            `;
        });
    }
}

// Roda assim que o site abrir
window.onload = carregarSite;
