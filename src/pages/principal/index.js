import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Principal() {
  
  const [ usuario, setUsuario ] = useState();
  const [ erro, setErro ] = useState();
  const history = useHistory();

  function pesquisar() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then( res => {
      const repositorios = res.data;
      let nomeRepositorios = [];
      repositorios.map(rep => nomeRepositorios.push(rep.name));
      localStorage.setItem("nomeRepositorios",JSON.stringify(nomeRepositorios));
      setErro(false);
      history.push('/repositorios');
    }).catch( err => setErro(true) );
  }

  return (
    <div>
      <input onChange={e => setUsuario(e.target.value)} value={usuario} placeholder="usuario"></input>
      <button onClick={pesquisar} type="button">Pesquisar</button>
      { erro ? <p>Usuario nao encontrado.</p> : '' }
    </div>
  );
}