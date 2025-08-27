// src/utils/iconMap.ts
import { ReactNode } from 'react';

import Icon1 from "../assets/icon.svg?react";
import Icon2 from "../assets/icon.svg?react";
import Icon3 from "../assets/icon.svg?react";
import Icon4 from "../assets/icon.svg?react";

// تعريف نوع للـ icon map
export type IconKey = 'feature1' | 'feature2' | 'feature3' | 'feature4';

export const iconMap: Record<IconKey, React.FC<React.SVGProps<SVGSVGElement>>> = {
  feature1: Icon1,
  feature2: Icon2,
  feature3: Icon3,
  feature4: Icon4,
};