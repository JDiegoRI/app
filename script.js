window.onload = () => {
  fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => {
      return res.status == 200 ? res.json() : alert('Algo Salio mal')
    })
    .then(data => {
      const pokemones = data.results
      const nombrePokemon = document.querySelector('.list-pokemon')

      pokemones.forEach(element => {
        //Creando elementos
        const row = document.createElement('tr')
        const colName = document.createElement('td')
        const colButton = document.createElement('td')
        const auxButon = document.createElement('button')

        //Seteando descriptcion
        colName.innerHTML = element.name
        auxButon.innerHTML = 'Ver detalle'
        auxButon.addEventListener('click', () => {
          const auxImgDetail = document.getElementById('img-pokemon')
          const auxNameDetail = document.getElementById('nombre-pokemon')
          const auxPesoDetail = document.getElementById('peso-pokemon')
          const auxAlturaDetail = document.getElementById('altura-pokemon')

          fetch(element.url)
            .then(data => data.json())
            .then(result => {
              console.log(result)
              auxImgDetail.src = result.sprites.front_default
              auxNameDetail.innerHTML = result.name
              auxPesoDetail.innerHTML = result.weight
              auxAlturaDetail.innerHTML = result.height
            })

        })

        //Cargando elementos
        colButton.appendChild(auxButon)
        row.appendChild(colName)
        row.appendChild(colButton)
        nombrePokemon.appendChild(row)
      });


    })
    .catch(err => {
      alert('Algo Salio mal')
      console.log(err)
    })
}