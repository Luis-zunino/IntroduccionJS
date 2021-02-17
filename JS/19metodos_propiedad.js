//Metodos de Propiedad

const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo Cancion con el ID: ${id}`);
  },
  pausa: function () {
    console.log(`Pausando`);
  },
  creandoPlayList: function (nombre) {
    console.log(`Creando la playlist: ${nombre}`);
  },
  reproducirPlaylist: function (nombre) {
    console.log(`Reproduciendo la playlist: ${nombre}`);
  },
};

reproductor.borrarCancion = function (id) {
  console.log(`Eliminando la cancion...${id}`); //agrega propiedades por fuera del objeto
};
reproductor.reproducir(3840);
reproductor.pausa();
reproductor.borrarCancion(20);
reproductor.creandoPlayList("Heavy Metal");
reproductor.reproducirPlaylist("Heavy Metal");
