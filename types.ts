import { ReactNode } from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  className?: string;
  children?: ReactNode;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features?: string[];
  isCustom?: boolean;
}

export interface Stat {
  value: string;
  label: string;
}
