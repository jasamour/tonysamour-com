import React from 'react';

type FitSection = {
  goodFit: string[];
  notGoodFit: string[];
};

export default function FitSection({ goodFit, notGoodFit }: FitSection) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Good fit */}
      <div>
        <h3 className="text-xl font-semibold text-[#0d6e6e] mb-6">Good fit</h3>
        <ul className="space-y-3">
          {goodFit.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-[#666]">
              <span className="inline-flex w-4 justify-center pt-0.5 text-[#0d6e6e] font-semibold leading-none flex-shrink-0">+</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Not a good fit */}
      <div>
        <h3 className="text-xl font-semibold text-[#0d6e6e] mb-6">Not a good fit</h3>
        <ul className="space-y-3">
          {notGoodFit.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-[#666]">
              <span className="inline-flex w-4 justify-center pt-0.5 text-[#999] font-semibold leading-none flex-shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
