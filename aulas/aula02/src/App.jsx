import './App.css';
import logo from './assets/learn.svg';

// ALT + SHIFT + F = FORMATAÇÃO AUTOMÁTICA DO CÓDIGO

function App() {
  // JSX = JS + XML
  return (
    <main>
      {/* chaves no JSX aceita código JS */}
      <img src={logo} alt="Logotipo da aplicação" />
      <h1>Aluno Online</h1>
      <label htmlFor="matricula">Matricula</label>
      <p id="matriculaErro"></p>
      <input type="number" id="matricula" name="matricula" />
      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha" name="senha" />
      <p id="senhaErro"></p>
      <button type="submit">Entrar</button>
    </main>
  );
}


export default App;