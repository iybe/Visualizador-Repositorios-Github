import React,{ useEffect,useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './style.css';

export default function Repositorios() {
  
  const [ repositorios, setRepositorios ] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let nomeRepositorios = localStorage.getItem("nomeRepositorios");
    if(nomeRepositorios !== null){
      nomeRepositorios = JSON.parse(nomeRepositorios);
      setRepositorios(nomeRepositorios);
      localStorage.clear();
    }else{
      history.push('/');
    }
  },[]);
  
  return (
    <div className="container-repositorios">
      <ul>
        {repositorios.map(rep => (<li>{rep}</li>))}
      </ul>
      <Link className="link" to="/">Voltar</Link>
    </div>
  );
}