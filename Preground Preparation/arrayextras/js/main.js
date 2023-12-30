
function init() {
    let clickCount = 0;
    document.querySelector('button').onclick = (event) => {
        clickCount++;
        event.target.style.display = 'none';
        setTimeout(() => { event.target.style.display = 'block'; }, 2000);
        console.log('count: ', clickCount)
    }

    // ex2();

    // ex3();

    // ex4();

    // ex5();
}

function ex2() {
    console.log("ex2");
    function multBy(number){
        return function inner(number2){
            return number*number2
        };
    }
    var multBy4 = multBy(4)
    console.log("multBy4(2) // Should print 8 ", multBy4(2));
}



function ex3(){
    console.log("ex3")
    for (let i = 0; i < 5; i++) { //var => let
        setTimeout( () => { console.log(i) }, i * 1000 )
        }
}

function Tuple(v1, v2) {
    let V1=v1;
    let V2=v2;
    return {
    first(){return V1;},
    second(){return V2;},
    setFirst(newVal){V1=newVal},
    sum(){return V1+V2;}
    }
    // function first(){
    //     return V1;
    // }
    // function second(){
    //     return V2;
    // }
    // function sum(){
    //     return V1+V2;
    // }
    // function setFirst(newVal){
    //     V1=newVal;
    // }
    }
    function ex4(){
        console.log("ex4")
        const t1 = Tuple(17, 5)
        console.log('First: ', t1.first()) // prints 17
        console.log('Second: ', t1.second()) // prints 5
        console.log('Sum: ', t1.sum()) // prints 22
        t1.setFirst(100)
        console.log('Sum: ', t1.sum()) // prints 105
    }
    function ex5(){
        console.log("ex5");
        function mul(a){
            return function(b){
                return function(c){
                    return a*b*c;
                };
            };
        }
        console.log(mul(2)(3)(4)) // output : 24
        console.log(mul(4)(3)(4)) // output : 48
    }



