export const EMPTY_CELL = "-";

interface SymbolDescriptors {
  symbol: string;
  color: string;
}

// https://tailwindcss.com/docs/customizing-colors#default-color-palette

export const GAME_SYMBOL: SymbolDescriptors[] = [
  { symbol: "X", color: "indigo" },
  { symbol: "O", color: "teal" },
  { symbol: "Y", color: "orange" },
  { symbol: "Z", color: "yellow" },
  { symbol: "W", color: "green" },
  { symbol: "T", color: "gray" },
  { symbol: "E", color: "blue" },
  { symbol: "H", color: "red" },
  { symbol: "M", color: "purple" },
  { symbol: "I", color: "pink" },
];

export const getSymbol = (
  playerId: string,
  players: string[]
): SymbolDescriptors => {
  return playerId === EMPTY_CELL
    ? { symbol: "", color: "text-black" }
    : GAME_SYMBOL[players.indexOf(playerId) % 10];
};
