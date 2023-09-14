import { Header } from '../../components/Header';
import background from '../../assets/background.png';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <div className='conteudo'>
        <img src={background} alt="background app" className="background" />
      </div>
      <div className='info'>
        <div>
          <input type="text" name="usuario" placeholder="@username" />
          <button>Buscar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
