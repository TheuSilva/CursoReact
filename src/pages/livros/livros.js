import React, { Component, Fragment } from 'react';
import Header from '../../components/header/header';
import DataTable from '../../components/dataTable/dataTable';
import ApiService from '../../utils/apiService';
import PopUp from '../../utils/popup';

class Livros extends Component {
    constructor(props) {
        super(props);

        this.state = {
            livros: [],
            titulo: 'Livros'
        };
    }

    componentDidMount() {
        ApiService.ListaLivros()
            .then(res => {
                if (res.message === 'success') {
                    PopUp.exibeMensagem('success', 'Livros listados com sucesso')
                    this.setState({ livros: [...this.state.livros, ...res.data] });
                }
            })
            .catch(err => PopUp.exibeMensagem('error', 'Falha na comunicação com a API ao listar os livros'));
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <h1>Página de Livros</h1>
                    <DataTable dados={this.state.livros} titulo={this.state.titulo} colunas={['livro']} />
                </div>
            </Fragment>
        );
    }
}

export default Livros;