import React, { Component, Fragment } from 'react';
import Header from './header';
import DataTable from './dataTable';
import ApiService from './apiService';
import PopUp from './popup';

class Autores extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nomes: [],
            titulo: 'Autores'
        };
    }

    componentDidMount(){
        ApiService.ListaNomes()
            .then(res => ApiService.TrataErros(res))
            .then(res =>{
                if(res.message === 'success'){
                    PopUp.exibeMensagem('success',"Autores listados com sucesso")
                    this.setState({nomes: [...this.state.nomes, ...res.data]});
            }
        }).catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar listar o autor"));
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <h1>Página de Autores</h1>
                    <DataTable dados={this.state.nomes} titulo={this.state.titulo} colunas={['nome']} />
                </div>
            </Fragment>

        );
    }
}

export default Autores;