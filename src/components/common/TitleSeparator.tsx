import React, { ReactNode } from "react";

interface TitleSeparatorProps {
  children: ReactNode; // Accepts any valid React children (text, elements, etc.)
}

const TitleSeparator: React.FC<TitleSeparatorProps> = ({ children }) => {
  return (
    <div className="flex justify-start mb-8">
      <p className="font-semibold text-lg inline-block px-4 uppercase py-2 border border-black">
        {children}
      </p>
    </div>
  );
};

export default TitleSeparator;
