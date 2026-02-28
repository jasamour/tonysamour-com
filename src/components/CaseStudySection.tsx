import Image from 'next/image';
import React from 'react';

type CaseStudySectionProps = {
  title: string;
  subtitle?: string;
  image?: string;
  context: string;
  whatIDid: string[];
  outcome: string[];
  stack: string;
};

export default function CaseStudySection({ title, subtitle, image, context, whatIDid, outcome, stack }: CaseStudySectionProps) {
  return (
    <div className="py-16 lg:py-20 border-b border-[#e5e5e5] last:border-b-0">
      {/* Title */}
      <h2 className="text-2xl lg:text-3xl font-semibold text-[#1a1a1a] mb-3 tracking-tight">{title}</h2>
      {subtitle && <p className="text-xl text-[#666] leading-relaxed mb-8">{subtitle}</p>}

      {/* Image placeholder */}
      {image ? (
        <div className="mb-8 aspect-2/1 bg-[#e5e5e5] rounded-lg overflow-hidden relative">
          <Image src={image} alt={title} fill className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="mb-8 aspect-2/1 bg-linear-to-br from-[#e5e5e5] to-[#d0d0d0] rounded-lg flex items-center justify-center text-[#999] text-sm font-medium">Project Image</div>
      )}

      {/* Context */}
      <p className="text-base text-[#666] mb-8 leading-relaxed max-w-6xl">{context}</p>

      {/* What I did & Outcome grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
        <div>
          <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4">What I did</h3>
          <ul className="space-y-3">
            {whatIDid.map((item, index) => (
              <li key={index} className="flex gap-3 text-[#666] text-sm">
                <span className="text-[#0d6e6e] font-semibold mt-0.5 flex-shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4">Outcome</h3>
          <ul className="space-y-3">
            {outcome.map((item, index) => (
              <li key={index} className="flex gap-3 text-[#666] text-sm">
                <span className="text-[#0d6e6e] font-semibold mt-0.5 flex-shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Stack */}
      <p className="text-sm text-[#999]">
        <span className="font-medium text-[#1a1a1a]">Stack:</span> {stack}
      </p>
    </div>
  );
}
