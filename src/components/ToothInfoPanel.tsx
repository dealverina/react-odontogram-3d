import React from 'react';
import { ToothData } from '../types';

interface ToothInfoPanelProps {
  tooth: ToothData | null;
  theme: 'light' | 'dark';
  themeColors: any;
}

const ToothInfoPanel: React.FC<ToothInfoPanelProps> = ({
  tooth,
  theme,
  themeColors
}) => {
  if (!tooth) return null;

  return (
    <div 
      className="absolute top-4 right-4 rounded-lg p-3 shadow-md max-w-xs backdrop-blur-sm"
      style={{ 
        backgroundColor: themeColors.panel,
        color: themeColors.text 
      }}
    >
      <div className="text-sm">
        <h4 className="font-semibold">Tooth {tooth.number}</h4>
        <p style={{ color: themeColors.textSecondary }} className="capitalize">
          {tooth.name}
        </p>
        <p style={{ color: themeColors.textSecondary }} className="text-xs capitalize">
          {tooth.type}
        </p>
        
        {tooth.conditions.length > 0 && (
          <div className="mt-2">
            <p className="text-xs font-medium" style={{ color: themeColors.text }}>
              Conditions:
            </p>
            <ul className="text-xs mt-1" style={{ color: themeColors.textSecondary }}>
              {tooth.conditions.map((condition, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: condition.color }}
                  />
                  <span className="capitalize">
                    {condition.type.replace('_', ' ')}
                  </span>
                  {condition.surface && (
                    <span className="text-xs opacity-75">
                      ({condition.surface})
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {tooth.notes && (
          <div className="mt-2">
            <p className="text-xs font-medium" style={{ color: themeColors.text }}>
              Notes:
            </p>
            <p className="text-xs mt-1" style={{ color: themeColors.textSecondary }}>
              {tooth.notes}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToothInfoPanel;