
function init() {
    ex1();
    ex2();
    ex3();
    ex4();
}
function ex1() {
    console.log("ex1");
    function onlyOneWord(input) {
        return input.filter((phrase) => { return !phrase.includes(" ") })
    }
    var input = ['return', 'phrases', 'with one word'];
    var expected = ['return', 'phrases']
    var actual = onlyOneWord(input)
    console.log('INPUT:', input, 'EXPECTED:', expected, 'ACTUAL:', actual);

}

function ex2() {
    console.log("ex2");
    function revereseString(string){
        return string.split('').reverse().join('');
    }
    function reverseAll(strings){
        return strings.map((string) => revereseString(string));
    }
    var input = ['abc', 'xyz'];
    var expected = ['cba', 'zyx']
    var actual = reverseAll(input)
    console.log("input ['abc', 'xyz'], expected ['cba', 'zyx'], actual",actual);
}



function ex3() {
    console.log("ex3")
    function capitalizeLongerThan5(input){
        return input.map((string)=>{
            if (string.length>5){
                string= capitalizeFirstChar(string)
            } 
            return string;
        })
    }
    function capitalizeFirstChar(string){
        return (string.charAt(0).toUpperCase() + string.slice(1));
    }
    var input = ['abcdefg', 'xyz'];
    var expected = ['Abcdefg', 'xyz']
    var actual = capitalizeLongerThan5 (input) 
    console.log("input = ['abcdefg', 'xyz'], expected = ['Abcdefg', 'xyz'], actual ",capitalizeLongerThan5(input) ) 
}


function ex4() {
    console.log("ex4")
    function onlyVowels(input){
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        return input.map((string)=>{
            return string.split('').filter((letter)=> {return vowels.includes(letter)}).join('');
        })
    }
    var input = ['average', 'exceptional', 'amazing'];
    var expected = ['aeae', 'eeioa', 'aai']
    var actual = onlyVowels(input)
    console.log("input = ['average', 'exceptional', 'amazing'], expected = ['aeae', 'eeioa', 'aai'], actual ", onlyVowels(input))
}





