// console.log("Hola MUndo! desde la Consola");
var app = document.getElementById('app');
var typewriter = new Typewriter(app, {
    loop: true
});
typewriter.typeString('Estudiante en Farmacia | Desarrolladora Front-End Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Puedes conocer mas acerca de mi')
    .pauseFor(2500)
    .deleteChars(24)
    .typeString('<strong>contactarme!</strong>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes imaginar, lo puedes crear!')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('<strong>programar!</strong>')
    .pauseFor(2500)
    .start();
