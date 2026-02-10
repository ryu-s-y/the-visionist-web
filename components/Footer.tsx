import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="relative w-24 h-8 opacity-100">
              <Image
                src="/logo.png"
                alt="더비저니스트 로고"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </div>
          </div>

          <div className="flex gap-8 text-sm text-white">
            <Link href="#" className="hover:text-[#C5A059] transition-colors">
              개인정보처리방침
            </Link>
            <Link href="#" className="hover:text-[#C5A059] transition-colors">
              이용약관
            </Link>
          </div>

          <p className="text-sm">
            © {new Date().getFullYear()} The Visionist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
