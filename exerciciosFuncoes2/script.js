function verificaTipoDado(dado){
    if(typeof dado === 'string'){
        console.log("O dado é do tipo string")
    }else if(typeof dado === 'number'){
        console.log("O dado é do tipo number")
    }else if (typeof dado === 'boolean'){
        console.log("O dado é do tipo boolean")
    }
}

verificaTipoDado(23);
verificaTipoDado('amor');
verificaTipoDado(false);
verificaTipoDado(true);