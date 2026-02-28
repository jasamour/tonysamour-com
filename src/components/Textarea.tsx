import React from 'react';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export default function Textarea({ label, error, className = '', ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id || props.name} className="text-sm font-medium text-[#1a1a1a]">
        {label}
        {!props.required && <span className="text-[#999] font-normal"> (optional)</span>}
      </label>
      <textarea
        className={`px-4 py-3 border border-[#e5e5e5] rounded bg-[#faf8f6] text-[#1a1a1a] placeholder-[#999] focus-visible:outline-2 focus-visible:outline-[#0d6e6e] focus-visible:outline-offset-0 transition-all duration-200 resize-none ${
          error ? 'border-red-500' : ''
        } ${className}`}
        {...props}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
