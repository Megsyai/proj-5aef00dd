const SiteFooter = () => {
  return (
    <footer className="border-t mt-16" dir="rtl">
      <div className="container py-10 text-sm text-muted-foreground grid gap-4 sm:flex sm:items-center sm:justify-between">
        <p>
          صُمّم بواسطة Megsy Builder — مرجع ثقافي غير رسمي عن أم كلثوم.
        </p>
        <div className="flex gap-4">
          <a className="hover:text-foreground" href="#sources">المراجع</a>
          <a className="hover:text-foreground" href="#top">إلى الأعلى</a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
