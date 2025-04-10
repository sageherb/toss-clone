function Author() {
  return (
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
                누구나 경제 공부를 통해 더 나은 삶을 살 수 있도록 돕고자 경제
                교육 기업 래빗스쿨을 창업했다. 일상 재테커를 위한 안내서
                '래빗노트'를 발행하고, 핵심과 맥락을 이어주는 '신문읽기특훈'을
                진행하고 있다. 철학과 역사, 드라마를 좋아하며 성실과 노력은
                ‘운’이라는 이름으로 돌아오는 삶을 믿는다. 『나의 꿈 부자
                할머니』 『60일 완성 무조건 모이는 돈 버는 습관』 『어려웠던
                경제기사가 술술 읽힙니다』 등 다수의 책을 썼다.
              </p>
            </div>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Author;
