import React, { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
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
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(
    () => getToothGeometry(tooth.type, size),
    [tooth.type, size]
  );

  const material = useMemo(() => {
    let baseColor = "#ffffff";

    if (tooth.conditions.length > 0) {
      const primaryCondition = tooth.conditions[0];
      baseColor = CONDITION_COLORS[primaryCondition.type] || "#ffffff";
    }

    return new THREE.MeshPhongMaterial({
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
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={material}
      onClick={onClick}
      onPointerEnter={() => onHover(true)}
      onPointerLeave={() => onHover(false)}
    />
  );
};

export default Tooth3D;
