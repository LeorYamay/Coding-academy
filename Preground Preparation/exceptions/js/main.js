
function init() {
    // ex1()
    ex2()
}

function ex1() {
    var counter = 0;

    try {
        // Throws TypeError:
        var num = 4
        num.toUpperCase()

    }
    catch (err) {
        counter ++;
    }
    try {
        // Throws SyntaxError
        eval("alert('Hello)")

    } catch (err) {
        counter ++;
    }
    try {
        // Throws ReferenceError
        var x = y + 1


    } catch (err) {
        counter ++;
    }

    console.log(`number of errors: ${counter}`)
}

function ex2(){
    function foo() {
        if (Math.random() > 0.7) throw new Error('Problem!')
        console.log('Foo!')
       }
       var allTriesCount = 0
       var successCount = 0
       while (successCount < 100) {
        try{
            foo()
            successCount++

        }catch(err){
        }finally{
            allTriesCount++
        }
       }
       console.log('Tried: ' + allTriesCount + ' Times')
}