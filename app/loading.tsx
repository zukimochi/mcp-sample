import { Coffee } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <Coffee className="h-20 w-20 animate-bounce text-primary" />
      <h2 className="text-2xl font-bold mt-4">読み込み中...</h2>
      <p className="text-muted-foreground">おいしいコーヒーを深煙中です。もう少しお待ちください。</p>
    </div>
  );
}
