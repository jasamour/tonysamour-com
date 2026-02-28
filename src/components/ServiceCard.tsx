import React from 'react';

type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="p-8 border border-[#e5e5e5] rounded-lg bg-[#faf8f6] hover:shadow-subtle transition-shadow duration-200">
      <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">{title}</h3>
      <p className="text-base text-[#666] leading-relaxed">{description}</p>
    </div>
  );
}
