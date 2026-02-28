import React from 'react';
import Container from './Container';

type CTASectionProps = {
  heading: string;
  subheading: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function CTASection({ heading, subheading, buttonText = 'Contact', buttonHref = '/contact' }: CTASectionProps) {
  return (
    <section className="py-16 lg:py-20 bg-[#f0f9f9]">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#1a1a1a] mb-4 tracking-tight">{heading}</h2>
          <p className="text-lg text-[#666] max-w-6xl mx-auto mb-8">{subheading}</p>
          <a href={buttonHref} className="inline-flex items-center justify-center px-6 py-3 font-medium rounded bg-[#0d6e6e] text-white hover:opacity-90 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-[#0d6e6e] focus-visible:outline-offset-2">
            {buttonText}
          </a>
        </div>
      </Container>
    </section>
  );
}
