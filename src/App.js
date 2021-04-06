import './App.css';

function App() {
  return (
    <div className="App">
    <section className="bienvenida">
    <div className="container">
    <h1>Historias de<br/><span className="bigger">Sampo</span></h1>

    </div>
        </section>

        <section className="historias">
        <div className="container indice">
            <h2>Índice</h2>
            <ul>
            <li><p><span className="yellow">·</span>  <a href="https://historiasdesampo.github.io/el-juicio-de-la-eternidad">El Juicio de la Eternidad</a></p><div className="dotted-line"></div><p>#</p></li>

              <li><p><span className="yellow">·</span> <a href="https://historiasdesampo.github.io/la-travesia">La Travesía</a></p><div className="dotted-line"></div><p>&</p></li>
              <li><p><span className="yellow">·</span> <a href="https://historiasdesampo.github.io/el-templo-divino ">El Templo de Divino</a></p><div className="dotted-line"></div><p>?</p></li>
            </ul>
        </div>

        </section>
    </div>
  );
}

export default App;
