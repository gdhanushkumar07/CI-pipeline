import { describe, it, expect } from "vitest";
import { add, subtract } from "./utils";

describe("Math utilities", () => {
  it("should add two numbers correctly", () => {
    expect(add(2, 3)).toBe(10);
  });

  it("should subtract two numbers correctly", () => {
    expect(subtract(5, 2)).toBe(3);
  });
});
