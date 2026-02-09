import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-32 h-10">
            <Image
              src="/logo.png"
              alt="The Visionist Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/about" className="text-gray-500 hover:text-[#C5A059] transition-colors font-medium text-[15px] tracking-wide font-sans">
            About
          </Link>
          <Link href="/program" className="text-gray-500 hover:text-[#C5A059] transition-colors font-medium text-[15px] tracking-wide font-sans">
            Program
          </Link>
          <Link href="/contact" className="text-gray-500 hover:text-[#C5A059] transition-colors font-medium text-[15px] tracking-wide font-sans">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button (Placeholder for future implementation if needed, but keeping clean for now) */}
        <div className="md:hidden">
          {/* Mobile menu toggle would go here */}
        </div>
      </div>
    </header>
  );
}
