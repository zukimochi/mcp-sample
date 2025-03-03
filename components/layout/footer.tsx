import Link from 'next/link';
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="h-6 w-6" />
              <span className="text-xl font-bold">Café Serenity</span>
            </div>
            <p className="text-sm max-w-xs">
              落ち着いた空間で、こだわりのコーヒーと手作りスイーツをお楽しみいただけます。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">リンク</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-secondary-foreground transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-secondary-foreground transition-colors">
                  メニュー
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-secondary-foreground transition-colors">
                  ギャラリー
                </Link>
              </li>
              <li>
                <Link href="/access" className="hover:text-secondary-foreground transition-colors">
                  アクセス
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">営業時間</h3>
            <ul className="space-y-2 text-sm">
              <li>月〜金: 9:00 - 20:00</li>
              <li>土日祝: 10:00 - 19:00</li>
              <li>定休日: 毎月第3火曜日</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">アクセス</h3>
            <address className="text-sm not-italic">
              〒150-0043<br />
              東京都渋谷区道玄坂1-2-3<br />
              セレニティビル 1F<br />
              <span className="block mt-2">TEL: 03-1234-5678</span>
            </address>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Café Serenity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
