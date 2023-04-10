import { useEffect, useState } from "react";
import { CardYugioh } from "./components/CardYugioh";
import { CardContext } from "./context/CardsContext";

function App() {
  //donde almacenaremos los datos de las cartas de Yugioh
  const [cards, setCards] = useState([]);


  //funcion que se ejecuta al clickear el boton principal, este realiza la peticion a la api
  const getCards = async () => {
    const res = await fetch(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php?type=%27Normal%20Monster%27"
    );
    const resJS = await res.json();

    //se setea el valor de cards con los datos de los primeros 10 elementos del array de la res
    setCards(resJS.data.slice(0, 10));
  };

  return (
    <div className="App">
      {/* boton principal que ejecuta la funcion getCards */}
      <div id="btnGet">
        <button id="btn" onClick={getCards}>Traer cartas</button>
      </div>

      <div className="card-group justify-content-md-center">
        {/* se recorre la lista de cartas con el formato del componente CardYugioh */}
        {cards.map((value, index) => {
          return (
            <div key={index}>
              {/* se provee las cards y el setCards al componente CardYugioh para setear el estado desde alli */}
              <CardContext.Provider value={{ cards, setCards }}>

                <CardYugioh
                  nameCard={value.name}
                  race={value.race}
                  atk={value.atk}
                  def={value.def}
                  img={value.card_images[0].image_url}
                  typeCard={value.type}
                  descCard={value.desc}
                  index={index}
                />

              </CardContext.Provider>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
