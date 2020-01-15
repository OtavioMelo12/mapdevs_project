import React, { useState, useEffect } from 'react';

import './styles.css';

function DevForm({ onSubmit }) {
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

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit(
      {
        github_username: githubUsername,
        techs,
        latitude: lat,
        longitude: long,
      },
    );

    setGuithubUsername('');
    setTechs('');
  }

  return (
    <form onSubmit={handleSubmit}>
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
  );
}

export default DevForm;
