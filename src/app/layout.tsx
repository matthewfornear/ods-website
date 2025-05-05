import "./globals.css";
import ThemeProvider from "./ThemeProvider";

export const metadata = {
  title: "OmniData Solutions",
  description: "Web-scale business data automation",
  icons: {
    icon: '/svg/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
