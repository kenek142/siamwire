const LINE_URL = "https://line.me/R/ti/p/~kenek3332";
const PHONE_URL = "tel:0859268888";
const PHONE_LABEL = "085-926-8888";
const FACEBOOK_URL = "https://www.facebook.com/search/top?q=Siam%20Wire";

const features = [
  {
    no: "01",
    title: "สินค้ามีคุณภาพ",
    text: "ลวด PC Wire แข็งแรง สม่ำเสมอทุกม้วน เหมาะกับงานคอนกรีตอัดแรงที่ต้องการความทนทานสูง",
    icon: <ShieldIcon />,
  },
  {
    no: "02",
    title: "ราคาคุ้มค่า",
    text: "ราคาตรงไปตรงมา คุ้มค่ากับคุณภาพ ช่วยคุมต้นทุนการผลิตของโรงงานคุณได้ดีขึ้น",
    icon: <TagIcon />,
  },
  {
    no: "03",
    title: "ส่งไว",
    text: "จัดส่งรวดเร็วตามนัด ไลน์การผลิตของคุณเดินต่อได้ ไม่ต้องหยุดรอวัตถุดิบ",
    icon: <TruckIcon />,
  },
];

const faqs = [
  {
    q: "สั่งซื้ออย่างไร?",
    a: "ทักไลน์หรือโทรหาเรา แจ้งขนาดและปริมาณที่ต้องการ ทีมงานจะส่งใบเสนอราคาให้ทันที",
  },
  {
    q: "ราคา 24 บาท เป็นราคาต่อหน่วยอะไร?",
    a: "เป็นราคาเริ่มต้นต่อกิโลกรัม ราคาจริงขึ้นกับขนาดลวดและปริมาณการสั่ง สั่งมากได้ราคาดีขึ้น",
  },
  {
    q: "จัดส่งใช้เวลากี่วัน?",
    a: "ขึ้นกับปริมาณและพื้นที่จัดส่ง ทีมงานจะแจ้งวันส่งที่ชัดเจนตั้งแต่ตอนยืนยันคำสั่งซื้อ",
  },
  {
    q: "ใช้กับงานแบบไหนได้บ้าง?",
    a: "เหมาะกับโรงงานผลิตเสาคอนกรีตอัดแรง เสาเข็ม แผ่นพื้น และงานโครงสร้างสะพาน",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col pb-20 md:pb-0">
      {/* แถบบน */}
      <header className="sticky top-0 z-20 border-b border-line bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-2">
            <CoilIcon className="h-7 w-7 text-accent" />
            <span className="font-display text-lg font-bold tracking-wider">
              SIAM WIRE
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
            <a href="#features" className="hover:text-foreground">
              จุดเด่น
            </a>
            <a href="#product" className="hover:text-foreground">
              สินค้าและราคา
            </a>
            <a href="#faq" className="hover:text-foreground">
              คำถามที่พบบ่อย
            </a>
            <a href="#contact" className="hover:text-foreground">
              ติดต่อเรา
            </a>
          </nav>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-line-green px-4 py-2 text-sm font-bold text-white hover:brightness-110"
          >
            ทักไลน์เลย
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* ส่วนหัว */}
        <section className="blueprint relative overflow-hidden border-b border-line">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
          <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-32">
            <p className="mb-5 inline-flex items-center gap-2 border border-accent/50 bg-accent/10 px-3 py-1 text-xs font-medium tracking-widest text-accent-soft">
              <span className="h-2 w-2 bg-accent" />
              PC WIRE · ลวดอัดแรง
            </p>
            <h1 className="font-display text-hero font-extrabold tracking-tight">
              SIAM <span className="text-accent">WIRE</span>
            </h1>
            <p className="mt-6 max-w-2xl font-display text-2xl font-medium leading-snug md:text-3xl">
              ลวด PC Wire คุณภาพดี ราคาคุ้มค่า ส่งไว
              <br className="hidden sm:block" />
              สำหรับโรงงานเสาคอนกรีตและงานสะพาน
            </p>
            <p className="mt-4 max-w-xl text-muted">
              วัตถุดิบหลักที่ไลน์ผลิตของคุณไว้ใจได้ ทักมาขอราคาได้ทันที
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-line-green px-8 py-4 text-lg font-bold text-white shadow-lg shadow-line-green/20 hover:brightness-110"
              >
                <ChatIcon />
                ทักไลน์เลย
              </a>
              <a
                href={PHONE_URL}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-surface px-8 py-4 text-lg font-bold hover:border-accent"
              >
                <PhoneIcon />
                โทร {PHONE_LABEL}
              </a>
            </div>
          </div>
        </section>

        {/* จุดเด่น */}
        <section id="features" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-20">
          <SectionTitle eyebrow="WHY SIAM WIRE" title="ทำไมต้อง Siam Wire" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.no}
                className="rivets border border-line bg-surface p-6 pt-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-accent">{f.icon}</span>
                  <span className="font-display text-4xl font-extrabold text-line">
                    {f.no}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold">
                  {f.title}
                </h3>
                <p className="mt-2 text-muted">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* สินค้าและราคา */}
        <section
          id="product"
          className="scroll-mt-16 border-y border-line bg-surface"
        >
          <div className="mx-auto max-w-6xl px-4 py-20">
            <SectionTitle eyebrow="PRODUCT" title="สินค้าและราคา" />
            <div className="mt-10 grid overflow-hidden border border-line md:grid-cols-5">
              <div className="blueprint relative flex min-h-56 items-center justify-center bg-background md:col-span-2">
                <CoilIcon className="h-40 w-40 text-accent" />
              </div>
              <div className="bg-surface-2 p-6 md:col-span-3 md:p-10">
                <p className="text-sm tracking-widest text-accent-soft">
                  PRESTRESSED CONCRETE WIRE
                </p>
                <h3 className="mt-2 font-display text-3xl font-bold">
                  ลวดอัดแรง PC Wire
                </h3>
                <p className="mt-3 text-muted">
                  สำหรับผลิตเสาคอนกรีตอัดแรง เสาเข็ม แผ่นพื้น และงานโครงสร้างสะพาน
                </p>
                <div className="mt-6 flex items-end gap-2 border-t border-line pt-6">
                  <span className="text-muted">เริ่มต้น</span>
                  <span className="font-display text-6xl font-extrabold leading-none text-foreground">
                    24
                  </span>
                  <span className="pb-1 text-lg">บาท / กก.</span>
                </div>
                <p className="mt-2 text-sm text-muted">
                  ราคาขึ้นกับขนาดและปริมาณการสั่ง ทักไลน์เพื่อรับใบเสนอราคา
                </p>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-bold text-white hover:bg-accent-strong sm:w-auto"
                >
                  <ChatIcon />
                  ขอใบเสนอราคาทางไลน์
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* คำถามที่พบบ่อย */}
        <section id="faq" className="mx-auto max-w-3xl scroll-mt-16 px-4 py-20">
          <SectionTitle eyebrow="FAQ" title="คำถามที่พบบ่อย" />
          <div className="mt-10 space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group border border-line bg-surface open:border-accent/60"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display text-lg font-medium">
                  {item.q}
                  <span className="text-2xl text-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ติดต่อเรา */}
        <section
          id="contact"
          className="blueprint scroll-mt-16 border-t border-line"
        >
          <div className="bg-background/85">
            <div className="mx-auto max-w-6xl px-4 py-20">
              <SectionTitle eyebrow="CONTACT" title="ติดต่อเรา" />
              <p className="mt-3 text-muted">
                เวลาทำการ จันทร์–เสาร์ 08:00–17:00 น.
              </p>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <ContactCard
                  href={LINE_URL}
                  external
                  label="LINE"
                  value="kenek3332"
                  icon={<ChatIcon />}
                  highlight
                />
                <ContactCard
                  href={PHONE_URL}
                  label="โทรศัพท์"
                  value={PHONE_LABEL}
                  icon={<PhoneIcon />}
                />
                <ContactCard
                  href={FACEBOOK_URL}
                  external
                  label="Facebook"
                  value="Siam Wire"
                  icon={<FacebookIcon />}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ส่วนท้าย */}
      <footer className="border-t border-line bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <span className="font-display font-bold tracking-wider text-foreground">
            SIAM WIRE
          </span>
          <span>ลวดอัดแรง PC Wire สำหรับงานเสาคอนกรีตและสะพาน</span>
          <span>© 2026 Siam Wire</span>
        </div>
      </footer>

      {/* ปุ่มลอยบนมือถือ */}
      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-line bg-background/95 p-3 backdrop-blur md:hidden">
        <a
          href={PHONE_URL}
          className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-surface py-3 font-bold"
        >
          <PhoneIcon />
          โทร
        </a>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-line-green py-3 font-bold text-white"
        >
          <ChatIcon />
          ทักไลน์เลย
        </a>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-accent-soft">
        <span className="h-px w-8 bg-accent" />
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-section font-bold">{title}</h2>
    </div>
  );
}

function ContactCard({
  href,
  label,
  value,
  icon,
  external,
  highlight,
}: {
  href: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  external?: boolean;
  highlight?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`flex items-center gap-4 border p-5 transition-colors ${
        highlight
          ? "border-line-green/60 bg-line-green/10 hover:bg-line-green/20"
          : "border-line bg-surface hover:border-accent"
      }`}
    >
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-md ${
          highlight ? "bg-line-green text-white" : "bg-surface-2 text-accent"
        }`}
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-sm text-muted">{label}</span>
        <span className="block truncate font-display text-xl font-bold">
          {value}
        </span>
      </span>
    </a>
  );
}

/* ===== ไอคอน ===== */
const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function CoilIcon({ className }: { className?: string }) {
  return (
    <svg {...iconProps} className={className} strokeWidth={1.5}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg {...iconProps} width={32} height={32}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg {...iconProps} width={32} height={32}>
      <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <circle cx="7" cy="7" r="1.5" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg {...iconProps} width={32} height={32}>
      <path d="M1 3h15v13H1z" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg {...iconProps}>
      <path d="M21 11.5a8.38 8.38 0 0 1-9 8.5 9.5 9.5 0 0 1-4-.9L3 20l1.1-4A8.38 8.38 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 9 8.5z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg {...iconProps}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg {...iconProps}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
