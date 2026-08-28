
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between p-4">

          <div>
            <img className="w-50" src="/images/logo/EnvellUz_watermark_20250822_114611_0000.png" alt="Envell Uz Logo" />
          </div>

          <nav>
            <ul className="flex items-center gap-8">
              <li><a className="flex items-center gap-2.5" href="#"><i className="material-symbols-rounded">movie_info</i>About</a></li>
              <li><a className="flex items-center gap-2.5" href="#"><i className="material-symbols-rounded">sports_esports</i> Game</a></li>
              <li><a className="flex items-center gap-2.5" href="#"><i className="material-symbols-rounded">language</i> Contact</a></li>
              <li><a className="flex items-center gap-2.5" href="#"><i className="material-symbols-rounded">volunteer_activism</i> Support Us</a></li>
            </ul>
          </nav>

          <div>
            <a href="#">Gallery</a>
          </div>
        </div>    
      </div>
    </header>
  )
}

export default Header