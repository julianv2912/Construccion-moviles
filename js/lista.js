function mostrarLista(listaPokes) {
    const app = document.getElementById("app");
    let Pokes = "";

    for (let i = 0; i < listaPokes.length; i++) {
        let id = listaPokes[i].url.split("/")[6];
        Pokes += `
            <div class="c-lista-pokemon poke-${id}" onclick="mostrarDetalle('${listaPokes[i].name}')">
                <p>#${id}</p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" width="auto" height="60" loading="lazy" alt="${listaPokes[i].name}">
                <p>${listaPokes[i].name}</p>
            </div>
        `;
    }

    app.innerHTML = Pokes;
}
