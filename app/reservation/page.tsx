import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';

export default function ReservationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="container py-16">
          <h1 className="text-4xl font-bold text-center mb-8">予約</h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            大切な方とのお食事やお集まりに、カフェ・セレニティのご予約をお受けしております。
            下記フォームからご希望の日時と人数をお知らせください。
          </p>
          
          <div className="max-w-2xl mx-auto bg-card rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block font-medium">お名前 <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full border border-input rounded-md h-10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block font-medium">メールアドレス <span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full border border-input rounded-md h-10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block font-medium">電話番号 <span className="text-red-500">*</span></label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required
                  className="w-full border border-input rounded-md h-10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="date" className="block font-medium">日付 <span className="text-red-500">*</span></label>
                  <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    required 
                    className="w-full border border-input rounded-md h-10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="time" className="block font-medium">時間 <span className="text-red-500">*</span></label>
                  <input 
                    type="time" 
                    id="time" 
                    name="time" 
                    required 
                    className="w-full border border-input rounded-md h-10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="guests" className="block font-medium">人数 <span className="text-red-500">*</span></label>
                <select 
                  id="guests" 
                  name="guests" 
                  required 
                  className="w-full border border-input rounded-md h-10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">--選択してください--</option>
                  <option value="1">1名</option>
                  <option value="2">2名</option>
                  <option value="3">3名</option>
                  <option value="4">4名</option>
                  <option value="5">5名</option>
                  <option value="6">6名</option>
                  <option value="more">その他 (詳細にご記入ください)</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="requests" className="block font-medium">特別なご要望</label>
                <textarea 
                  id="requests" 
                  name="requests" 
                  rows={4} 
                  className="w-full border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="窓際の席をご希望など、ご要望があればご記入ください。"
                ></textarea>
              </div>
              
              <div className="text-center">
                <Button variant="coffee" type="submit">予約を確定する</Button>
              </div>
            </form>
          </div>
          
          <div className="mt-16 bg-muted rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">予約について</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">予約の確認</h3>
                <p className="text-muted-foreground">ご予約フォームを送信いただいた後、ご登録いただいたメールアドレスに確認メールをお送りします。予約内容をご確認の上、確定ボタンをクリックしてください。</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">キャンセルポリシー</h3>
                <p className="text-muted-foreground">ご予約のキャンセルは、予約日の2日前まで受け付けております。ご予約の確認メールに記載されたリンクから、またはお電話にてご連絡ください。</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">遅刻について</h3>
                <p className="text-muted-foreground">ご予約のお時間から15分以上遅れる場合は、お手数ですがご連絡いただけますようお願いいたします。テーブルをキープできる時間には限りがあります。</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">団体予約について</h3>
                <p className="text-muted-foreground">7名様以上の団体予約は、お手数ですがお電話にて直接ご連絡ください。特別メニューのご用意も可能です。</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
