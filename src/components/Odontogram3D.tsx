import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { OdontogramProps, ToothData } from "../types";
import { DEFAULT_TEETH, THEME_COLORS } from "../constants";
import { getToothPosition, getSizeMultiplier } from "../utils";
import Tooth3D from "./Tooth3D";
import ToothInfoPanel from "./ToothInfoPanel";
import ControlPanel from "./ControlPanel";
import Legend from "./Legend";

const Odontogram3D: React.FC<OdontogramProps> = ({
  teeth = DEFAULT_TEETH,
  onToothClick,
  onToothHover,
  showLabels = true,
  interactive = true,
  theme = "light",
  size = "medium",
  className = "",
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const controlsRef = useRef<any>();
  const [hoveredTooth, setHoveredTooth] = useState<ToothData | null>(null);
  const [selectedTooth, setSelectedTooth] = useState<ToothData | null>(null);
  const frameRef = useRef<number>();

  const sizeMultiplier = getSizeMultiplier(size);
  const themeColors = THEME_COLORS[theme];

  // Initialize Three.js scene
  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(themeColors.background);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 15);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-10, -10, -5);
    scene.add(fillLight);

    // Controls (if interactive)
    if (interactive) {
      // Simple orbit controls implementation
      let isDragging = false;
      let previousMousePosition = { x: 0, y: 0 };

      const handleMouseDown = (event: MouseEvent) => {
        isDragging = true;
        previousMousePosition = { x: event.clientX, y: event.clientY };
      };

      const handleMouseMove = (event: MouseEvent) => {
        if (!isDragging) return;

        const deltaMove = {
          x: event.clientX - previousMousePosition.x,
          y: event.clientY - previousMousePosition.y,
        };

        // Rotate camera around scene
        const spherical = new THREE.Spherical();
        spherical.setFromVector3(camera.position);
        spherical.theta -= deltaMove.x * 0.01;
        spherical.phi += deltaMove.y * 0.01;
        spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, spherical.phi));

        camera.position.setFromSpherical(spherical);
        camera.lookAt(0, 0, 0);

        previousMousePosition = { x: event.clientX, y: event.clientY };
      };

      const handleMouseUp = () => {
        isDragging = false;
      };

      const handleWheel = (event: WheelEvent) => {
        event.preventDefault();
        const scaleFactor = event.deltaY > 0 ? 1.1 : 0.9;
        camera.position.multiplyScalar(scaleFactor);
        camera.position.clampLength(5, 50);
      };

      renderer.domElement.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      renderer.domElement.addEventListener("wheel", handleWheel);

      controlsRef.current = {
        dispose: () => {
          renderer.domElement.removeEventListener("mousedown", handleMouseDown);
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
          renderer.domElement.removeEventListener("wheel", handleWheel);
        },
      };
    }

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (mountRef.current && cameraRef.current && rendererRef.current) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(width, height);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("resize", handleResize);
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [theme, interactive, themeColors.background]);

  // Handle tooth interactions
  const handleToothClick = (tooth: ToothData) => {
    if (!interactive) return;

    setSelectedTooth(tooth);
    onToothClick?.(tooth);
  };

  const handleToothHover = (tooth: ToothData | null) => {
    if (!interactive) return;

    setHoveredTooth(tooth);
    onToothHover?.(tooth);
  };

  // Render teeth
  const renderTeeth = () => {
    if (!sceneRef.current) return null;

    return teeth.map((tooth) => (
      <Tooth3D
        key={tooth.number}
        tooth={tooth}
        position={getToothPosition(tooth, sizeMultiplier)}
        onClick={() => handleToothClick(tooth)}
        onHover={(hover) => handleToothHover(hover ? tooth : null)}
        isHovered={hoveredTooth?.number === tooth.number}
        size={sizeMultiplier}
      />
    ));
  };

  return (
    <div className={`odontogram-container relative w-full h-full ${className}`}>
      <div
        ref={mountRef}
        className="w-full h-96 rounded-lg shadow-lg"
        style={{ minHeight: "400px" }}
      />

      <ControlPanel
        interactive={interactive}
        theme={theme}
        themeColors={themeColors}
      />

      <ToothInfoPanel
        tooth={hoveredTooth || selectedTooth}
        theme={theme}
        themeColors={themeColors}
      />

      <Legend theme={theme} themeColors={themeColors} />
    </div>
  );
};

export default Odontogram3D;
