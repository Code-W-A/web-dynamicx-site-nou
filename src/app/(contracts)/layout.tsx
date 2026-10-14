import type { Metadata } from "next";
import "./contracts.css";

export const metadata: Metadata = {
  title: "Contracte | Web Dynamicx",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  referrer: "no-referrer",
};
export default function ContractsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body>
        <div className="contracts-shell">
          <header className="brand">
            <span>WEB DYNAMICX</span>
            <span className="muted">Contracte</span>
          </header>
          <main>{children}</main>
          <footer className="muted">Web Dynamicx · Contracte online</footer>
        </div>
      </body>
    </html>
  );
}
