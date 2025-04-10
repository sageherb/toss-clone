function Article() {
  return (
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
  );
}

export default Article;
