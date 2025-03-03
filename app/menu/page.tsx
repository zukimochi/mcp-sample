import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';

const coffeeItems = [
  {
    id: 1,
    name: 'スペシャルティコーヒー',
    description: 'エチオピア産の希少な豆を使用した、フルーティーな香りと豊かな酸味が特徴の一杯。',
    price: 580,
    image: 'https://images.unsplash.com/photo-1572286258217-215b98b27h57?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'カフェラテ',
    description: '濃厚なエスプレッソにベルベットのような激を混ぜて作る、まろやかな口当たりのカフェラテ。',
    price: 550,
    image: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'カフェモカ',
    description: 'エスプレッソとスチームミルク、まろやかなチョコレートの組み合わせが絶妙なハーモニーを奏でる一杯。',
    price: 600,
    image: 'https://images.unsplash.com/photo-1695591565019-e16eb94b64e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'アイスコーヒー',
    description: '深煙煙したコーヒーを急冷して作る、香り高くすっきりとした味わいのアイスコーヒー。',
    price: 500,
    image: 'https://images.unsplash.com/photo-1543773495-2a4971624151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
];

const sweetsItems = [
  {
    id: 1,
    name: '季節のフルーツタルト',
    description: '旬のフルーツをたっぷり使った、さっぱりとした甘さのタルト。フレッシュな味わいが人気です。',
    price: 650,
    image: 'https://images.unsplash.com/photo-1571115197575-1631b4248421?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'ガトーショコラ',
    description: '厳選したチョコレートを使用した、濃厚でリッチな味わいのチョコレートケーキ。コーヒーとの相性抜群。',
    price: 600,
    image: 'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'ティラミス',
    description: 'エスプレッソの香りとマスカルポーネの風味が絶妙に調和した、イタリアの伝統的なデザート。',
    price: 680,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'パンナコッタ',
    description: '滑らかな舌触りと優しい甘さが特徴の、シンプルながらも奥深い味わいのイタリアンデザート。',
    price: 550,
    image: 'https://images.unsplash.com/photo-1579954115567-dff2eeb6fdad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
];

const foodItems = [
  {
    id: 1,
    name: 'ブランチプレート',
    description: '厳選した食材を使ったサンドイッチ、サラダ、スープのセット。週末の遅めの朝食にぴったり。',
    price: 1380,
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'アボカドトースト',
    description: '香ばしいサワードウブレッドに、クリーミーなアボカドとポーチドエッグをのせた、栄養満点の一皿。',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1603046891249-70b173c8aef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'キッシュセット',
    description: '自家製の香り高いキッシュに、新鮮な季節のサラダを添えた、軽食にぴったりのセット。',
    price: 1250,
    image: 'https://images.unsplash.com/photo-1627308595171-d1b5d95d689d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'カプレーゼサンドイッチ',
    description: '新鮮なモッツァレラチーズとトマト、バジルをバゲットでサンドした、イタリアの風味豊かなサンドイッチ。',
    price: 1100,
    image: 'https://images.unsplash.com/photo-1554433607-66b5efe9d304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
];

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-muted py-16">
          <div className="container">
            <h1 className="text-4xl font-bold text-center mb-8">メニュー</h1>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              厳選した素材と丁寧な手仕事で作られる、カフェ・セレニティのこだわりメニューをご紹介します。
              季節や仕入れ状況により、一部内容が変更になる場合がございます。
            </p>
            
            {/* コーヒーメニュー */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-center mb-8 pb-2 border-b border-primary inline-block mx-auto">コーヒー</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {coffeeItems.map((item) => (
                  <div key={item.id} className="flex bg-card rounded-lg overflow-hidden shadow-md">
                    <div className="w-1/3 relative">
                      <Image 
                        src={item.image}
                        alt={item.name}
                        width={200}
                        height={200}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="w-2/3 p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-medium">{item.name}</h3>
                        <span className="font-medium">¥{item.price}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* スイーツメニュー */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-center mb-8 pb-2 border-b border-primary inline-block mx-auto">スイーツ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sweetsItems.map((item) => (
                  <div key={item.id} className="flex bg-card rounded-lg overflow-hidden shadow-md">
                    <div className="w-1/3 relative">
                      <Image 
                        src={item.image}
                        alt={item.name}
                        width={200}
                        height={200}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="w-2/3 p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-medium">{item.name}</h3>
                        <span className="font-medium">¥{item.price}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* フードメニュー */}
            <div>
              <h2 className="text-2xl font-bold text-center mb-8 pb-2 border-b border-primary inline-block mx-auto">フード</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {foodItems.map((item) => (
                  <div key={item.id} className="flex bg-card rounded-lg overflow-hidden shadow-md">
                    <div className="w-1/3 relative">
                      <Image 
                        src={item.image}
                        alt={item.name}
                        width={200}
                        height={200}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="w-2/3 p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-medium">{item.name}</h3>
                        <span className="font-medium">¥{item.price}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
