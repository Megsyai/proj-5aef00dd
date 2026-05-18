import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const images = [
  { src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop", alt: "ميكروفون قديم" },
  { src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop", alt: "مسارح وأنوار" },
  { src: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1200&auto=format&fit=crop", alt: "أسطوانة فينيل" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SiteHeader />
      <main className="container py-10 space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-extrabold">معرض الصور</h1>
          <p className="text-muted-foreground">صور توضيحية مستوحاة من أجواء الطرب الكلاسيكي.</p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <figure key={img.src} className="overflow-hidden rounded-xl border bg-card/40">
              <img src={img.src} alt={img.alt} className="aspect-[4/3] w-full object-cover transition hover:scale-105" />
              <figcaption className="p-3 text-sm text-muted-foreground">{img.alt}</figcaption>
            </figure>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Gallery;
