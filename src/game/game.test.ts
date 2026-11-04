import { describe, expect, test } from "vitest";
import { currentMark, newGame } from "./game";

describe("newGame()", () => {
	test("the board has 9 cells and every entry is null", () => {
		const { board } = newGame();
		expect(board).toEqual(Array(9).fill(null));
	});
});

describe("currentMark()", () => {
	test("current mark at the beginning of a game is X", () => {
		const result = currentMark(newGame());
		expect(result).toBe("X");
	});
});
