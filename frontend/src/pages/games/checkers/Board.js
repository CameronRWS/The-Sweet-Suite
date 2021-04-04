import React from "react";
import "../../GameSuite.css";
import "./Checkers.css";

import redpiece from "../../../pages/images/red-checkers-piece.png";
import blackpiece from "../../../pages/images/black-checker-piece.png";

function Square(props) {
  const squareClass = props["squareClass"];
  const onClick = props["onClick"];
  const id = props["id"];
  const img = props["img"];
  const alt = "piece";

  if (img) {
    return (
      <div>
        <button className={squareClass} onClick={onClick} id={id}>
          <img style={{ width: 45, height: 45 }} src={img} alt={alt} />
        </button>
      </div>
    );
  } else {
    return (
      <button className={squareClass} onClick={onClick} id={id}>
        {id}
      </button>
    );
  }
}

// code list of props here, find out how to specify props at bottom
const Board = (props) => {
  const array1 = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const array2 = ["8", "7", "6", "5", "4", "3", "2", "1"];
  let ids = array2.map((row) => array1.map((col) => col.concat(row)));

  let board = ids.map((row) =>
    row.map((id) => {
      const col = array1.indexOf(id.charAt(0));
      const row = array2.indexOf(id.charAt(1));

      const colorClass =
        (col % 2 === 0 && row % 2 === 0) || (col % 2 === 1 && row % 2 === 1)
          ? "whiteSquare"
          : "blackSquare";
      if (row === 3 || row === 4 || colorClass ==="whiteSquare") {
        return (
          <Square
            squareClass={colorClass}
            onClick={(id) => console.log(id)}
            id={id}
          ></Square>
        );
      }

      const pieceColor = (row>4) ? redpiece : blackpiece;

      return (
        <Square
        squareClass={colorClass}
        onClick={(id) => console.log(id)}
        id={id}
        img={pieceColor}
      ></Square>
      )
    })
  );

  return (
    <div className="Container">
      {board}
    </div>
  );
};

export default Board;
