import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const songs = [
  {
    title: "إنت عمري",
    year: 1964,
    composer: "محمد عبد الوهاب",
    poet: "أحمد شفيق كامل",
    notes: "لقاء القمة بين أم كلثوم وعبد الوهاب؛ بداية مرحلة صوتية جديدة.",
  },
  {
    title: "الأطلال",
    year: 1966,
    composer: "رياض السنباطي",
    poet: "إبراهيم ناجي",
    notes: "من أشهر القصائد المغنّاة؛ أداء درامي ومقامات ثرية.",
  },
  {
    title: "سيرة الحب",
    year: 1965,
    composer: "بليغ حمدي",
    poet: "مرسي جميل عزيز",
    notes: "حضور لافت للموّال والتلوين الإيقاعي.",
  },
  {
    title: "ألف ليلة وليلة",
    year: 1969,
    composer: "بليغ حمدي",
    poet: "مرسي جميل عزيز",
    notes: "صياغة طويلة بتصاعد لحني محبوك وجُمل لاصقة بالذاكرة.",
  },
  {
    title: "على عيني",
    year: 1954,
    composer: "محمد القصبجي",
    poet: "أحمد رامي",
    notes: "مثال على جِدّة المدرسة القَصْبَجِيّة المبكرة.",
  },
];

const Songs = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SiteHeader />
      <main className="container py-10 space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-extrabold">الأغاني الخالدة</h1>
          <p className="text-muted-foreground">مختارات أساسية مع بيانات سريعة.</p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {songs.map((s) => (
            <article key={s.title} className="rounded-xl border p-5 bg-card/40 hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-1">{s.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">{s.year}</p>
              <ul className="text-sm space-y-1">
                <li>
                  الملحن: <span className="text-foreground/90">{s.composer}</span>
                </li>
                <li>
                  الشاعر: <span className="text-foreground/90">{s.poet}</span>
                </li>
              </ul>
              {s.notes && <p className="mt-3 text-sm text-muted-foreground">{s.notes}</p>}
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Songs;
