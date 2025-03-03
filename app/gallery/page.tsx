import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    alt: 'カフェの内装',
    caption: '心地よい空間でくつろぎのひとときを'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    alt: 'こだわりのコーヒー',
    caption: '丁寧にハンドドリップで淹れるスペシャルティコーヒー'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1594461185450-7a92ef113908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    alt: '手作りスイーツ',
    caption: '毎日手作りする季節のスイーツ'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    alt: 'カフェラテアート',
    caption: 'バリスタの技術が光るラテアート'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    alt: 'コーヒー豆',
    caption: '世界中から厳選した最高級のコーヒー豆'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    alt: 'ブランチプレート',
    caption: '週末限定の豪華なブランチプレート'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1523942839745-7848c839b661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    alt: 'テラス席',
    caption: '気持ちの良い日には開放的なテラス席で'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    alt: 'スタッフの笑顔',
    caption: 'あたたかい笑顔でお迎えします'
  },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="container py-16">
          <h1 className="text-4xl font-bold text-center mb-8">ギャラリー</h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            カフェ・セレニティの雰囲気やメニューの一部をご紹介します。
            実際にご来店いただき、素敵な時間をお過ごしください。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="group relative overflow-hidden rounded-lg aspect-[4/3]">
                <Image 
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
