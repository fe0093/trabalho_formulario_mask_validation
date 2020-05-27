 
$("#telefone").mask('(00) 00000-0000');
$("#CPF").mask('000.000.000-00');
$("#cep").mask('00000.000');
$("#nascimento").mask('00/00/00');

$("#formulario").validate({

rules: {

    nome : {
        required: true,
        minlenght: 3,
        maxlenght: 25,
    },

    email: {
        required: true,

    },

    Senha: {
        required: true,
        minlenght: 8,
        maxlenght: 25,


        
    },

    telefone: {
        required: true,
        minlenght: 11,
        
    },

    CPF: {
        required: true,
        minlenght: 7,
        maxlenght: 11,
        
    },

    nascimento: {
        required: true,
        date: true,
        
    },

    endereço: {
        required: true,
        
    },

    cep: {
        required: true,
        
    },

    estado: {
        required: true,
        
    },

    cidade: {
        required: true,
        
    },

}

});

