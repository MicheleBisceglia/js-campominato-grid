// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


document.getElementById("start").addEventListener("click", startGame);


// MAIN FUNCTION
function startGame() {
    // 1. Genero numeri da 1 a 100
    const gridSize = 100;
    const gridArray = generateGridNumbers(gridSize);


    // 2. Creo un grid item per ogni numero
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = "";

    for (let i = 0; i < gridArray.length; i++) {
        const thisNumber = gridArray[i];

        const domElement = generateGridItem(thisNumber)

        // aggiungo la gestione del click
        domElement.addEventListener("click", function() {
            this.classList.add("active");
        });

        // appendo questo elemnto al contenitore
        gridContainer.append(domElement);
    }
}


//FUNCTIONS

function generateGridNumbers(gridNumberQuantity) {
    // creare l'array
    const numberArray = [];
    console.log(numberArray);
    // Creo i numeri tramite ciclo for
    for (numberArray.length = 1; numberArray.length < 100; numberArray.length++) {
        // 1. genero il numero 
        const pNumber =  gridNumberQuantity;

        // 2. pusho il numero che non è ancora nell' array
        if ( !numberArray.includes(pNumber) ) {
            numberArray.push(pNumber);
        }
    }
    
    return numberArray;
    
}




// DOM FUNCTIONS
/**
 * Description La funzione che genera l'elmento html con numero all'interno
 * @param {any} number -> il numero che dobbiamo inserire all'interno dell'elemnto html
 * @returns {any} -> l'elemento html (il mio div)
 */
function generateGridItem(number) {
    // creo un elemnto html
    const newElement = document.createElement("div");

    // agiungo il span con il numero
    newElement.innerHTML = `<span>${/*number*/1}</span>`

    // assegno la classe grid-item
    newElement.classList.add("grid-item");

    // ritorno elemnto
    return newElement;
}

