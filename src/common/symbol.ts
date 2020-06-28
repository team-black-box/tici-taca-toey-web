export const EMPTY_CELL = "-";

interface SymbolDescriptors {
  symbol: string;
  color: string;
}

// https://tailwindcss.com/docs/customizing-colors#default-color-palette

export const GAME_SYMBOL: SymbolDescriptors[] = [
  { symbol: "X", color: "text-indigo-500" },
  { symbol: "O", color: "text-teal-500" },
  { symbol: "Y", color: "text-orange-500" },
  { symbol: "Z", color: "text-yellow-500" },
  { symbol: "W", color: "text-green-500" },
  { symbol: "T", color: "text-gray-500" },
  { symbol: "E", color: "text-blue-500" },
  { symbol: "H", color: "text-red-500" },
  { symbol: "M", color: "text-purple-500" },
  { symbol: "I", color: "text-pink-500" },
];

export const getSymbol = (
  playerId: string,
  players: string[]
): SymbolDescriptors => {
  return playerId === EMPTY_CELL
    ? { symbol: "", color: "text-black" }
    : GAME_SYMBOL[players.indexOf(playerId) % 10];
};
