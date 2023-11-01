import { useState } from 'react';
import Card from './Card';

const PetForm = () => {
  const [petInfo, setPetInfo] = useState({
    name: '',
    description: ''
  });
  const [showForm, setShowForm] = useState(true);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameRegex = /^[A-Za-z]{3,}( [A-Za-z]+)?/;

    if (petInfo.description.length >= 6 && petInfo.name.trim() !== '' && nameRegex.test(petInfo.name)) {
      setShowForm(false);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {showForm && (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label className="form-label">Nombre de tu mascota</label>
            <input
              type="text"
              className="form-input"
              value={petInfo.name}
              onChange={(event) => setPetInfo({ ...petInfo, name: event.target.value })}
              placeholder="Agrega el nombre de tu mascota"
            />
            <label className="form-label">Descripción de tu mascota</label>
            <input
              type="text"
              className="form-input"
              value={petInfo.description}
              onChange={(event) => setPetInfo({ ...petInfo, description: event.target.value })}
              placeholder="Agrega la descripción de tu mascota"
            />
            <button className="form-button">Enviar</button>
          </form>
        </div>
      )}
      {!showForm && <Card petInfo={petInfo} />}
      {error && <h5 className="error-message">Verifique bien los datos antes de enviar</h5>}
    </div>
  );
};

export default PetForm;
