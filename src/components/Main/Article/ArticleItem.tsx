import type { ArticleItem } from "../../../types/types";

function ArticleItem({
  imageUrl,
  altText = "아티클 썸네일",
  category,
  title,
  description,
  date,
  link,
}: Readonly<ArticleItem>) {
  return (
    <li className="articles__item">
      <a href={link} className="articles__link">
        <img src={imageUrl} alt={altText} className="articles__image" />
        <span className="articles__category">{category}</span>
        <h3 className="articles__title">{title}</h3>
        <p className="articles__description">{description}</p>
        <time className="articles__date">{date}</time>
      </a>
    </li>
  );
}

export default ArticleItem;
