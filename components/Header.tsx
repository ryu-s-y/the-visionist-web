import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-32 h-10">
            <Image
              src="/logo.png"
              alt="더비저니스트 로고"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#instructor" className="text-gray-600 hover:text-brand-royal transition-colors font-medium text-sm">
            강사 소개
          </Link>
          <Link href="#programs" className="text-gray-600 hover:text-brand-royal transition-colors font-medium text-sm">
            프로그램
          </Link>
          <Link href="#clients" className="text-gray-600 hover:text-brand-royal transition-colors font-medium text-sm">
            고객사
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-brand-royal transition-colors font-medium text-sm">
            문의하기
          </Link>
        </nav>

        <Link
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-brand-royal text-white font-medium hover:bg-brand-dark transition-colors text-sm"
        >
          교육 문의
        </Link>
      </div>
    </header>
  );
}
