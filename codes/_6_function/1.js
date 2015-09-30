var localF = (function() {
    function internal(){
        return 1;
    }
    
    function internal2(){
        return 2;
    }
    
    return function add(c){
        var a = internal() + internal2() + c;
        return a;
    }
})();

console.log(localF(3));
