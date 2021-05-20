function receivesAFunction(func){   
    return func();
}


function returnsANamedFunction(){
    const func = x => x 
    return func
}
function returnsAnAnonymousFunction(){
     return function(){console.log(`HI`)}
}

//returnsANamedFunction(function(){console.log('Hey')})






