export interface ToothCondition {
  id: string;
  type:
    | "caries"
    | "filling"
    | "crown"
    | "extraction"
    | "implant"
    | "root_canal"
    | "bridge";
  surface?: "occlusal" | "buccal" | "lingual" | "mesial" | "distal" | "incisal";
  color: string;
  description?: string;
}

export interface ToothData {
  number: number;
  name: string;
  type: "incisor" | "canine" | "premolar" | "molar";
  quadrant: 1 | 2 | 3 | 4;
  conditions: ToothCondition[];
  notes?: string;
}

export interface OdontogramProps {
  teeth?: ToothData[];
  onToothClick?: (tooth: ToothData) => void;
  onToothHover?: (tooth: ToothData | null) => void;
  showLabels?: boolean;
  interactive?: boolean;
  theme?: "light" | "dark";
  size?: "small" | "medium" | "large";
  className?: string;
}

export interface Tooth3DProps {
  tooth: ToothData;
  position: [number, number, number];
  onClick: () => void;
  onHover: (hover: boolean) => void;
  isHovered: boolean;
  size: number;
}
