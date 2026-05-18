import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const events = [
  { year: 1904, text: "الميلاد في طماي الزهايرة، الدقهلية (تقديريًا)." },
  { year: 1923, text: "الاستقرار في القاهرة وبداية التسجيلات والحفلات الكبرى." },
  { year: 1934, text: "بداية بث حفلاتها عبر الإذاعة المصرية." },
  { year: 1946, text: "تتويج ريادتها بأعمال سنباطية خالدة ونضجٍ صوتي فريد." },
  { year: 1964, text: "لقاء القمة مع محمد عبد الوهاب — " + "إنت عمري" },
  { year: 1969, text: "ألف ليلة وليلة وتوهّج متجدد مع بليغ حمدي." },
  { year: 1975, text: "رحيلها وتشييع تاريخي في القاهرة." },
];

const Timeline = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SiteHeader />
      <main className="container py-10">
        <header className="space-y-2 mb-8">
          <h1 className="text-3xl font-extrabold">الخط الزمني</h1>
          <p className="text-muted-foreground">محطات مختصرة ترسم مسيرة كوكب الشرق.</p>
        </header>

        <ol className="relative border-s ps-6">
          {events.map((e) => (
            <li key={e.year} className="mb-8 ms-6">
              <span className="absolute -start-1.5 mt-1.5 size-3 rounded-full bg-primary" />
              <h3 className="font-bold">{e.year}</h3>
              <p className="text-sm text-muted-foreground">{e.text}</p>
            </li>
          ))}
        </ol>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Timeline;
