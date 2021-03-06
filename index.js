let actualId;
//TODO asignar variable al valor de localStorage.
const localStorage;
// TODO asignar variable al valor de sessionStorage.
const sessionStorage;
let favorites = [];
const replayerList = document.getElementById('replayer-list');
const favList = document.getElementById('favorites');
const replayer = document.getElementById('replayer');
const videos = [];
const videosBBDD = ['./videos/SampleVideo_720x480_1mb.mp4', './videos/SampleVideo_720x480_2mb.mp4', './videos/SampleVideo_1280x720_1mb.mp4', './videos/SampleVideo_1280x720_2mb.mp4'];

// Event Listener que lanza la siguiente función cuando el documento a cargado
document.addEventListener('DOMContentLoaded', function() {
    //Recorremos el array con los path de los videos
    videosBBDD.forEach((title, id) => {
        createVideoElement(title, id);
    });
    // Comprobamos si existe la key favoritos en localStorage, en caso de que exista creamos los favoritos
    if (!localStorage.favorites) {
        localStorage.setItem('favorites', JSON.stringify([]));
    } else {
        createFavorites(JSON.parse(localStorage.favorites));
    }
    // Fijamos el actualId al primer video del array (index 0), será el video reproduciendose actualmente.
    actualId = 0;
}, false);

//TODO Función que selecciona el video con el actualId y lo reproduce
function playVideo() {

}

//TODO  Función que selecciona el video con el actualId y lo pausa.
function pauseVideo() {

}

// Función que se encarga de crear el video y la miniatura en el DOM
function createVideoElement(title, id) {
    const video = document.createElement('video');
    const miniatureBox = document.createElement('div');
    miniatureBox.classList.add('miniature');
    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'miniature'+id);
    canvas.setAttribute('width', 150);
    canvas.setAttribute('height', 100);
    video.setAttribute('src', title);
    video.setAttribute('id', 'video'+id);
    video.setAttribute('width', 800)
    video.setAttribute('height', 500)
    video.setAttribute('class', 'video');
    if (id !== 0) {
        video.setAttribute('hidden', 'hidden')
    }
    miniatureBox.addEventListener('click', function(e){onClickListItem(e)}, false);
    miniatureBox.appendChild(canvas);
    replayerList.appendChild(miniatureBox);
    replayer.appendChild(video);
    setTimeout(function(){
        canvas.getContext('2d').drawImage(video, 0, 0, 200, 150);
    }, 500);
    videos.push(video);
}

// Función que cambia el video a reproducir, pone el actual en oculto y muestra el seleccionado y pasado por el evento
function onClickListItem(e) {
    if (e.target && e.target.id) {
        num = e.target.id.match(/\d+/)[0];
    }
    videos[num].removeAttribute('hidden', 'hidden');
    videos[actualId].setAttribute('hidden', 'hidden');
    actualId = num;
}
// Crea las miniaturas en caso de que haya favoritos almacenados en localStorage
function createFavorites(items) {
    items.forEach((item) => {
        const id = item.match(/\d+/)[0];
        const favorite = videos[id];
        const miniatureFav = document.createElement('div');
        miniatureFav.classList.add('miniature');
        const canvas = document.createElement('canvas');
        canvas.setAttribute('width', 150);
        canvas.setAttribute('height', 100)
        canvas.setAttribute('id', 'miniature'+id);
        miniatureFav.addEventListener('click', function(e){onClickListItem(e)}, false);
        miniatureFav.appendChild(canvas);
        favList.appendChild(miniatureFav);
        setTimeout(function(){
            canvas.getContext('2d').drawImage(favorite, 0, 0, 200, 150);
        }, 500);
    });
}
// TODO Traer los favoritos de localStorage, almacenar el nuevo video guardado en el arr favorites y
// TODO guardarlo en localStorate, por último llamar a createFavorites con un array que tenga el valor de la id del nuevo video (actualId)
function addToFavorites() {

}