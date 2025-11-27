'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HERO_IMAGES = {
  light: '/HeroImage_Day.webp',
  dark: '/HeroImage_Night.webp',
} as const;

export default function HomePage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const heroImage = useMemo(() => {
    if (!mounted) return HERO_IMAGES.light;
    return resolvedTheme === 'dark' ? HERO_IMAGES.dark : HERO_IMAGES.light;
  }, [mounted, resolvedTheme]);

  return (
    <div className="relative h-dvh w-full overflow-hidden">
      <Image
        src={heroImage}
        alt="BanDev hero illustration"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 z-10 bg-[#f1dfbe]/25 dark:bg-black/25 backdrop-blur-xs"></div>
      <div
        className="absolute inset-0 z-10 bg-hero-fog dark:bg-hero-fog-dark"
      ></div>
      <div className="absolute top-40 inset-x-0 z-20 flex flex-col items-center text-center gap-4 my-6">
        <h1 className="inline-block cursor-pointer group mb-2">
          <span className="relative inline-block z-10 font-bold text-3xl">
            Build Smarter, Not Harder
            <span className="absolute left-0 -bottom-1 h-1 w-full origin-left scale-x-0 bg-fd-foreground transition-transform duration-300 group-hover:scale-x-100"></span>
          </span>
        </h1>
        <p className="text-muted-foreground max-w-md">
          Every lesson and experiment that shaped my workflow is gathered here.
          Explore the cheatsheets, patterns, and solutions behind my daily development.
        </p>
        <button className="group relative inline-flex items-center overflow-hidden rounded-full border-2 border-fd-foreground px-5 py-2 text-fd-foreground transition-all bg-fd-background dark:bg-fd-card">
          <Link href="/docs" className="flex items-center">
            <span className="relative z-10 transition-all duration-300">
              Explore My Docs
            </span>
            <span
              className="ml-0 overflow-hidden w-0 transition-all duration-300 group-hover:w-5 group-hover:ml-2 flex items-center"
            >
              <ArrowRight
                className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                size={18}
              />
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
}
