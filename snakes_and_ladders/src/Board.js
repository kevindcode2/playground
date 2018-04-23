import React from 'react';
import Square from './Square';

const MAX_ROW = 10;
const MAX_COL = 10;
let sqr_number = 100;

class Board extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    let row = [];
    for (let i = MAX_ROW; i > 0; i--) {
      let col = [];
      for (let j = 0; j < MAX_COL; j++) {
        col.push(
          <td key={j + 1} className="col" id={sqr_number}>
            <Square 
              sqr_number={sqr_number}
            />
          </td>
        );
        if (j === 9) {
          sqr_number -= 10;
        } else {
          (i % 2 === 0) ? sqr_number-- : sqr_number++;
        }
      }
      row.push(
        <tr key={i + 1} className={`row row-${(i+1)-1}`}>
          {col}
        </tr>
      );
    }

    return (
      <table className="board">
        <tbody>
          {row}
        </tbody>
      </table>
    );
  };
};

export default Board;
