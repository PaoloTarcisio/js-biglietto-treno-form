const MyButton = document.getElementById('MyButton');

MyButton.addEventListener('click', function() {
    const nome = document.querySelector('#NomeCognome');
    console.log('nome', nome.value, typeof nome);
    const prova = document.getElementById('NomeCognomeInfo').innerHTML = `${nome.value}`

    const offerta = document.querySelector('#offerta').innerHTML = 'Biglietto Standart'

    const carrozza = document.querySelector('#carrozza').innerHTML = ((Math.floor(Math.random() * 10)) + 1);
    console.log('carrozza', carrozza.value, typeof carrozza);

    const codiceCP = document.querySelector('#codiceCP').innerHTML = (Math.floor(Math.random() * 100000));
    console.log('codiceCP', codiceCP.value, typeof codiceCP);

    const chilometri = document.querySelector('#Km');
    const kmInNumber = parseInt(chilometri.value);
    const eta = document.querySelector('#FasciaEta');
    let prezzo = (kmInNumber * 0.21)
    let prezzoInNumber = parseInt(prezzo);

    if (eta.value == '2') {
        prezzo *= 0.8;
        console.log ('prezzo', prezzo, 'minorenne');
        const costo = document.querySelector('#costo').innerHTML = `${prezzo}`;
    }

    if (eta.value == '3') {
        prezzo *= 0.6;
        console.log ('prezzo', prezzo, 'pensionato');
        const costo = document.querySelector('#costo').innerHTML = `${prezzo}`;

    }

    else { 
        const costo = document.querySelector('#costo').innerHTML = `${prezzo}`;
    };


});

// let nominativo = document.getElementById('NomeCognome');
// console.log('nominativo', nominativo, typeof nominativo);