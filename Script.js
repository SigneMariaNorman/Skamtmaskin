const programmingJokes = [ // Deklarar och skapar array med alla dessa skämt nedan. 
  "Why don't programmers like nature? It has too many bugs.",
  "Why did the CSS developer go to therapy? To get rid of his margins.",
  "How do you comfort a JavaScript developer? You console them.",
  "Why did the CSS developer leave the restaurant? Because it had no class.",
  "Why did the JavaScript developer go missing? Because he didn't know when to return.",
  "Why did the HTML tag go to the party? Because it wanted to break the line.",
  "Why do JavaScript developers wear glasses? Because they don't C#.",
  "Why don't programmers like to use inline styles? Because they want to be classy.",
  "Why did the CSS selector break up with the HTML element? It found someone more specific.",
  "Why did the CSS developer apply for a job? They wanted to get a position.",
];
function showRandomJoke() {
    const jokeElement = document.getElementById("skamt"); /* Hämtar HTML-elementet "skamt" och lagrar det i en variabel.
    const jokeElement lagrar referensen till elementet "skamt". */
    let firstIndex = Math.floor(Math.random() * programmingJokes.length); //Slumpar två olika skämt
    let secondIndex;  // Deklarerar variablen let secondIndex.
    do {
        secondIndex = Math.floor(Math.random() * programmingJokes.length);/* Slumpar fram ett heltal för att välja skämt från arrayen 
        programmingJokes.length. Math.random genererar ett heltal mellan 0 och 1. När det multipliceras med programmingJokes.length kommer ett tal
        inom "rätt intervall". Math.floor avrundar nedåt. */
    } while (secondIndex === firstIndex); // ser till att de två skämten inte är samma samtidigt.
    jokeElement.innerText = `${programmingJokes[firstIndex]}\n\n${programmingJokes[secondIndex]}`; //visar två skämt samtidigt.
}
