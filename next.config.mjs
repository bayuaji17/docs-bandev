import { fileURLToPath } from 'node:url';
import path from 'node:path';

import { createMDX } from 'fumadocs-mdx/next';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  turbopack: {
    // Explicitly set the project root to silence lockfile root warnings
    root: __dirname,
  },
};

export default withMDX(config);
