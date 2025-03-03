import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Coffee } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center">
          <Coffee className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl font-bold mb-4">ページが見つかりません</h1>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            お探しのページは存在しないか、移動された可能性があります。
            下のホームボタンからトップページにお戻りください。
          </p>
          <Button variant="coffee" asChild>
            <Link href="/">ホームに戻る</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
