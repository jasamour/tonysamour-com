import Container from './Container';
import Button from './Button';

type HeroProps = {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
};

export default function Hero({ title, subtitle, primaryButtonText = 'Contact', primaryButtonHref = '/contact', secondaryButtonText = 'View services', secondaryButtonHref = '/services' }: HeroProps) {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="max-w-6xl">
          <h1 className="text-4xl lg:text-6xl font-semibold text-[#1a1a1a] mb-6 tracking-tight leading-tight">{title}</h1>
          <p className="text-lg lg:text-xl text-[#666] mb-8 leading-relaxed max-w-6xl">{subtitle}</p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={primaryButtonHref} variant="primary">
              {primaryButtonText}
            </Button>
            <Button href={secondaryButtonHref} variant="secondary">
              {secondaryButtonText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
