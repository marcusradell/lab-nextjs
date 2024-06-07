export function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <nav>
        <h4 className="footer-title">Pages</h4>
        <a href="/" className="link link-hover">
          Home
        </a>
        <a href="/media" className="link link-hover">
          Media
        </a>
        <a href="/contact" className="link link-hover">
          Contact
        </a>
      </nav>

      <nav>
        <h4 className="footer-title">Copyright</h4>
        <span>
          I waive all copyright interests and place this content in the public
          domain, making it free for use by anyone for any purpose.
        </span>
        <span>Copyfree Marcus Rådell 2024</span>
      </nav>
    </footer>
  );
}
