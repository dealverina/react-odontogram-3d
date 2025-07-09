import React from "react";
import { CONDITION_COLORS } from "../constants";

interface LegendProps {
  theme: "light" | "dark";
  themeColors: any;
}

const Legend: React.FC<LegendProps> = ({ theme, themeColors }) => {
  return (
    <div
      className="absolute bottom-4 left-4 rounded-lg p-3 shadow-md backdrop-blur-sm"
      style={{
        backgroundColor: themeColors.panel,
        color: themeColors.text,
      }}
    >
      <h4 className="font-semibold text-sm mb-2">Legend</h4>
      <div className="grid grid-cols-2 gap-2 text-xs">
        {Object.entries(CONDITION_COLORS).map(([condition, color]) => (
          <div key={condition} className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span
              className="capitalize"
              style={{ color: themeColors.textSecondary }}
            >
              {condition.replace("_", " ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;
