const Brand = () => (
  <div className="navbar-start">
    <a className="btn btn-ghost text-xl" href="/">
      Monadium
    </a>
  </div>
);

type Props = { text: string; href: string };

const NavLink = ({ text, href }: Props) => (
  <li>
    <a href={href}>{text}</a>
  </li>
);

export const TopNav = () => (
  <nav className="navbar bg-base-100">
    <Brand />
    <div className="navbar-center">
      <ul className="menu menu-horizontal">
        <NavLink href="/" text="Home" />
        <NavLink href="/media" text="Media" />
        <NavLink href="/contact" text="Contact" />
      </ul>
    </div>
  </nav>
);
