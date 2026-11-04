export type Mark = 'X' | 'O';
export type Board = readonly (Mark | null)[];
export interface Game { readonly board: Board };

export function newGame(): Game {
    const board: Board = new Array(9).fill(null);
    return { board };
}
