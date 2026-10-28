  const spans = document.querySelectorAll('.back-text span');
  let delay = 0;

  spans.forEach((span) => {
    span.style.transitionDelay = `${delay}s`;
    delay += 0.5;
  });

  setTimeout(() => {
    spans.forEach((span) => {
      span.classList.add('active');
    });
  }, 1000);

let mycolor = 'roze';

if (mycolor == 'roze'){
  console.log('Mooie kleur!');
}
else{
  console.log('Minder mooie kleur!');
}

// zegBoo();
// I can put any text here and JS will NOT execute it
let blokje = document.querySelector("#blokje");

function zegBOO() {
    blokje.innerHTML = "BOO!";
    blokje.style.backgroundColor = "tomato";
}

let knop = document.querySelector("#knop");
knop.addEventListener("click", zegBOO);


let Goodbye = document.querySelector("#Goodbye");

function leesInput() {
    Goodbye.innerHTML += naam.value;
}

knop.addEventListener("click", leesInput);

let knop2 = document.querySelector("#knop2");
knop2.addEventListener("click", function() {
    Goodbye.innerHTML = "Goodbye, " + naam.value + "!";
});




