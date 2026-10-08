const Header = () => {
  return (
    <header className="bg-background">
      <div className="container">
        <div className="flex items-center justify-between p-4">
          <div>
            <a href="#">
              <img
                className="w-70"
                src="/images/logo/EnvellUz_watermark_20250822_114611_0000.png"
                alt="Envell Uz Logo"
              />
            </a>
          </div>

          <nav>
            <ul className="flex items-center gap-8">
              <li>
                <a
                  className="flex items-center gap-2.5 text-text-white font-medium bg-linear-to-t from-light-solid/40 from-1% to-accent/60 to-40% py-2.5 px-4 rounded-full hover:scale-105 trasnsition linear duration-50 text-shadow-lg/80 text-shadow-shadow/60 shadow-texts/10 shadow-md active:scale-100"
                  href="#"
                >
                  <i className="material-symbols-rounded">movie_info</i>About
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2.5 text-text-white font-medium bg-linear-to-t from-light-solid/40 from-1% to-accent/60 to-40% py-2.5 px-4 rounded-full hover:scale-105 trasnsition linear duration-50 text-shadow-lg/80 text-shadow-shadow/60 shadow-texts/10 shadow-md active:scale-100"
                  href="#"
                >
                  <i className="material-symbols-rounded">sports_esports</i>
                  Game
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2.5 text-text-white font-medium bg-linear-to-t from-light-solid/40 from-1% to-accent/60 to-40% py-2.5 px-4 rounded-full hover:scale-105 trasnsition linear duration-50 text-shadow-lg/80 text-shadow-shadow/60 shadow-texts/10 shadow-md active:scale-100"
                  href="#"
                >
                  <i className="material-symbols-rounded">language</i> Contact
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2.5 text-text-white font-medium bg-linear-to-t from-light-solid/40 from-1% to-accent/60 to-40% py-2.5 px-4 rounded-full hover:scale-105 trasnsition linear duration-50 text-shadow-lg/80 text-shadow-shadow/60 shadow-texts/10 shadow-md active:scale-100"
                  href="#"
                >
                  <i className="material-symbols-rounded">volunteer_activism</i>
                  Support Us
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center ">
            <a
              href="#"
              className="relative inline-block py-2.5 px-4 rounded-full font-medium text-text-white overflow-hidden bg-pnk bg-linear-to-b from-accent from-30% to-pnk/20 to-50% bg-size-[100%_200%] bg-top hover:bg-bottom hover:scale-105 transition-all duration-700 ease-in-out text-shadow-lg/80 text-shadow-shadow/60 shadow-texts/10 shadow-md active:scale-100"            >
              <i className="fa-solid fa-hashtag"></i> Gallery
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
