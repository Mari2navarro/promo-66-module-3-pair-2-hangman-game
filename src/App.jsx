import './styles/App.scss';
import { useState } from 'react';

function App() {
  const [word, setWord] = useState('');
  const [splitedWord, setSplitedWord] = useState([]);
  const [lastLetter, setLastLetter] = useState('');
  const [failedLetters, setFailedLetters] = useState('');
  const [numberOfErrors, setNumberOfErrors] = useState(0);

  function handleClickErrors() {
    if (numberOfErrors <= 12) {
      setNumberOfErrors(numberOfErrors + 1);
    } else {
      return;
    }
    console.log(numberOfErrors);
  }

  function handleLetterChange(ev) {
    const typedLetter = ev.target.value;

    // Reemplaza cualquier cosa que NO dsea una letra o espacio por un string vacío
    // ^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]+$
    const filteredValue = typedLetter.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]/g, '');

    // Solo actualizamos el estado con el valor limpio
    setLastLetter(filteredValue);
  }

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              <li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li>
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              value={lastLetter}
              onChange={handleLetterChange}
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
            />
          </form>
          <p>{!lastLetter ? 'Escribe una letra permitida' : ''}</p>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
          <button onClick={handleClickErrors}>Incrementar</button>
        </section>
      </main>
    </div>
  );
}

export default App;
