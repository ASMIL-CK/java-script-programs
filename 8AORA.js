// using startswith 

function abc(abc){
    return abc.startsWith("a") || abc.startsWith("A") ? "starting with  a or A ": " not starting with aor A";

}
console.log(abc("AudioBufferSourceNode"));

// using index

function  starta(word){
    return word[0] == "a" ? "start with a" : word[0] == "A" ? "start with A " : "try again ";
}
console.log(starta("apple"));