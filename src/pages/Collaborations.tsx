import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const people = [
  {
    name: "أحمد رامي",
    role: "شاعر",
    blurb: "صاغ مئات القصائد لأم كلثوم ورافق مسيرتها منذ البدايات.",
  },
  { name: "محمد القصبجي", role: "ملحن", blurb: "مجدّد مبكر في التكوين اللحني والتوزيع." },
  { name: "رياض السنباطي", role: "ملحن", blurb: "شريك الحقبة الذهبية في القصائد والأدوار." },
  { name: "بليغ حمدي", role: "ملحن", blurb: "روح الحداثة في الستينيات، أغنيات طويلة نابضة." },
  { name: "محمد عبد الوهاب", role: "ملحن", blurb: "لقاء خاص في الستينيات أخرج " + "إنت عمري" + " وغيرها." },
];

const Collaborations = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SiteHeader />
      <main className="container py-10 space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-extrabold">شعراء وملحنون</h1>
          <p className="text-muted-foreground">أبرز الأسماء التي شكّلت ملامح إرث أم كلثوم.</p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((p) => (
            <article key={p.name} className="rounded-xl border p-6 bg-card/40 hover:shadow-lg transition">
              <h3 className="font-bold">{p.name}</h3>
              <p className="text-xs text-muted-foreground mb-2">{p.role}</p>
              <p className="text-sm text-muted-foreground leading-6">{p.blurb}</p>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Collaborations;
