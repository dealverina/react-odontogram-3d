import "@testing-library/jest-dom";

// Mock Three.js for testing
jest.mock("three", () => ({
  Scene: jest.fn(() => ({
    add: jest.fn(),
    background: {},
  })),
  PerspectiveCamera: jest.fn(() => ({
    position: { set: jest.fn() },
    aspect: 1,
    updateProjectionMatrix: jest.fn(),
  })),
  WebGLRenderer: jest.fn(() => ({
    setSize: jest.fn(),
    render: jest.fn(),
    domElement: document.createElement("canvas"),
    shadowMap: { enabled: false, type: null },
    dispose: jest.fn(),
  })),
  AmbientLight: jest.fn(),
  DirectionalLight: jest.fn(() => ({
    position: { set: jest.fn() },
    castShadow: false,
  })),
  BoxGeometry: jest.fn(),
  ConeGeometry: jest.fn(),
  CylinderGeometry: jest.fn(),
  MeshPhongMaterial: jest.fn(),
  Color: jest.fn(),
  PCFSoftShadowMap: "PCFSoftShadowMap",
  Spherical: jest.fn(() => ({
    setFromVector3: jest.fn(),
    theta: 0,
    phi: 0,
  })),
}));
