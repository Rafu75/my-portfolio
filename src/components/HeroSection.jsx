import { ArrowDown } from "lucide-react";

export const HeroSection = ({ portraitStartRef }) => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24"
    >
      <div className="container z-10 mx-auto max-w-5xl">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-5 sm:gap-10 lg:gap-16">

          {/* Left Side: Introduction */}
          <div className="text-center md:text-left">
            <div className="space-y-5">
              <p className="text-lg font-medium opacity-0 animate-fade-in sm:text-2xl">
                Hi, I'm
              </p>

              <h1 className="text-2xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1 sm:text-4xl lg:text-5xl">
                <span className="text-primary">Mahmudul</span>{" "}
                <span className="text-gradient">Hasan</span>{" "}
                <span className="text-primary">Rafi</span>
              </h1>

              <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground opacity-0 animate-fade-in-delay-2 sm:text-lg md:mx-0">
                A Full-Stack Web Developer specializing in MERN,
                building scalable, responsive, and user-friendly
                web applications with clean & modern interfaces.
              </p>

              <div className="pt-3 opacity-0 animate-fade-in-delay-3">
                <a href="#projects" className="cosmic-button">
                  View My Work
                </a>
              </div>
            </div>
          </div>

          {/* Portrait Starting Position */}
          <div className="relative flex shrink-0 items-center justify-center">
            <div className="absolute h-36 w-36 rounded-full bg-primary/20 blur-3xl sm:h-52 sm:w-52" />

            <div
              ref={portraitStartRef}
              className="relative z-10 h-28 w-28 shrink-0 rounded-full sm:h-44 sm:w-44 lg:h-52 lg:w-52"
            />
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center animate-bounce">
        <span className="mb-2 text-sm text-muted-foreground">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
