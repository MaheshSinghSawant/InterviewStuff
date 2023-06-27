import { useEffect, useState } from "react";
import "./styles.css";

/**
 * Use React to make a 4x4 grid where each cell can have a normal, active, or dead state
 * (should be reflected with colors). Clicking a cell will toggle it between normal and active,
 *  and activating a normal cell while another cell is active will make those two cells "fight"
 *  (use random number) and return one to normal and the other to dead.
 * At the end, output the winning cell and all the cells that that cell defeated.
 */

export default function App() {
  const matrix = Array.from({ length: 4 }).map(() =>
    new Array(4).fill("normal")
  );
  const [state, setState] = useState(matrix);
  const [activeCellList, setActiveCellList] = useState([]);

  const handleClick = (row, col) => {
    if (activeCellList.length < 3) {
      let copy = [...state];
      if (copy[row][col] === "normal") {
        copy[row][col] = "active";
      } else if (copy[row][col] === "active") {
        copy[row][col] = "normal";
      }
      setState(copy);
      let copy2 = [...activeCellList, [row, col]];
      setActiveCellList(copy2);
    }
  };

  useEffect(() => {
    if (activeCellList.length === 2) {
      let nextList = [...activeCellList];
      const idx = Math.floor(Math.random() * 2);
      let [lr, lc] = nextList.splice(idx, 1)[0];
      let [wr, wc] = nextList[0];
      console.log(lr, lc, wr, wc);
      let copy = [...state];
      copy[Number(lr)][Number(lc)] = "dead";
      copy[Number(wr)][Number(wc)] = "normal";
      setActiveCellList([]);
      setState(copy);
    }
  }, [activeCellList, state]);

  return (
    <div className="App">
      {matrix.map((row, rowIdx) => (
        <div className="row">
          {row.map((cell, colIdx) => (
            <div
              onClick={() => handleClick(rowIdx, colIdx)}
              className={`cell ${state[rowIdx][colIdx]}`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}

/**
 * .App {
  font-family: sans-serif;
  text-align: center;
}

.row {
  display: flex;
}

.cell {
  width: 30px;
  height: 30px;
  border: 1px solid black;
}

.normal {
  background-color: cyan;
}

.active {
  background-color: darkgreen;
}

.dead {
  background-color: darkred;
}

 */