import React, { Component } from 'react';
// import logo from './logo.svg';
import '../Home/App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      lista:[],
      id:"",
      name:"",
      description:"",
      created_at:"",
      size:""
    }   
  } 

  listar(){
    fetch('https://api.github.com/users/Arielmn22/repos?client_id=0fe282e9ced4bde7bcaa&client_secret=4ad048f7e4cf65ecf77bfbf2d6b19d921cf8a551')
    .then(resposta=>resposta.json())
    .then(data=>this.setState({lista:data}))
    .catch(erro=>console.log('erro pra listar',erro))
  }
  
  componentDidMount(){
    this.listar()
  }
  render() {
    
    // <script src="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></script>
     return (
      <section className="Header">
          <h1>Repositório GitHub</h1>
          <div className="Busca">
          <form>
            <input type="text" placeholder="Insira seu Nome" id="busca-repositorio"></input>
            <button></button> 
          </form>
          </div>
          <table className="tabela">
            <thead>
              <tr>
                <td>Id</td>
                <td>Nome</td>
                <td>Descricao</td>
                <td>Data</td>
                <td>Tamanho</td>
              </tr>
            </thead>
            <tbody> {  
              this.state.lista.map(function(repos){
                return(
                  <tr key={this.state.repos}>
                      <td key={repos.id}></td>
                      <td key={repos.name}></td>
                      <td key={repos.description}></td>
                      <td key={repos.created_at}></td>
                      <td key={repos.size}></td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>
      </section>
      
      );
  }
}

export default App;
