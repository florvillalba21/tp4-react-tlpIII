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

  if (cards.length > 0) {
    return (
      <>
        {/* se provee las cards y el setCards al componente CardYugioh para setear el estado desde alli */}
        <CardContext.Provider value={{ cards, setCards }}>
          <CardYugioh />
        </CardContext.Provider>
      </>
    );
  }
  return (
    <>
      {/* boton principal que ejecuta la funcion getCards */}
      <div id="btnGet" className="d-grid gap-2">
        <button id="btn" onClick={getCards}>
          Traer cartas
        </button>
      </div>
    </>
  );
}

export default App;
