import validator from 'validator';


class FormValidador {


    constructor(validacao) {
        this.validacao = validacao;
    }

    valida(state) {

        const campoValor = state[this.validacao.campo.toString()];
        const metodoValidacao = validator[this.validacao.metodo];

        if (metodoValidacao(campoValor, [], state)) {
            console.log("Form Invalido");
            return false;
        }else{
            console.log("Form Valido")
            return true;
        }
    }

}


export default FormValidador;