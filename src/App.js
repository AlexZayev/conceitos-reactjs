import React, {useState, useEffect} from "react";

import api from './services/api'

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
    });
  }, []);

  async function handleAddRepository() {
    const title = `Repositorio ${Date.now()}`;
    const repo = {
      title,
      url: `http://github.com/alexzayev/${title}`,
      techs: ['HTML','JAVASCRIPT','CSS']  
    };    
    
    const response = await api.post('repositories', repo);    
    
    const repository = response.data;

    setRepositories([...repositories, repository]);
    
  }

  async function handleRemoveRepository(id) {
    await api.delete(`repositories/${id}`);
    const tempRepositories = repositories.filter(r => !r.id.includes(id));
    setRepositories(tempRepositories);
  }
  
  return (
    <div>
      <h1>Meus repositorios: {repositories.length}</h1>
      <ul data-testid="repository-list">
        {repositories.map(repository => (
          <li key={repository.id}>
          {repository.title}

          <button onClick={() => handleRemoveRepository(repository.id)}>
            Remover
          </button>
        </li>
        ))}
        
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
