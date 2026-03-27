const pontos = [
    {
        nome: "Buraco da Velha",
        data: "Ponto Turístico Natural",
        img: "https://correio-cdn1.b-cdn.net/wp-content/uploads/2023/11/01153401/Buraco-da-Velha.jpg",
        desc: "Formação de recifes em Vilas do Atlântico que atrai milhares de banhistas desde a década de 70."
    },
    {
        nome: "Parque Shopping Bahia",
        data: "Inaugurado em: 17 de Março de 2020",
        img: "https://www.bahiadevalor.com.br/wp-content/uploads/2020/03/parque-shopping-bahia-2.jpg",
        desc: "Um dos maiores centros comerciais do estado, localizado na estratégica Estrada do Coco."
    },
    {
        nome: "Igreja Matriz de Santo Amaro",
        data: "Fundada em: 1584",
        img: "https://i.imgur.com/vHpxl4Z.jpeg",
        desc: "Marco zero da cidade. A paróquia de Santo Amaro de Ipitanga é o coração histórico de Lauro de Freitas."
    },
    {
        nome: "Terminal Aeroporto",
        data: "Inaugurado em: 2018 (Metrô)",
        img: "https://i.imgur.com/yK6XU4Q.jpeg",
        desc: "Ponto de conexão vital que integrou Lauro de Freitas definitivamente à malha de transporte da capital."
    }
];

function render() {
    const grade = document.getElementById('grade-principal');
    if(grade) {
        grade.innerHTML = pontos.map(p => `
            <div class="card-item">
                <div class="card-img" style="background-image: url('${p.img}')"></div>
                <div class="card-info">
                    <span class="data-marco">${p.data}</span>
                    <h3>${p.nome}</h3>
                    <p>${p.desc}</p>
                </div>
            </div>
        `).join('');
    }
}

window.onload = render;
