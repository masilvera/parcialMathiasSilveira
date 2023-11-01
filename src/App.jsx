import PetForm from './Components/PetForm';
import './styles/styles.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="form-title">Formulario de mascotas</h1> 
      <div className="center-content"> 
        <PetForm />
      </div>
    </div>
  );
}

export default App;
