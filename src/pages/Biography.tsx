import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const BioSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-3">
    <h2 className="text-2xl font-bold">{title}</h2>
    <div className="prose prose-neutral max-w-none rtl:prose-p:text-right rtl:prose-li:text-right dark:prose-invert">
      {children}
    </div>
  </section>
);

const Biography = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SiteHeader />
      <main className="container py-10 space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold">السيرة الذاتية — أم كلثوم</h1>
          <p className="text-muted-foreground">ملخص موثّق لأهم محطات حياتها الفنية والشخصية.</p>
        </header>

        <BioSection title="النشأة والبدايات (حوالي 1904–1923)">
          <p>
            وُلدت فاطمة إبراهيم السيد البلتاجي في قرية طماي الزهايرة بمحافظة الدقهلية
            بمصر. بدأت الغناء طفلةً إلى جوار والدها في المناسبات الدينية، وبرزت
            موهبتها الاستثنائية مبكرًا من خلال أداء التواشيح والقصائد.
          </p>
        </BioSection>

        <BioSection title="صناعة الاسم والصعود (العشرينيات)">
          <p>
            انتقلت إلى القاهرة حيث تعرّفت على نخبة من الشعراء والملحنين على رأسهم
            محمد القصبجي وأحمد رامي، وبدأت تسجيل الأسطوانات وإحياء الحفلات، ما ساهم
            في انتشار اسمها عربيًا.
          </p>
        </BioSection>

        <BioSection title="السنوات الذهبية (الثلاثينيات–الخمسينيات)">
          <p>
            شهدت هذه الفترة تعاونها الوثيق مع رياض السنباطي، وتقديمها لروائع القصائد
            والطقاطيق، إلى جانب أفلام سينمائية ناجحة. تحوّلت حفلات الخميس إلى حدث
            شهري تترقبه الجماهير في أنحاء العالم العربي عبر الإذاعة المصرية.
          </p>
        </BioSection>

        <BioSection title="تجديد الستينيات والتعاون مع بليغ حمدي">
          <p>
            قدّمت أعمالًا أحدثت نقلة في شكل الأغنية الطويلة مثل "إنت عمري" و"ألف
            ليلة وليلة" بتوقيع بليغ حمدي ومحمد عبد الوهاب، ما حافظ على وهجها الفني
            مع تغيّر الذائقة الموسيقية.
          </p>
        </BioSection>

        <BioSection title="الرحيل والإرث (1975 وما بعد)">
          <p>
            رحلت أم كلثوم في 3 فبراير 1975، وشيّعها الملايين في القاهرة. بقي إرثها
            حاضرًا بوصفها أيقونة للطرب العربي الأصيل، وصوتًا جمع بين الصرامة
            الموسيقية والوجدان الشعري.
          </p>
        </BioSection>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Biography;
