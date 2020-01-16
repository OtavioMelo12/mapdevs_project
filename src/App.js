/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
// componente: um bloco isolado de html, css e js
// propriedade: informacoes que um componente pai passa para o componente filho
// estado: informacoes mantidas pelo componente

import React, { useEffect, useState } from 'react';

import api from './services/api';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

import './globalStyle.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {
            devs.map((dev) => (
              <DevItem key={dev._id} dev={dev} />
            ))
          }
        </ul>
      </main>
    </div>
  );
}

export default App;
