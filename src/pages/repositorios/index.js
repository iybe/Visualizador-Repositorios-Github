import React,{ useEffect,useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './style.css';

export default function Repositorios() {
  
  const [ repositorios, setRepositorios ] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let dadosRepositorios = localStorage.getItem("dadosRepositorios");
    if(dadosRepositorios !== null){
      dadosRepositorios = JSON.parse(dadosRepositorios);
      setRepositorios(dadosRepositorios);
      localStorage.clear();
    }else{
      history.push('/');
    }
  },[]);
  
  return (
    <div className="container-repositorios">
      <ul>
        {repositorios.map(rep => 
          (
            <li>
              <a href={rep.url} target="blank">Repositorio: {rep.nome}</a>
            </li>)
          )
        }
      </ul>
      <Link className="link" to="/">Voltar</Link>
    </div>
  );
}