'use client';

import dynamic from 'next/dynamic';

export const BackgroundPathsClient = dynamic(
  () => import('@/components/ui/background-paths').then((m) => m.BackgroundPaths),
  { ssr: false }
);
