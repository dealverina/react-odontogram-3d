import React, { useRef, useMemo, useEffect } from "react";
import { Mesh, MeshPhongMaterial } from "three";
import { Canvas } from "@react-three/fiber";
import { Tooth3DProps } from "../types";
import { CONDITION_COLORS } from "../constants";
import { getToothGeometry } from "../utils";

const Tooth3D: React.FC<Tooth3DProps> = ({
  tooth,
  position,
  onClick,
  onHover,
  isHovered,
  size,
}) => {
  const meshRef = useRef<Mesh>(null);

  const geometry = useMemo(
    () => getToothGeometry(tooth.type, size),
    [tooth.type, size]
  );

  const baseColor = useMemo(() => {
    if (tooth.conditions.length > 0) {
      const primaryCondition = tooth.conditions[0];
      return CONDITION_COLORS[primaryCondition.type] || "#ffffff";
    }
    return "#ffffff";
  }, [tooth.conditions]);

  const material = useMemo(() => {
    let baseColor = "#ffffff";

    if (tooth.conditions.length > 0) {
      const primaryCondition = tooth.conditions[0];
      baseColor = CONDITION_COLORS[primaryCondition.type] || "#ffffff";
    }

    return new MeshPhongMaterial({
      color: baseColor,
      shininess: 30,
      transparent: true,
      opacity: isHovered ? 0.8 : 1.0,
    });
  }, [tooth.conditions, isHovered]);

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.position.set(...position);
      meshRef.current.scale.setScalar(isHovered ? 1.1 : 1.0);
    }
  }, [position, isHovered]);

  return (
    <Canvas>
      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerEnter={() => onHover(true)}
        onPointerLeave={() => onHover(false)}
      >
        <bufferGeometry {...geometry} />
        <meshPhongMaterial
          {...material}
          color={baseColor}
          shininess={30}
          transparent={true}
          opacity={isHovered ? 0.8 : 1.0}
        />
      </mesh>
    </Canvas>
  );
};

export default Tooth3D;
