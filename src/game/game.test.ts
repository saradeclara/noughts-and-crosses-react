import { describe, expect, test } from "vitest";
import { newGame } from "./game";

describe("newGame()", () => {
	test("the board has 9 cells and every entry is null", () => {
		const { board } = newGame();
		expect(board.length).toBe(9);
		expect(board).toEqual(Array(9).fill(null));
	});
});
