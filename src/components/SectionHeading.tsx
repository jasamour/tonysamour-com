import React from 'react';

type SectionHeadingProps = {
  tag?: 'h2' | 'h3';
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
};

export default function SectionHeading({ tag: Tag = 'h2', children, className = '', subtitle }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <Tag className="text-3xl lg:text-4xl font-semibold text-[#1a1a1a] tracking-tight mb-4">{children}</Tag>
      {subtitle && <p className="text-lg text-[#666] max-w-6xl">{subtitle}</p>}
    </div>
  );
}
