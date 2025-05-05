import "./globals.css";

export const metadata = {
  title: "OmniData Solutions",
  description: "Web-scale business data automation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white font-sans">
        {children}
      </body>
    </html>
  );
}
