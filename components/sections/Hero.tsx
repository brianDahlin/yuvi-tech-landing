import { cn } from '@/lib/utils';
import { LogoCloud } from '@/components/ui/logo-cloud-3';
import { BackgroundPathsClient } from '@/components/ui/background-paths-client';
import { FlowButton } from '@/components/ui/flow-button';
import { HERO_CONTENT, TECH_LOGOS } from '@/constants/content';

function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-5xl">

      {/* Top radial shade */}
      <div
        aria-hidden="true"
        className="absolute inset-0 isolate hidden overflow-hidden contain-strict lg:block"
      >
        <div className="absolute inset-0 -top-14 isolate -z-10 contain-strict"
          style={{
            background: 'radial-gradient(35% 80% at 49% 0%, rgba(232,98,42,0.10), transparent)',
          }}
        />
      </div>

      {/* Outer vertical border lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-5xl lg:block"
      >
        <div className="absolute inset-y-0 left-0 z-10 h-full w-px bg-white/15 [mask-image:linear-gradient(to_bottom,transparent_80%,white)]" />
        <div className="absolute inset-y-0 right-0 z-10 h-full w-px bg-white/15 [mask-image:linear-gradient(to_bottom,transparent_80%,white)]" />
      </div>

      {/* Main content */}
      <div className="relative flex flex-col items-center justify-center gap-5 pt-32 pb-24">

        {/* Inner decorative border lines */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 size-full overflow-hidden">
          <div className="absolute inset-y-0 left-4 w-px bg-gradient-to-b from-transparent via-white/10 to-white/10 md:left-8" />
          <div className="absolute inset-y-0 right-4 w-px bg-gradient-to-b from-transparent via-white/10 to-white/10 md:right-8" />
          <div className="absolute inset-y-0 left-8 w-px bg-gradient-to-b from-transparent via-white/5 to-white/5 md:left-12" />
          <div className="absolute inset-y-0 right-8 w-px bg-gradient-to-b from-transparent via-white/5 to-white/5 md:right-12" />
        </div>

        {/* H1 */}
        <h1
          className={cn(
            'animate-in fade-in slide-in-from-bottom-6 fill-mode-backwards text-balance text-center tracking-tight delay-100 duration-500 ease-out',
            'font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white'
          )}
          style={{ fontWeight: 400 }}
        >
          {HERO_CONTENT.title}
        </h1>

        {/* Subtitle */}
        <p className="animate-in fade-in slide-in-from-bottom-6 fill-mode-backwards mx-auto max-w-md text-center text-base text-white/60 tracking-wide delay-200 duration-500 ease-out font-[family-name:var(--font-mono)] text-sm">
          {HERO_CONTENT.subtitle}
        </p>

        {/* CTA buttons */}
        <div className="animate-in fade-in slide-in-from-bottom-6 fill-mode-backwards flex flex-row flex-wrap items-center justify-center gap-4 pt-2 delay-300 duration-500 ease-out">
          <FlowButton text={HERO_CONTENT.ctaSecondary} href="#cases" />
        </div>
      </div>
    </section>
  );
}

function LogosSection() {
  return (
    <section className="mx-auto w-full max-w-5xl relative border-t border-white/10 pt-6 pb-10">
      <h2 className="text-center font-[family-name:var(--font-mono)] text-sm text-white/40 uppercase tracking-widest mb-4">
        {HERO_CONTENT.trustedLabel} —{' '}
        <span className="text-white/60">{HERO_CONTENT.trustedText}</span>
      </h2>
      <div className="relative z-10">
        <LogoCloud items={[...TECH_LOGOS]} />
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <div className="relative w-full bg-black pt-[60px] overflow-hidden">
      {/* Background paths — full-height layer behind all content */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundPathsClient />
      </div>
      <div className="relative z-10">
        <HeroSection />
        <LogosSection />
      </div>
    </div>
  );
}
