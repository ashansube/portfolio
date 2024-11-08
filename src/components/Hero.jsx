/**
 * @copyright 2024 ashan-subawickrama
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary, BuyMeACoffeeButton } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36 relative overflow-hidden">
      {/* Dotted background */}
      <div className="dotted-background"></div>

      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10 relative z-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-1.jpeg"
                width={40}
                height={40}
                alt="Ashan Subawickrama portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Software Engineer and Designer with a genuine passion for bringing
            ideas to life through code.
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" />
            <BuyMeACoffeeButton />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto rounded-[60px] overflow-hidden">
            <img
              src="/images/hero-banner.png"
              width={656}
              height={800}
              alt="Ashan Subawickrama"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
