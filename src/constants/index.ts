import { ToothData } from '../types';

export const CONDITION_COLORS = {
  caries: '#ff4444',
  filling: '#4444ff',
  crown: '#ffaa00',
  extraction: '#888888',
  implant: '#00ff44',
  root_canal: '#ff00ff',
  bridge: '#00ffff'
} as const;

export const DEFAULT_TEETH: ToothData[] = [
  // Quadrant 1 (Upper Right)
  { number: 18, name: 'Third Molar', type: 'molar', quadrant: 1, conditions: [] },
  { number: 17, name: 'Second Molar', type: 'molar', quadrant: 1, conditions: [] },
  { number: 16, name: 'First Molar', type: 'molar', quadrant: 1, conditions: [] },
  { number: 15, name: 'Second Premolar', type: 'premolar', quadrant: 1, conditions: [] },
  { number: 14, name: 'First Premolar', type: 'premolar', quadrant: 1, conditions: [] },
  { number: 13, name: 'Canine', type: 'canine', quadrant: 1, conditions: [] },
  { number: 12, name: 'Lateral Incisor', type: 'incisor', quadrant: 1, conditions: [] },
  { number: 11, name: 'Central Incisor', type: 'incisor', quadrant: 1, conditions: [] },
  
  // Quadrant 2 (Upper Left)
  { number: 21, name: 'Central Incisor', type: 'incisor', quadrant: 2, conditions: [] },
  { number: 22, name: 'Lateral Incisor', type: 'incisor', quadrant: 2, conditions: [] },
  { number: 23, name: 'Canine', type: 'canine', quadrant: 2, conditions: [] },
  { number: 24, name: 'First Premolar', type: 'premolar', quadrant: 2, conditions: [] },
  { number: 25, name: 'Second Premolar', type: 'premolar', quadrant: 2, conditions: [] },
  { number: 26, name: 'First Molar', type: 'molar', quadrant: 2, conditions: [] },
  { number: 27, name: 'Second Molar', type: 'molar', quadrant: 2, conditions: [] },
  { number: 28, name: 'Third Molar', type: 'molar', quadrant: 2, conditions: [] },
  
  // Quadrant 3 (Lower Left)
  { number: 38, name: 'Third Molar', type: 'molar', quadrant: 3, conditions: [] },
  { number: 37, name: 'Second Molar', type: 'molar', quadrant: 3, conditions: [] },
  { number: 36, name: 'First Molar', type: 'molar', quadrant: 3, conditions: [] },
  { number: 35, name: 'Second Premolar', type: 'premolar', quadrant: 3, conditions: [] },
  { number: 34, name: 'First Premolar', type: 'premolar', quadrant: 3, conditions: [] },
  { number: 33, name: 'Canine', type: 'canine', quadrant: 3, conditions: [] },
  { number: 32, name: 'Lateral Incisor', type: 'incisor', quadrant: 3, conditions: [] },
  { number: 31, name: 'Central Incisor', type: 'incisor', quadrant: 3, conditions: [] },
  
  // Quadrant 4 (Lower Right)
  { number: 41, name: 'Central Incisor', type: 'incisor', quadrant: 4, conditions: [] },
  { number: 42, name: 'Lateral Incisor', type: 'incisor', quadrant: 4, conditions: [] },
  { number: 43, name: 'Canine', type: 'canine', quadrant: 4, conditions: [] },
  { number: 44, name: 'First Premolar', type: 'premolar', quadrant: 4, conditions: [] },
  { number: 45, name: 'Second Premolar', type: 'premolar', quadrant: 4, conditions: [] },
  { number: 46, name: 'First Molar', type: 'molar', quadrant: 4, conditions: [] },
  { number: 47, name: 'Second Molar', type: 'molar', quadrant: 4, conditions: [] },
  { number: 48, name: 'Third Molar', type: 'molar', quadrant: 4, conditions: [] },
];

export const THEME_COLORS = {
  light: {
    background: '#f5f5f5',
    panel: 'rgba(255, 255, 255, 0.9)',
    text: '#1f2937',
    textSecondary: '#6b7280'
  },
  dark: {
    background: '#1a1a1a',
    panel: 'rgba(0, 0, 0, 0.9)',
    text: '#f9fafb',
    textSecondary: '#d1d5db'
  }
} as const;
