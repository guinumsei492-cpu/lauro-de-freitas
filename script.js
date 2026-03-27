const pontos = [
    {
        nome: "Buraco da Velha",
        data: "Ponto Turístico Natural",
        // Foto Real do Buraco da Velha (Link que não bloqueia)
        img: "https://i.imgur.com/v8N9oRE.jpeg", 
        desc: "Formação de recifes em Vilas do Atlântico que atrai banhistas desde a década de 70."
    },
    {
        nome: "Parque Shopping Bahia",
        data: "Inaugurado em: 17 de Março de 2020",
        // Foto Real da Fachada (Link que não bloqueia)
        img: "https://i.imgur.com/C50mXN4.jpeg",
        desc: "O maior centro comercial da região, localizado na Estrada do Coco."
    },
    {
        nome: "Igreja de Santo Amaro",
        data: "Fundada em: 1584",
        // Foto Real da Matriz (Link que não bloqueia)
        img: "https://i.imgur.com/8NlT4Vw.jpeg",
        desc: "Coração histórico da cidade, erguida no século XVI."
    },
    {
        nome: "Praia de Ipitanga",
        data: "Orla de Lauro de Freitas",
        // Foto Real de Ipitanga (Link que não bloqueia)
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Praia_de_Ipitanga.jpg/800px-Praia_de_Ipitanga.jpg",
        desc: "Uma das praias mais famosas e visitadas da nossa cidade."
    }
];

function render() {
    const grade = document.getElementById('grade-principal');
    if(grade) {
        grade.innerHTML = ""; // Limpa tudo antes
        pontos.forEach(p => {
            grade.innerHTML += `
                <div class="card-item">
                    <div class="card-img" style="background-image: url('${p.img}')"></div>
                    <div class="card-info">
                        <span class="data-marco" style="color: #888; font-weight: bold; font-size: 12px;">${p.data}</span>
                        <h3 style="margin: 5px 0; color: #fff;">${p.nome}</h3>
                        <p style="color: #ccc; font-size: 14px;">${p.desc}</p>
                    </div>
                </div>
            `;
        });
    }
}

// Isso aqui garante que as fotos carreguem assim que o site abrir
window.onload = render;
