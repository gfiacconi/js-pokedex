const containerCard = document.querySelector(".container");
function showPokemon() {
  for (i = 1; i < 151; i++) {
    fetch(` https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((res) => res.json())
      .then((data) => {
        containerCard.innerHTML += `<div class="card ${data.types[0].type.name}">
            <img src="${data.sprites.front_default}"/>
            <div class="box__info">
                <span>#${data.id}</span>
                <h4>${data.name}</h4>
                <h6>Type:${data.types[0].type.name}</h6>
            </div>
            </div>`;
      });
  }
}
showPokemon();

   