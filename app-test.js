const btnAdd = document.getElementById('btn-add');
const btnRemove = document.getElementById('btn-remove');
const btnReset = document.getElementById('btn');
const compteur = document.getElementById('compteur');



function add(){
    const nombre = Number(compteur.innerHTML)

    compteur.innerHTML = `${nombre + 1}`

}

btnAdd.addEventListener('click', add)

function remove(){
    const nombre = Number(compteur.innerHTML)
    if(nombre > 0){
        compteur.innerHTML = `${nombre - 1}`
    }
}

btnRemove.addEventListener('click', remove)

btnReset.addEventListener('click', reset)

function reset(){
    compteur.innerHTML = "0"
}