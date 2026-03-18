import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header locale="zh" />
      <main className="flex-1">{children}</main>
      <Footer locale="zh" />
    </>
  );
}
