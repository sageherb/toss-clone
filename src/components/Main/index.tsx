function Main() {
  return (
    <main className="main">
      <div className="main__layout">
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
        <section className="main__articles" aria-label="방금 올라온 아티클">
          <h2 className="articles__heading heading">방금 올라온 아티클</h2>
          <ul className="articles">
            <li className="articles__item">
              <a href="#" className="articles__link">
                <img
                  src="https://placehold.co/670x450"
                  alt="아티클 썸네일"
                  className="articles__image"
                />
                <span className="articles__category">토스가 필요한 순간</span>
                <h3 className="articles__title">
                  어떻게 하면 세금 환급 많이 받을까?
                </h3>
                <p className="articles__description">
                  연말정산과 종합소득세 신고로 세금을 돌려받는 이유
                </p>
                <time className="articles__date">2025.03.20</time>
              </a>
            </li>
            <li className="articles__item">
              <a href="#" className="articles__link">
                <img
                  src="https://placehold.co/670x450"
                  alt="아티클 썸네일"
                  className="articles__image"
                />
                <span className="articles__category">토스가 필요한 순간</span>
                <h3 className="articles__title">
                  어떻게 하면 세금 환급 많이 받을까?
                </h3>
                <p className="articles__description">
                  연말정산과 종합소득세 신고로 세금을 돌려받는 이유
                </p>
                <time className="articles__date">2025.03.20</time>
              </a>
            </li>
            <li className="articles__item">
              <a href="#" className="articles__link">
                <img
                  src="https://placehold.co/670x450"
                  alt="아티클 썸네일"
                  className="articles__image"
                />
                <span className="articles__category">토스가 필요한 순간</span>
                <h3 className="articles__title">
                  어떻게 하면 세금 환급 많이 받을까?
                </h3>
                <p className="articles__description">
                  연말정산과 종합소득세 신고로 세금을 돌려받는 이유
                </p>
                <time className="articles__date">2025.03.20</time>
              </a>
            </li>
          </ul>
        </section>
        <aside className="main__authors" aria-label="오늘의 작가">
          <h2 className="authors__heading heading">오늘의 작가</h2>
          <ul className="authors">
            <li className="authors__item">
              <a href="#" className="authors__link">
                <div className="authors__content">
                  <img
                    src="https://placehold.co/100x100"
                    alt="작가 이미지"
                    className="authors__image"
                  />
                  <h3 className="authors__name">박지수</h3>
                  <p className="authors__description">
                    누구나 경제 공부를 통해 더 나은 삶을 살 수 있도록 돕고자
                    경제 교육 기업 래빗스쿨을 창업했다. 일상 재테커를 위한
                    안내서 '래빗노트'를 발행하고, 핵심과 맥락을 이어주는
                    '신문읽기특훈'을 진행하고 있다. 철학과 역사, 드라마를
                    좋아하며 성실과 노력은 ‘운’이라는 이름으로 돌아오는 삶을
                    믿는다. 『나의 꿈 부자 할머니』 『60일 완성 무조건 모이는 돈
                    버는 습관』 『어려웠던 경제기사가 술술 읽힙니다』 등 다수의
                    책을 썼다.
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </main>
  );
}

export default Main;
