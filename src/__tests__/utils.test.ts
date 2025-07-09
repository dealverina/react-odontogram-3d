import { getToothPosition, getSizeMultiplier } from "../utils";
import { ToothData } from "../types";

describe("utils", () => {
  describe("getToothPosition", () => {
    it("calculates correct position for quadrant 1 tooth", () => {
      const tooth: ToothData = {
        number: 11,
        name: "Central Incisor",
        type: "incisor",
        quadrant: 1,
        conditions: [],
      };

      const position = getToothPosition(tooth, 1);
      expect(position).toEqual([1, 2, 0]);
    });

    it("calculates correct position for quadrant 2 tooth", () => {
      const tooth: ToothData = {
        number: 21,
        name: "Central Incisor",
        type: "incisor",
        quadrant: 2,
        conditions: [],
      };

      const position = getToothPosition(tooth, 1);
      expect(position).toEqual([-1, 2, 0]);
    });
  });

  describe("getSizeMultiplier", () => {
    it("returns correct multiplier for small size", () => {
      expect(getSizeMultiplier("small")).toBe(0.7);
    });

    it("returns correct multiplier for medium size", () => {
      expect(getSizeMultiplier("medium")).toBe(1.0);
    });

    it("returns correct multiplier for large size", () => {
      expect(getSizeMultiplier("large")).toBe(1.3);
    });
  });
});
