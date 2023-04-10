import React, { useContext } from "react";
import { CardContext } from "../context/CardsContext";

export const CardYugioh = ({ index, nameCard, img, ...others }) => {
  // se incluye el contexto de las cartas para utilizarla
  const { cards, setCards } = useContext(CardContext);

  return (
    <div
      className="card col-md-auto"
      style={{ width: "18rem", margin: "20px" }}
    >
      <img src={img} />

      <div className="card-body">

        <h5 className="card-title">{nameCard}</h5>
        <b>[{others.race}]</b>
        <p className="card-text">{others.typeCard}</p>
        <b>
          ATK/{others.atk} DEF/{others.def}
        </b>


        <div>
          {/* al presionar el boton de eliminar, lo que se setea es un nuevo array sin el elemento que coincida con el index, el cual corresponde a cada elemento de la lista de cartas */}
          <button
            onClick={() => {
              setCards(() => cards.toSpliced(index, 1));
            }}
            className="btn btn-outline-danger"
          >
            Eliminar de la lista
          </button>
        </div>
      </div>
    </div>
  );
};
