function mostrarLista(listaPokes){
    const app = document.getElementById("app");
    let Pokes = "";

    for(let i =0; i < listaPokes.length; i++){
        let id = listaPokes[i].url.split("/")[6];
        Pokes += 
        <div class="c-lista-pokeon poke-$(id)" onclick="mostrarDetalle('${pokemones[i]})"
    }

    app.innerHTML = Pokes;
}