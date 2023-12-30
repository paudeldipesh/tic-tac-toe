import "./ComponentsGlobalStyle.sass";

type BoardProps = {
  board: Array<Array<string | null>>;
  handleClick: (row: number, col: number) => void;
};

export default function Board({ board, handleClick }: BoardProps) {
  return (
    <div className="board" style={{ display: "flex", columnGap: "10px" }}>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="boardRow">
          {row.map((cell, cellIndex) => (
            <button
              key={cellIndex}
              className={`cell ${cell ? `cell_${cell.toLowerCase()}` : ""}`}
              onClick={() => handleClick(rowIndex, cellIndex)}
            >
              {cell}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
