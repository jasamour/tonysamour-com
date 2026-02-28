import React from 'react';

type ProcessStepsProps = {
  steps: Array<{
    number: number;
    title: string;
    description: string;
  }>;
};

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {steps.map((step) => (
        <div key={step.number} className="flex flex-col gap-4">
          <div className="text-4xl font-semibold text-[#0d6e6e]">{step.number}</div>
          <div>
            <h4 className="text-lg font-semibold text-[#1a1a1a] mb-2">{step.title}</h4>
            <p className="text-sm text-[#666] leading-relaxed">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
