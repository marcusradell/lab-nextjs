const Brand = () => "Monadium";

const HomeLink = () => "Home";

const Media = () => "Media";

const Contact = () => "Contact";

export default function Home() {
  return (
    <main className="">
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
      <div className="container">container</div>
      <footer>footer</footer>
    </main>
  );
}
