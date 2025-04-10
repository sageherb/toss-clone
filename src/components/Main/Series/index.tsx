function Series() {
  return (
    <aside className="main__series" aria-label="오늘의 시리즈">
      <h2 className="series__heading heading">오늘의 시리즈</h2>
      <ul className="series">
        <li className="series__item">
          <a href="#" className="series__link">
            <img
              src="https://placehold.co/285x285"
              alt="시리즈 썸네일"
              className="series__image"
            />
            <div className="series__content">
              <div className="series__label">
                <img
                  src="/assets/icons/toss-icon.svg"
                  alt="토스 아이콘"
                  className="series__label-icon"
                />
                <span className="series__label-text">Series</span>
              </div>
              <h3 className="series__title">
                팬더스트리: 음악 산업을 재편하는 팬덤의 힘
              </h3>
              <p className="series__count">아티클 4개</p>
            </div>
          </a>
        </li>
        <li className="series__item">
          <a href="#" className="series__link">
            <img
              src="https://placehold.co/285x285"
              alt="시리즈 썸네일"
              className="series__image"
            />
            <div className="series__content">
              <span className="series__label">Series</span>
              <h3 className="series__title">아웃사이트</h3>
              <p className="series__count">아티클 4개</p>
            </div>
          </a>
        </li>
        <li className="series__item">
          <a href="#" className="series__link">
            <img
              src="https://placehold.co/285x285"
              alt="시리즈 썸네일"
              className="series__image"
            />
            <div className="series__content">
              <span className="series__label">Series</span>
              <h3 className="series__title">
                팬더스트리: 음악 산업을 재편하는 팬덤의 힘
              </h3>
              <p className="series__count">아티클 4개</p>
            </div>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Series;
