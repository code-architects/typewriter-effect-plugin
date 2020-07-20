var text = document.getElementById('text');

var typewriter = new Typewriter(text, {
    loop: false
});

typewriter.typeString('Which part of London is in France?')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Guess?')
    .pauseFor(3000)
    .deleteAll()
    .typeString('The letter N')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Londo')
    .typeString('<strong>N</strong>')
    .typeString(' - Fra')
    .typeString('<strong>N</strong>')
    .typeString('ce')
    .start();