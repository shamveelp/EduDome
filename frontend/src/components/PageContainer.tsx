interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Consistent page container — applies the same max-width and horizontal
 * padding as the home page (max-w-7xl mx-auto px-6) to every page.
 */
export default function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
}
