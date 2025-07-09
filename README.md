# React Odontogram 3D

[![npm version](https://badge.fury.io/js/react-odontogram-3d.svg)](https://badge.fury.io/js/react-odontogram-3d)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

Interactive 3D dental chart component for React applications with full TypeScript support. Perfect for dental software, educational tools, and patient management systems.

## Features

- 🦷 **Complete Adult Dentition**: All 32 teeth with proper anatomical positioning
- 🎨 **3D Visualization**: Realistic tooth geometry using Three.js
- 📊 **Condition Tracking**: Support for multiple dental conditions (caries, fillings, crowns, etc.)
- 🖱️ **Interactive Controls**: Click, hover, and zoom interactions
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎯 **TypeScript Support**: Full type definitions included
- 🎨 **Customizable**: Themes, sizes, and styling options
- ⚡ **Performance Optimized**: Efficient rendering and animations

## Installation

```bash
npm install react-odontogram-3d
# or
yarn add react-odontogram-3d
```

## Quick Start

```tsx
import React from 'react';
import { Odontogram3D } from 'react-odontogram-3d';

function App() {
  const handleToothClick = (tooth) => {
    console.log('Tooth clicked:', tooth);
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Odontogram3D
        onToothClick={handleToothClick}
        interactive={true}
        theme="light"
        size="medium"
      />
    </div>
  );
}
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `teeth` | `ToothData[]` | `defaultTeeth` | Array of tooth data |
| `onToothClick` | `(tooth: ToothData) => void` | `undefined` | Callback when tooth is clicked |
| `onToothHover` | `(tooth: ToothData \| null) => void` | `undefined` | Callback when tooth is hovered |
| `showLabels` | `boolean` | `true` | Show tooth labels |
| `interactive` | `boolean` | `true` | Enable interactions |
| `theme` | `'light' \| 'dark'` | `'light'` | Color theme |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Component size |

### Types

```typescript
interface ToothData {
  number: number;
  name: string;
  type: 'incisor' | 'canine' | 'premolar' | 'molar';
  quadrant: 1 | 2 | 3 | 4;
  conditions: ToothCondition[];
  notes?: string;
}

interface ToothCondition {
  id: string;
  type: 'caries' | 'filling' | 'crown' | 'extraction' | 'implant' | 'root_canal' | 'bridge';
  surface?: 'occlusal' | 'buccal' | 'lingual' | 'mesial' | 'distal' | 'incisal';
  color: string;
  description?: string;
}
```

## Advanced Usage

### Custom Tooth Data

```tsx
import { Odontogram3D, ToothData } from 'react-odontogram-3d';

const customTeeth: ToothData[] = [
  {
    number: 16,
    name: 'First Molar',
    type: 'molar',
    quadrant: 1,
    conditions: [
      {
        id: '1',
        type: 'caries',
        surface: 'occlusal',
        color: '#ff4444',
        description: 'Small cavity on occlusal surface'
      }
    ],
    notes: 'Patient reports sensitivity'
  },
  // ... more teeth
];

function MyComponent() {
  return (
    <Odontogram3D
      teeth={customTeeth}
      onToothClick={(tooth) => {
        // Handle tooth selection
        console.log('Selected tooth:', tooth);
      }}
    />
  );
}
```

### Styling

The component uses Tailwind CSS for styling. You can customize the appearance by:

1. **Theme**: Use `theme` prop for light/dark modes
2. **Size**: Use `size` prop for different component sizes
3. **CSS Classes**: Override default styles with custom CSS

```tsx
<Odontogram3D
  theme="dark"
  size="large"
  className="custom-odontogram"
/>
```

## Development

### Setup

```bash
git clone https://github.com/yourusername/react-odontogram-3d.git
cd react-odontogram-3d
npm install
```

### Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run test         # Run tests
npm run lint         # Lint code
npm run type-check   # Type checking
```

### Building

```bash
npm run build
```

This creates:
- `dist/index.js` - CommonJS build
- `dist/index.esm.js` - ES modules build
- `dist/index.d.ts` - TypeScript definitions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © [Dea Alverina](https://github.com/dealverina)

## Support

- 📧 Email: dealverina@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/dealverina/react-odontogram-3d/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/dealverina/react-odontogram-3d/discussions)

## Changelog

### 1.0.0
- Initial release
- 3D tooth visualization
- Interactive controls
- TypeScript support
- Responsive design