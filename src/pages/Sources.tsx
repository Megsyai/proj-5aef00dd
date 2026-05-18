import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const refs = [
  {
    title: "الإذاعة المصرية — أرشيف حفلات أم كلثوم",
    href: "https://www.maspero.eg/",
    note: "مواد تاريخية وإذاعية محفوظة (روابط عامة).",
  },
  {
    title: "مقالات ومراجع عن أم كلثوم — ويكيبيديا العربية",
    href: "https://ar.wikipedia.org/wiki/%D8%A3%D9%85_%D9%83%D9%84%D8%AB%D9%88%D9%85",
    note: "ملخصات سيرتها وأعمالها مع مصادر متعددة.",
  },
  {
    title: "أغاني أم كلثوم — YouTube",
    href: "https://www.youtube.com/results?search_query=%D8%A3%D9%85+%D9%83%D9%84%D8%AB%D9%88%D9%85",
    note: "مواد صوتية ومرئية لأرشيف الحفلات.",
  },
];

const Sources = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SiteHeader />
      <main id="sources" className="container py-10 space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-extrabold">المراجع والمصادر</h1>
          <p className="text-muted-foreground">روابط موثوقة للاطلاع والتوثيق.</p>
        </header>

        <ul className="grid sm:grid-cols-2 gap-6">
          {refs.map((r) => (
            <li key={r.href} className="rounded-xl border p-6 bg-card/40">
              <a className="font-semibold text-primary hover:underline" href={r.href} target="_blank" rel="noreferrer">
                {r.title}
              </a>
              {r.note && <p className="mt-2 text-sm text-muted-foreground">{r.note}</p>}
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Sources;
