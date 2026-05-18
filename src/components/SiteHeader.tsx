import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive
      ? "bg-primary text-primary-foreground"
      : "text-muted-foreground hover:text-foreground hover:bg-accent"
  }`;

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60" dir="rtl">
      <div className="container flex h-14 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-amber-500 text-primary-foreground shadow-md">🎙️</span>
            <span className="font-extrabold tracking-tight text-lg">أم كلثوم</span>
          </Link>
          <span className="hidden sm:inline text-sm text-muted-foreground">كوكب الشرق</span>
        </div>
        <nav className="flex items-center gap-1">
          <NavLink to="/biography" className={navLinkClass}>
            السيرة
          </NavLink>
          <NavLink to="/songs" className={navLinkClass}>
            الأغاني الخالدة
          </NavLink>
          <NavLink to="/timeline" className={navLinkClass}>
            الخط الزمني
          </NavLink>
          <NavLink to="/collaborations" className={navLinkClass}>
            التعاونات
          </NavLink>
          <NavLink to="/gallery" className={navLinkClass}>
            المعرض
          </NavLink>
          <NavLink to="/quotes" className={navLinkClass}>
            أقوال
          </NavLink>
          <NavLink to="/sources" className={navLinkClass}>
            مصادر
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
