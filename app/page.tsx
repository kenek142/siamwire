const LINE_URL = "https://line.me/R/ti/p/~kenek3332";
const PHONE_URL = "tel:0859268888";
const PHONE_LABEL = "085-926-8888";
const FACEBOOK_URL = "https://www.facebook.com/search/top?q=Siam%20Wire";

const highlights = [
  {
    title: "สินค้ามีคุณภาพ",
    text: "แข็งแรง สม่ำเสมอทุกม้วน",
    icon: <ShieldIcon />,
  },
  {
    title: "ราคาคุ้มค่า",
    text: "ตรงไปตรงมา ช่วยคุมต้นทุน",
    icon: <TagIcon />,
  },
  {
    title: "ส่งไว",
    text: "ไลน์ผลิตไม่ต้องหยุดรอ",
    icon: <TruckIcon />,
  },
  {
    title: "ปรึกษาฟรี",
    text: "ทักไลน์ ตอบไว ได้ราคาทันที",
    icon: <ChatIcon />,
  },
];

const applications = [
  {
    title: "เสาไฟฟ้าคอนกรีตอัดแรง",
    text: "ลวดรับแรงดึงสูง ช่วยให้เสายาวและรับน้ำหนักได้ดี",
    art: <PoleArt />,
  },
  {
    title: "เสาเข็มคอนกรีต",
    text: "สำหรับเสาเข็มอัดแรงในงานฐานรากอาคารและโรงงาน",
    art: <PileArt />,
  },
  {
    title: "แผ่นพื้นสำเร็จรูป",
    text: "แผ่นพื้นอัดแรงที่ต้องการความแข็งแรงและความสม่ำเสมอ",
    art: <SlabArt />,
  },
  {
    title: "งานสะพาน",
    text: "คานคอนกรีตอัดแรงในงานโครงสร้างสะพาน",
    art: <BridgeArt />,
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

const menu = [
  { href: "#about", label: "เกี่ยวกับเรา" },
  { href: "#product", label: "สินค้าและราคา" },
  { href: "#faq", label: "คำถามที่พบบ่อย" },
  { href: "#contact", label: "ติดต่อเรา" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col pb-20 md:pb-0">
      {/* แถบบน */}
      <header className="fixed inset-x-0 top-0 z-20 border-b border-white/10 bg-background/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-2">
            <CoilIcon className="h-7 w-7 text-accent" />
            <span className="font-display text-lg font-bold tracking-wider">
              SIAM WIRE
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
            {menu.map((m) => (
              <a key={m.href} href={m.href} className="hover:text-foreground">
                {m.label}
              </a>
            ))}
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
        {/* ส่วนหัวเต็มจอ */}
        <section className="relative flex min-h-svh items-center overflow-hidden border-b border-line">
          <div className="blueprint absolute inset-0 opacity-60" />
          <CoilArt className="absolute -right-40 top-1/2 h-[46rem] w-[46rem] -translate-y-1/2 text-accent/40 md:-right-24" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-28">
            <p className="font-display text-lg italic text-accent-soft md:text-xl">
              &ldquo;Strength in every strand&rdquo;
            </p>
            <h1 className="mt-3 font-display text-hero font-extrabold tracking-tight">
              SIAM <span className="text-accent">WIRE</span>
            </h1>
            <p className="mt-6 max-w-2xl font-display text-2xl font-medium leading-snug md:text-3xl">
              ลวด PC Wire คุณภาพดี ราคาคุ้มค่า ส่งไว
              <br className="hidden sm:block" />
              สำหรับโรงงานเสาคอนกรีตและงานสะพาน
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
                href="#product"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-8 py-4 text-lg font-bold hover:border-accent"
              >
                ดูสินค้าและราคา
              </a>
            </div>
          </div>
          <a
            href="#about"
            aria-label="เลื่อนลง"
            className="absolute bottom-6 left-1/2 hidden h-10 w-6 -translate-x-1/2 justify-center rounded-full border-2 border-white/40 pt-2 md:flex"
          >
            <span className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
          </a>
        </section>

        {/* เกี่ยวกับเรา */}
        <section id="about" className="scroll-mt-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center">
            <div className="blueprint relative flex aspect-[4/3] items-center justify-center overflow-hidden border border-line bg-surface">
              <CoilArt className="h-4/5 w-4/5 text-accent" />
              <span className="absolute bottom-0 left-0 bg-accent px-4 py-2 font-display text-sm font-bold tracking-widest text-white">
                PC WIRE
              </span>
            </div>
            <div>
              <SectionTitle eyebrow="ABOUT US" title="เกี่ยวกับ Siam Wire" />
              <p className="mt-5 text-muted">
                Siam Wire จำหน่ายลวดอัดแรง PC Wire
                ให้กับโรงงานผลิตเสาคอนกรีตและผู้รับเหมางานสะพาน
                เราตั้งใจส่งลวดคุณภาพดีในราคาที่คุ้มค่า และส่งถึงมือลูกค้าให้เร็วที่สุด
                ไลน์ผลิตของคุณจะได้เดินต่อได้ไม่สะดุด
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {highlights.map((h) => (
                  <div
                    key={h.title}
                    className="flex items-start gap-3 border border-line bg-surface p-4"
                  >
                    <span className="mt-0.5 shrink-0 text-accent">{h.icon}</span>
                    <span>
                      <span className="block font-display font-bold">
                        {h.title}
                      </span>
                      <span className="block text-sm text-muted">{h.text}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* สินค้าและราคา */}
        <section
          id="product"
          className="scroll-mt-16 border-y border-line bg-surface"
        >
          <div className="mx-auto max-w-6xl px-4 py-20">
            <div className="text-center">
              <SectionTitle eyebrow="OUR PRODUCT" title="สินค้าและราคา" center />
              <p className="mx-auto mt-3 max-w-xl text-muted">
                ลวดอัดแรง PC Wire สำหรับงานคอนกรีตอัดแรงหลากหลายประเภท
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {applications.map((a) => (
                <div
                  key={a.title}
                  className="group overflow-hidden border border-line bg-surface-2 transition-colors hover:border-accent"
                >
                  <div className="blueprint flex h-36 items-center justify-center bg-background text-accent-soft transition-colors group-hover:text-accent">
                    {a.art}
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold">{a.title}</h3>
                    <p className="mt-1 text-sm text-muted">{a.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-6 border border-accent/50 bg-accent/10 p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <div>
                <p className="text-sm tracking-widest text-accent-soft">
                  PRESTRESSED CONCRETE WIRE
                </p>
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-muted">ราคาเริ่มต้น</span>
                  <span className="font-display text-6xl font-extrabold leading-none">
                    24
                  </span>
                  <span className="pb-1 text-lg">บาท / กก.</span>
                </div>
                <p className="mt-2 text-sm text-muted">
                  ราคาขึ้นกับขนาดและปริมาณการสั่ง ทักไลน์เพื่อรับใบเสนอราคา
                </p>
              </div>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-bold text-white hover:bg-accent-strong"
              >
                <ChatIcon />
                ขอใบเสนอราคาทางไลน์
              </a>
            </div>
          </div>
        </section>

        {/* คำถามที่พบบ่อย */}
        <section id="faq" className="mx-auto max-w-3xl scroll-mt-16 px-4 py-20">
          <div className="text-center">
            <SectionTitle eyebrow="FAQ" title="คำถามที่พบบ่อย" center />
          </div>
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
              <div className="text-center">
                <SectionTitle eyebrow="CONTACT" title="ติดต่อเรา" center />
                <p className="mt-3 text-muted">
                  เวลาทำการ จันทร์–เสาร์ 08:00–17:00 น.
                </p>
              </div>
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
      <footer className="relative overflow-hidden border-t border-line bg-surface">
        <CoilArt className="absolute -bottom-32 -right-24 h-80 w-80 text-line" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <CoilIcon className="h-7 w-7 text-accent" />
              <span className="font-display text-lg font-bold tracking-wider">
                SIAM WIRE
              </span>
            </div>
            <p className="mt-3 text-sm text-muted">
              ลวดอัดแรง PC Wire สำหรับโรงงานเสาคอนกรีตและงานสะพาน
            </p>
          </div>
          <div>
            <p className="font-display font-bold">เมนู</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {menu.map((m) => (
                <li key={m.href}>
                  <a href={m.href} className="hover:text-foreground">
                    {m.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display font-bold">ติดต่อ</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  LINE: kenek3332
                </a>
              </li>
              <li>
                <a href={PHONE_URL} className="hover:text-foreground">
                  โทร: {PHONE_LABEL}
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  Facebook: Siam Wire
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative border-t border-line py-5 text-center text-xs text-muted">
          © 2026 Siam Wire. All rights reserved.
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

function SectionTitle({
  eyebrow,
  title,
  center,
}: {
  eyebrow: string;
  title: string;
  center?: boolean;
}) {
  return (
    <div>
      <p
        className={`flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-accent-soft ${
          center ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-accent" />
        {eyebrow}
        {center && <span className="h-px w-8 bg-accent" />}
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

/* ===== ภาพประกอบ ===== */
function CoilArt({ className }: { className?: string }) {
  const rings = [95, 85, 75, 65, 55, 45, 35];
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      {rings.map((r, i) => (
        <circle
          key={r}
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={i % 2 ? 1 : 3}
          strokeDasharray={i % 3 === 1 ? "2 4" : undefined}
        />
      ))}
      <circle cx="100" cy="100" r="22" fill="currentColor" opacity="0.15" />
    </svg>
  );
}

const artProps = {
  viewBox: "0 0 120 80",
  className: "h-24 w-36",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  "aria-hidden": true,
};

function PoleArt() {
  return (
    <svg {...artProps}>
      <path d="M60 6 L56 76 H64 Z" />
      <path d="M38 16 H82 M44 26 H76" />
      <path d="M58 20 V70 M62 20 V70" strokeDasharray="3 3" />
    </svg>
  );
}

function PileArt() {
  return (
    <svg {...artProps}>
      <path d="M10 30 H110" strokeDasharray="4 4" />
      {[30, 55, 80].map((x) => (
        <g key={x}>
          <rect x={x} y="14" width="10" height="56" />
          <path d={`M${x + 5} 18 V66`} strokeDasharray="3 3" />
        </g>
      ))}
    </svg>
  );
}

function SlabArt() {
  return (
    <svg {...artProps}>
      <rect x="10" y="30" width="100" height="20" />
      {[22, 40, 58, 76, 94].map((x) => (
        <circle key={x} cx={x} cy="40" r="5" />
      ))}
      <path d="M10 56 H110" strokeDasharray="3 3" />
    </svg>
  );
}

function BridgeArt() {
  return (
    <svg {...artProps}>
      <path d="M6 30 H114" />
      <path d="M6 38 H114" strokeDasharray="3 3" />
      <path d="M30 38 V74 M90 38 V74" />
      <path d="M30 38 Q60 60 90 38" />
      <path d="M4 74 H116" />
    </svg>
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
    <svg {...iconProps}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg {...iconProps}>
      <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <circle cx="7" cy="7" r="1.5" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg {...iconProps}>
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
