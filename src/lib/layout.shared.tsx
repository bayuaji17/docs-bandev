import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Image src={"/BandevDoc_Icon.svg"} alt='Bandev Icon' width={40} height={40} className='[filter:invert(18%)_sepia(44%)_saturate(600%)_hue-rotate(10deg)_brightness(95%)_contrast(90%)] dark:invert dark:brightness-200' />
          BanDev Docs
        </div>
      ),
    },
    // githubUrl: 'https://github.com',
    // links: [
    //   {
    //     type: 'main',
    //     text: 'Documentation',
    //     url: '/docs',
    //   },
    // ],
  };
}