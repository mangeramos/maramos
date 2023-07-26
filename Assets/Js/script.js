var api = 'https://digimon-api.vercel.app/api/digimon'
var contenido = document.getElementById('contenido')

/*Para traer todos los datos*/
fetch(api)
    .then(response => response.json())
    .then(datos =>{
       console.log(datos)
       tabla(datos)
       
    })

/*Función para poner los digimon y sus datos en la tabla*/
function tabla(datos){
    contenido.innerHTML = ""
    for (let temp of datos){
        contenido.innerHTML += `
            <tr>
                <td>${temp.name}</td>
                <td>${temp.level}</td>
                <td><img src="${temp.img}" alt=""></td>
            </tr>
            `
    }
}




const apdi = 'https://digimon-api.vercel.app/api/digimon/name/'
var image = document.getElementById('digifoto')
var nom = document.getElementById('diginombre')
var nivel = document.getElementById('digilevel')


/*Función para buscar por nombre en el digivice*/
function buscarDigimon() {
    var nombre = document.querySelector('#diginame').value;
    var url = `${apdi}${nombre}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        foto = data[0].img
        nombredigimon = data[0].name
        lev = data[0].level
        image.setAttribute('src',foto)
        nombreD(nombredigimon)
        niveles(lev)

    })
}

function nombreD(nombredigimon){
    nom.innerHTML = ""
    for (let temp of nombredigimon){
        nom.innerHTML = `${nombredigimon}`
    }
}

function niveles(lev){
    nivel.innerHTML = ""
    for (let temp of lev){
        nivel.innerHTML = `${lev}`
    }
}
