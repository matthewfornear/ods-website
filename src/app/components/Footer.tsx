import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="flex items-center justify-center flex-wrap gap-2 text-center w-full">
        &copy; {new Date().getFullYear()} OmniData Solutions. All rights reserved.
        <span className="mx-2">|</span>
        <Link href="/eua" aria-label="End User Agreement">End User Agreement</Link>
        <span className="mx-2">|</span>
        <Link href="/privacy" aria-label="Privacy Policy">Privacy Policy</Link>
        <span className="mx-2">|</span>
        <span className="footer-social flex items-center gap-2 ml-2">
          <a href="https://x.com/fixitorgotojail" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ display: 'inline', verticalAlign: 'middle' }}><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.6 1.64.96c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.82-.08.55 1.7 2.16 2.94 4.07 2.97A9.05 9.05 0 010 21.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z"/></svg>
          </a>
          <a href="https://github.com/matthewfornear" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ display: 'inline', verticalAlign: 'middle' }}><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>
          </a>
          <a href="https://open.spotify.com/artist/0xzaKcF7uwfK3tlE0n5XaU?si=FLleO_WSQGGiAAWe0Jbf0g" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'inline', verticalAlign: 'middle' }}>
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
} 