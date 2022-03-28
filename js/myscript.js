// graph TD
// A[scrivo programma da 1 a 100]-->B{i numeri sono multipli di 3 e 5?}
// B -->|si| C[ stampo 'FizzBuzz' con relativo colore]
// B -->|no| D{i numeri sono multipli di 3?}
// D -->|si| E[stampo 'Fizz con relativo colore']
// D -->|no| F{i numeri sono multipli di 5?}
// F -->|si| G[stampo 'Buzz con relativo colore']
// F-->|no| H[stampo valore numerico con relativo colore]
// C & E & G & H --> I[appendo stringa o numero corretto all'html]

let ripetizioni = 100;
const contenitore = document.getElementById('app');
const row = document.createElement('div');
row.setAttribute('class', 'row g-2');
for(let i = 1; i <= ripetizioni; i++){
    const col = document.createElement('div');
    col.setAttribute('class', 'col-4 col-sm col-md-2 col-lg-2');
   if ((i % 3 === 0) && (i % 5 === 0)){
       const mioTitolo = document.createElement('div');
       mioTitolo.innerHTML += 'FizzBuzz';
       mioTitolo.setAttribute('class', 'my_square p-2 ms-color-4')
       col.append(mioTitolo);
   } else if(i % 3 === 0){
       const mioTitolo = document.createElement('div');
       mioTitolo.innerHTML += 'Fizz';
       mioTitolo.setAttribute('class', 'my_square p-2 ms-color-3')
       col.append(mioTitolo);
   } else if( i % 5 === 0){
        const mioTitolo = document.createElement('div');
        mioTitolo.innerHTML += 'Buzz';
        mioTitolo.setAttribute('class', 'my_square p-2 ms-color-2')
        col.append(mioTitolo);
   } else{
        const mioTitolo = document.createElement('div');
        mioTitolo.innerHTML += (i);
        mioTitolo.setAttribute('class', 'my_square p-2 ms-color-1')
        col.append(mioTitolo);
   }
   row.append(col);

}

   contenitore.append(row);
  
