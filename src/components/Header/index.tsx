function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__logo">
          <a href="/" className="header__logo-link">
            <img
              src="/assets/images/logo.png"
              alt="로고"
              className="header__logo-image"
            />
            <span className="sr-only">로고</span>
          </a>
        </h1>
        <div className="header__menu-group">
          <nav className="header__nav" aria-label="메인 메뉴">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  토스피드 에디션
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  금융의 모든 것
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  토스의 모든 것
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  금융 계산기
                </a>
              </li>
            </ul>
          </nav>
          <button className="header__search" aria-label="검색">
            <img
              src="/assets/icons/search.svg"
              alt="검색 아이콘"
              className="header__search-icon"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
