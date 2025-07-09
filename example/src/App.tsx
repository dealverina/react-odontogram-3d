import { useState } from "react";
import { Odontogram3D, ToothData } from "react-odontogram-3d";
import "./App.css";

const sampleTeeth: ToothData[] = [
  {
    number: 16,
    name: "First Molar",
    type: "molar",
    quadrant: 1,
    conditions: [
      {
        id: "1",
        type: "caries",
        surface: "occlusal",
        color: "#ff4444",
        description: "Small cavity on occlusal surface",
      },
    ],
  },
  {
    number: 26,
    name: "First Molar",
    type: "molar",
    quadrant: 2,
    conditions: [
      {
        id: "2",
        type: "filling",
        surface: "occlusal",
        color: "#4444ff",
        description: "Amalgam filling",
      },
    ],
  },
  {
    number: 36,
    name: "First Molar",
    type: "molar",
    quadrant: 3,
    conditions: [
      {
        id: "3",
        type: "crown",
        color: "#ffaa00",
        description: "Gold crown",
      },
    ],
  },
];

function App() {
  const [selectedTooth, setSelectedTooth] = useState<ToothData | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [size, setSize] = useState<"small" | "medium" | "large">("medium");

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Odontogram 3D Example</h1>

        <div className="controls">
          <label>
            Theme:
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as "light" | "dark")}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>

          <label>
            Size:
            <select
              value={size}
              onChange={(e) =>
                setSize(e.target.value as "small" | "medium" | "large")
              }
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>
        </div>
      </header>

      <main className="App-main">
        <div className="odontogram-wrapper">
          <Odontogram3D
            teeth={sampleTeeth}
            onToothClick={setSelectedTooth}
            theme={theme}
            size={size}
            interactive={true}
          />
        </div>

        {selectedTooth && (
          <div className="tooth-details">
            <h3>Selected Tooth Details</h3>
            <p>
              <strong>Number:</strong> {selectedTooth.number}
            </p>
            <p>
              <strong>Name:</strong> {selectedTooth.name}
            </p>
            <p>
              <strong>Type:</strong> {selectedTooth.type}
            </p>
            <p>
              <strong>Quadrant:</strong> {selectedTooth.quadrant}
            </p>
            {selectedTooth.conditions.length > 0 && (
              <div>
                <strong>Conditions:</strong>
                <ul>
                  {selectedTooth.conditions.map((condition, index) => (
                    <li key={index}>
                      {condition.type}
                      {condition.surface && ` (${condition.surface})`}
                      {condition.description && ` - ${condition.description}`}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
