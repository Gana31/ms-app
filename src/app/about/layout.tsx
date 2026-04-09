import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About MSquare Software',
  description: 'Learn about MSquare Software — our vision, mission, and core values.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
