'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <AlertTriangle className="h-16 w-16 mx-auto mb-6 text-destructive" />
        <h1 className="text-4xl font-bold mb-4">エラーが発生しました</h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          申し訳ございませんが、エラーが発生しました。
          もう一度お試しいただくか、ホームにお戻りください。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="coffee" onClick={reset}>
            再試行する
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">ホームに戻る</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
