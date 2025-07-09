import React from "react";

interface ControlPanelProps {
  interactive: boolean;
  theme: "light" | "dark";
  themeColors: {
    panel: string;
    text: string;
    textSecondary: string;
  };
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  interactive,
  theme,
  themeColors,
}) => {
  return (
    <div
      className="absolute top-4 left-4 rounded-lg p-3 shadow-md backdrop-blur-sm"
      style={{
        backgroundColor: themeColors.panel,
        color: themeColors.text,
      }}
    >
      <h3 className="font-semibold text-sm mb-2">3D Odontogram</h3>
      <div className="text-xs" style={{ color: themeColors.textSecondary }}>
        {interactive && <p>Click and drag to rotate • Scroll to zoom</p>}
      </div>
    </div>
  );
};

export default ControlPanel;
