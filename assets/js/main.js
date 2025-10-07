
/*Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/


// Creiamo un ciclo for che gira fin quando la nostra variabile i non si incrementa fino ad arrivare al numero 100
for(let i=1; i<=100; i++)
{
    // verifichiamo SE la nostra variabile incrementale é divisibile sia per 5 che per 3 
    if( i % 5 === 0 && i % 3 === 0){
        console.log(`${i} FizzBuzz`);
        
    }else if( i % 5 === 0){
         console.log(`${i} Buzz`);
    }else{
        if( i % 3 === 0){
            console.log(`${i} Fizz`);
        }
    }
}
