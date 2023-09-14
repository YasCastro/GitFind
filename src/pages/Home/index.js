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
        <div className="userinfo">
          <img src="https://avatars.githubusercontent.com/u/57716678?v=4" alt="Imagem de perfil" className="profile" />
          <div>
            <h3>Nome do usuário</h3>
            <p>Descrição</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
