import React from "react";
const SectionTitle = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className='w-max p-5'>
        <h2 className="text-lg font-semibold flex items-center">{children}</h2>
      </div>
    );
  };
export default SectionTitle;
