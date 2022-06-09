const divMusicosList = $('#musicos-list')

console.log(divMusicosList)

function getUsers() {
    fetch('/api/musicos')
        .then(response => response.json())
        .then(musicos => {
            console.log(musicos)
            musicos.forEach(musico => {
                divMusicosList.append(`
                <div class="col-md-4">
                <div class="card mt-4">
                    <img src="/assets/imgs/prod-01.png" class="card-img-top" alt="prod-01.png">
                    <div class="card-body">
                        <h5 class="card-title">${musico.first_name} ${musico.last_name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                        content.</p>
                        <a href="/musico/${musico.id}" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </div>
                `)
            })
        })
}

getUsers()