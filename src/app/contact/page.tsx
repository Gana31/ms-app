import type { Metadata } from 'next';
import ContactUI from './ContactUI';

export const metadata: Metadata = {
  title: 'Contact Us - MSquare Software',
  description: 'Contact MSquare Software for custom software solutions and inquiries.',
};

export default function ContactPage() {
  return <ContactUI />;
}
