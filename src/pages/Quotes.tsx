import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const quotes = [
  {
    text: "الطرب الحقيقي يبدأ حين يصمت كل شيء إلا القلب.",
    note: "مقولة منسوبة في سياق حفلات الإذاعة.",
  },
  {
    text: "أغني للناس كما لو أنني أغني لكل واحد منهم على حدة.",
    note: "دلالة على علاقتها بالجمهور وتفاعلها في الحفلات.",
  },
];

const Quotes = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SiteHeader />
      <main className="container py-10 space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-extrabold">أقوال وحكايات</h1>
          <p className="text-muted-foreground">مقتطفات تعكس فلسفة أم كلثوم الفنية وعلاقتها بالجمهور.</p>
        </header>

        <div className="grid sm:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <blockquote key={i} className="rounded-xl border p-6 bg-card/40">
              <p className="text-lg leading-8">“{q.text}”</p>
              {q.note && <cite className="block mt-3 text-xs text-muted-foreground not-italic">{q.note}</cite>}
            </blockquote>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Quotes;
