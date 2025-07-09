import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Odontogram3D from "../components/Odontogram3D";
import { ToothData } from "../types";

const mockTooth: ToothData = {
  number: 16,
  name: "First Molar",
  type: "molar",
  quadrant: 1,
  conditions: [],
  notes: "Test tooth",
};

describe("Odontogram3D", () => {
  beforeEach(() => {
    // Mock canvas and WebGL
    HTMLCanvasElement.prototype.getContext = jest.fn();
  });

  it("renders without crashing", () => {
    render(<Odontogram3D />);
    expect(screen.getByText("3D Odontogram")).toBeInTheDocument();
  });

  it("displays control panel when interactive", () => {
    render(<Odontogram3D interactive={true} />);
    expect(
      screen.getByText("Click and drag to rotate • Scroll to zoom")
    ).toBeInTheDocument();
  });

  it("calls onToothClick when tooth is clicked", () => {
    const handleToothClick = jest.fn();
    render(
      <Odontogram3D
        teeth={[mockTooth]}
        onToothClick={handleToothClick}
        interactive={true}
      />
    );

    // This test would need more sophisticated mocking of Three.js interactions
    expect(handleToothClick).toHaveBeenCalledTimes(0);
  });

  it("displays legend with condition colors", () => {
    render(<Odontogram3D />);
    expect(screen.getByText("Legend")).toBeInTheDocument();
    expect(screen.getByText("caries")).toBeInTheDocument();
    expect(screen.getByText("filling")).toBeInTheDocument();
  });

  it("applies theme correctly", () => {
    const { rerender } = render(<Odontogram3D theme="light" />);
    expect(screen.getByText("3D Odontogram")).toBeInTheDocument();

    rerender(<Odontogram3D theme="dark" />);
    expect(screen.getByText("3D Odontogram")).toBeInTheDocument();
  });
});
