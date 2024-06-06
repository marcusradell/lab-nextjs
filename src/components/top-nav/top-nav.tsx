const Brand = () => "Monadium";

const HomeLink = () => "Home";

const Media = () => "Media";

const Contact = () => "Contact";

export const TopNav = () => (
  <nav className="flex">
    <Brand />
    <ul className="flex">
      <li>
        <HomeLink />
      </li>
      <li>
        <Media />
      </li>
      <li>
        <Contact />
      </li>
    </ul>
  </nav>
);
