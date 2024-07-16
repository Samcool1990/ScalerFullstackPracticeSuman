function global() {
    var g = '>>>>global'
    console.log(g)


    function outer() {
        var o = '>>>>outer'
        console.log(g,o)

        function inner() {
            var i = '>>>>inner'
           console.log(g,o,i) 
               
        }    
        inner()    
    }
    outer()
}
global()