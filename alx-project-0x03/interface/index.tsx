// Interface from pages/index.tsx
export interface HomeProps {
  title: string;
  description: string;
}

// Interface from components/common/Button.tsx
export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

// Interface from components/layouts/Layout.tsx
export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

