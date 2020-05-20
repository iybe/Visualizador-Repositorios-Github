import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './style.css';

export default function Principal() {
  
  const [ usuario, setUsuario ] = useState();
  const [ erro, setErro ] = useState();
  const history = useHistory();

  function pesquisar() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then( res => {
      const repositorios = res.data;
      let dadosRepositorios = [];
      repositorios.map(rep => dadosRepositorios.push({
          nome: rep.name,
          url: rep.html_url
        }));
      localStorage.setItem("dadosRepositorios",JSON.stringify(dadosRepositorios));
      setErro(false);
      history.push('/repositorios');
    }).catch( err => setErro(true) );
  }

  return (
    <div className="container">
      <input onChange={e => setUsuario(e.target.value)} value={usuario} placeholder="Digite um nome de usuario"></input>
      <button onClick={pesquisar} type="button">Pesquisar</button>
      { erro ? <p>Usuario nao encontrado</p> : '' }
    </div>
  );
}