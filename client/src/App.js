import React, { useEffect, useState } from 'react';

function App() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    // Fetch available AI models
    fetch('/api/models')
      .then(response => response.json())
      .then(data => setModels(data))
      .catch(error => console.error(error));
  }, []);

  const deployModel = (modelName, version) => {
    // Deploy an AI model
    fetch(`/api/models/${modelName}/deploy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ version })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  const invokeModel = (modelName, data) => {
    // Invoke an AI model
    fetch(`/api/models/${modelName}/invoke`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div className="App">
      <h1>AI Nexus Dashboard</h1>
      <h2>Available AI Models:</h2>
      <ul>
        {models.map(model => (
          <li key={model.name}>
            {model.name} - {model.version}
          </li>
        ))}
      </ul>
      <button onClick={() => deployModel('image-classification', 'v1.0.0')}>
        Deploy Model
      </button>
      <button onClick={() => invokeModel('image-classification', imageData)}>
        Invoke Model
      </button>
    </div>
  );
}

export default App;

