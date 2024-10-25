import { ButtonHTMLAttributes } from 'react';


type ButtonVariant = 'primary' | 'secondary' | 'outlined';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-indigo-500 hover:bg-indigo-700 text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
  outlined: 'border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-50'
};

const sizes: Record<ButtonSize, string> = {
  small: 'px-4 py-1 text-sm',
  medium: 'px-6 py-2',
  large: 'px-8 py-3 text-lg'
};

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  size = 'medium',
  className = '', 
  ...props 
}) => {
  return (
    <button 
      className={`
        ${variants[variant]}
        ${sizes[size]}
        w-fit rounded-md transition-colors duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};