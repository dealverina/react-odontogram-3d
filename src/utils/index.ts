import { ToothData } from '../types';

export const getToothPosition = (
  tooth: ToothData, 
  sizeMultiplier: number
): [number, number, number] => {
  const spacing = 1.5 * sizeMultiplier;
  
  const quadrantPositions = {
    1: { x: 1, y: 1 },   // Upper right
    2: { x: -1, y: 1 },  // Upper left
    3: { x: -1, y: -1 }, // Lower left
    4: { x: 1, y: -1 }   // Lower right
  };

  const quadrant = quadrantPositions[tooth.quadrant];
  const toothIndex = tooth.number % 10 - 1; // 0-7 for each quadrant
  
  const x = quadrant.x * (toothIndex * spacing + 1);
  const y = quadrant.y * 2;
  const z = 0;

  return [x, y, z];
};

export const getToothGeometry = (
  toothType: ToothData['type'], 
  size: number
): THREE.BufferGeometry => {
  const THREE = require('three');
  
  switch (toothType) {
    case 'incisor':
      return new THREE.BoxGeometry(size * 0.6, size * 1.2, size * 0.4);
    case 'canine':
      return new THREE.ConeGeometry(size * 0.3, size * 1.4, 8);
    case 'premolar':
      return new THREE.CylinderGeometry(size * 0.4, size * 0.4, size * 0.8, 8);
    case 'molar':
      return new THREE.BoxGeometry(size * 0.8, size * 0.8, size * 0.6);
    default:
      return new THREE.BoxGeometry(size * 0.6, size * 1.0, size * 0.4);
  }
};

export const getSizeMultiplier = (size: 'small' | 'medium' | 'large'): number => {
  switch (size) {
    case 'small':
      return 0.7;
    case 'large':
      return 1.3;
    default:
      return 1.0;
  }
};