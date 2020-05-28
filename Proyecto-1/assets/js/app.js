// Variables
const listaTweets = document.getElementById('lista-tweets');

// Event Listeners
eventListeners();

function eventListeners() {
  // cuando se envia el formulario
  document
    .querySelector('#formulario')
    .addEventListener('submit', agregarTweet);

  // borrar Tweets
  listaTweets.addEventListener('click', borrarTweet);

  // Contenido Cargado
  document.addEventListener('DOMContentLoaded', localStorageListo);
}

// Funciones

// Añadir tweet del formulario
function agregarTweet(e) {
  e.preventDefault();
  // Leer el valor del textarea
  const tweet = document.getElementById('tweet').value;
  console.log(tweet);

  // Crear Boton borrar
  const botonBorrar = document.createElement('a');
  botonBorrar.classList = 'borrar-tweet';
  botonBorrar.innerText = 'X';

  // Crear elemento y añadirle el contenido a la lista
  const li = document.createElement('li');
  li.innerHTML = tweet;

  // Añade el boton de borrar al tweet
  li.appendChild(botonBorrar);

  // Añade el tweet a la lista
  listaTweets.appendChild(li);

  // Añadir a local storage
  agregarTweetLocalStorage(tweet);
}

// Elimina el Tweet del DOM
function borrarTweet(e) {
  e.preventDefault();

  if (e.target.className === 'borrar-tweet') {
    e.target.parentElement.remove();
    borrarTweetLocalStorage(e.target.parentElement.innerText);
  }
}

// Mostrar datos de localStorage en la lista
function localStorageListo() {
  let tweets;

  tweets = obtenerTweetLocalStorage();
  tweets.forEach((tweet) => {
    // Crear Boton borrar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    // Crear elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerHTML = tweet;

    // Añade el boton de borrar al tweet
    li.appendChild(botonBorrar);

    // Añade el tweet a la lista
    listaTweets.appendChild(li);
  });
}

// Agrega Tweet a localStorage
function agregarTweetLocalStorage(tweet) {
  let tweets;

  tweets = obtenerTweetLocalStorage();

  // Añadair el nuevo tweet
  tweets.push(tweet);
  // Convertir ade string a arreglo para localstorage
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Comprobar que haya elementos en localstorage, retona un arreglo
function obtenerTweetLocalStorage() {
  let tweets;
  // Revisamos los valores de localStorage

  if (localStorage.getItem('tweets') === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(localStorage.getItem('tweets'));
  }

  return tweets;
}

// Eliminar elementos del localStorage
function borrarTweetLocalStorage(tweet) {
  let tweets, tweetBorrar;

  // Elimina la X del tweet
  tweetBorrar = tweet.substring(0, tweet.lenght - 1);

  tweets = obtenerTweetLocalStorage();
  tweets.forEach((tweet, index) => {
    if (tweetBorrar === tweet) {
      tweets.splice(index, 1);
    }
  });

  localStorage.setItem('tweets', JSON.stringify(tweets));
}
