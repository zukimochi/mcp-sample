import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Coffee, Clock, MapPin, Cake } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
              alt="Café interior"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Café Serenity</h1>
            <p className="text-lg md:text-xl mb-8">落ち着いた空間で、こだわりのコーヒーと手作りスイーツをお楽しみください</p>
            <Button variant="coffee" size="lg" asChild>
              <Link href="/menu">メニューを見る</Link>
            </Button>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">こだわりのカフェ体験</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">最高級の豆を使用したコーヒーと、毎日手作りするスイーツで、特別なひとときをお届けします。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                <Coffee className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium mb-2">厳選された豆</h3>
              <p className="text-muted-foreground">世界中から厳選された最高級のコーヒー豆を使用し、一杯一杯丁寧に淹れています。</p>
            </div>
            
            <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                <Cake className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium mb-2">手作りスイーツ</h3>
              <p className="text-muted-foreground">パティシエが毎日手作りする、季節の素材を活かした自慢のスイーツをご用意しています。</p>
            </div>
            
            <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium mb-2">居心地の良い空間</h3>
              <p className="text-muted-foreground">時間を忘れてくつろげる、落ち着いた雰囲気の店内で、ゆったりとした時間をお過ごしいただけます。</p>
            </div>
            
            <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium mb-2">アクセス便利</h3>
              <p className="text-muted-foreground">渋谷駅から徒歩5分の好立地。ショッピングや観光の合間に気軽にお立ち寄りいただけます。</p>
            </div>
          </div>
        </section>
        
        {/* Featured Menu */}
        <section className="bg-muted py-16 sm:py-24">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">人気メニュー</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">季節ごとに変わる、シェフおすすめの人気メニューをご紹介します。</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="menu-item">
                <div className="menu-image-container">
                  <Image 
                    src="https://images.unsplash.com/photo-1572286258217-215b98b27h57?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Specialty Coffee"
                    width={400}
                    height={300}
                    className="menu-image"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-medium mb-2">スペシャルティコーヒー</h3>
                  <p className="text-muted-foreground mb-4">エチオピア産の希少な豆を使用した、フルーティーな香りと豊かな酸味が特徴の一杯。</p>
                  <p className="font-medium">¥580</p>
                </div>
              </div>
              
              <div className="menu-item">
                <div className="menu-image-container">
                  <Image 
                    src="https://images.unsplash.com/photo-1571115197575-1631b4248421?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Seasonal Cake"
                    width={400}
                    height={300}
                    className="menu-image"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-medium mb-2">季節のフルーツタルト</h3>
                  <p className="text-muted-foreground mb-4">旬のフルーツをたっぷり使った、さっぱりとした甘さのタルト。フレッシュな味わいが人気です。</p>
                  <p className="font-medium">¥650</p>
                </div>
              </div>
              
              <div className="menu-item">
                <div className="menu-image-container">
                  <Image 
                    src="https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Brunch Plate"
                    width={400}
                    height={300}
                    className="menu-image"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-medium mb-2">ブランチプレート</h3>
                  <p className="text-muted-foreground mb-4">厳選した食材を使ったサンドイッチ、サラダ、スープのセット。週末の遅めの朝食にぴったり。</p>
                  <p className="font-medium">¥1,380</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link href="/menu">メニューをもっと見る</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Coffee beans"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="container relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">特別な時間をカフェ・セレニティで</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">ゆったりとした時間の流れる空間で、こだわりのコーヒーとスイーツをお楽しみください。</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="coffee" size="lg" asChild>
                <Link href="/reservation">予約する</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/access">アクセスを確認する</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
