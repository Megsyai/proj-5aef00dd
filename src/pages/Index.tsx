import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container" dir="rtl">
        {/* Hero */}
        <section className="py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                أم كلثوم — كوكب الشرق
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                كل ما تريد معرفته عن سيدة الغناء العربي: سيرتها، أغانيها الخالدة،
                محطاتها الزمنية، أبرز الشعراء والملحنين الذين تعاونت معهم، واقتباسات
                توثق أثرها العميق في الوجدان العربي.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/songs" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground shadow hover:opacity-90 transition">
                  استكشف الأغاني
                </Link>
                <Link to="/biography" className="inline-flex items-center justify-center rounded-md border px-4 py-2 hover:bg-accent transition">
                  اقرأ السيرة
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-400/30 via-primary/20 to-fuchsia-500/20 border shadow-inner" />
              <div className="absolute inset-0 -z-10 animate-pulse blur-3xl bg-[radial-gradient(ellipse_at_center,theme(colors.primary.DEFAULT)/20,transparent_60%)]" />
            </div>
          </div>
        </section>

        {/* Sections grid */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { to: "/biography", title: "السيرة الذاتية", desc: "النشأة والبدايات، الصعود إلى المجد، والسنوات الذهبية." },
            { to: "/songs", title: "روائع الأغاني", desc: "إنت عمري، الأطلال، سيرة الحب، ألف ليلة وليلة وأكثر." },
            { to: "/timeline", title: "الخط الزمني", desc: "محطات مفصلية من 1904 وحتى 1975 وما بعدها." },
            { to: "/collaborations", title: "شعراء وملحنون", desc: "أحمد رامي، محمد القصبجي، رياض السنباطي، بليغ حمدي..." },
            { to: "/gallery", title: "معرض الصور", desc: "صور نادرة من الحفلات والجولات والإذاعة المصرية." },
            { to: "/quotes", title: "أقوال وحكايات", desc: "طرائف واقتباسات تكشف فلسفتها وعلاقتها بالجمهور." },
          ].map((c) => (
            <Link key={c.to} to={c.to} className="group rounded-xl border p-6 hover:shadow-lg transition bg-card/40">
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-6">{c.desc}</p>
            </Link>
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
