// componente: um bloco isolado de html, css e js
// propriedade: informacoes que um componente pai passa para o componente filho
// estado: informacoes mantidas pelo componente

import React, { useEffect, useState } from 'react';

import './globalStyle.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [githubUsername, setGuithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLat(latitude);
        setLong(longitude);
      },
      (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      },
      {
        timeout: 5000,
      },
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    console.log(githubUsername, techs, lat, long);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="github_username"
              value={githubUsername}
              onChange={(e) => setGuithubUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              value={techs}
              onChange={(e) => setTechs(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                value={lat}
                onChange={(e) => setLat(e.target.value)}
                required
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                value={long}
                onChange={(e) => setLong(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/49327595?s=460&v=4" alt="Otávio Melo" />
              <div className="user-info">
                <strong>Otávio Melo</strong>
                <span>ReactJS, Node, Python</span>
              </div>
            </header>
            <p>Apaixonado por novos aprendizados!</p>
            <a href="https://github.com/OtavioMelo12">Acessar perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/49327595?s=460&v=4" alt="Otávio Melo" />
              <div className="user-info">
                <strong>Otávio Melo</strong>
                <span>ReactJS, Node, Python</span>
              </div>
            </header>
            <p>Apaixonado por novos aprendizados!</p>
            <a href="https://github.com/OtavioMelo12">Acessar perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/49327595?s=460&v=4" alt="Otávio Melo" />
              <div className="user-info">
                <strong>Otávio Melo</strong>
                <span>ReactJS, Node, Python</span>
              </div>
            </header>
            <p>Apaixonado por novos aprendizados!</p>
            <a href="https://github.com/OtavioMelo12">Acessar perfil do Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
