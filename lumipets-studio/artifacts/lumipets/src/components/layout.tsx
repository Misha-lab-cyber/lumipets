import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { WhatsAppButton } from "./whatsapp-btn";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}