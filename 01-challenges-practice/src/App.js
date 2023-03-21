import "./App.css";
import "./styles.css";
import image01 from "./assets/images/rey_atanagildo.png";
import image02 from "./assets/images/rey_ataulfo.png";
import image03 from "./assets/images/rey_ervigio.png";
import image00 from "./assets/images/rey_incognito.png";

function App() {
  let usuarios = [
    {
      nombre: "Rey Atanagildo",
      urlImage: image01,
    },
    {
      nombre: "Rey Ataulfo",
      urlImage: image02,
    },
    {
      nombre: "Rey Ervigio",
      urlImage: image03,
    },
  ];

  const cambiarTexto = (e) => {
    if (e.target.innerHTML === "Visto") {
      e.target.style.color = "transparent";
      return;
    }
    e.target.innerHTML = "Visto";
    e.target.style.color = "black";
  };

  const cambiarImg = (e) => {
    if (e.target.parentNode.style.backgroundColor === "transparent") {
      e.target.style.opacity = 0;
      return;
    }
    console.log(e);
    e.target.src = image00;
    e.target.parentNode.style.backgroundColor = "transparent";
  };

  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <img
            onClick={cambiarImg}
            className="profile"
            src={usuarios[0].urlImage}
            alt=""
          />
          <h3 onClick={cambiarTexto}>{usuarios[0].nombre}</h3>
        </div>
        <div className="card">
          <img
            onClick={cambiarImg}
            className="profile"
            src={usuarios[1].urlImage}
            alt=""
          />
          <h3 onClick={cambiarTexto}>{usuarios[1].nombre}</h3>
        </div>
        <div className="card">
          <img
            onClick={cambiarImg}
            className="profile"
            src={usuarios[2].urlImage}
            alt=""
          />
          <h3 onClick={cambiarTexto}>{usuarios[2].nombre}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
