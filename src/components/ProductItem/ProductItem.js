import styles from "./ProductItem.module.scss";

export const ProductItem = ({ item }) => {
  return (
    <article className={styles.productitem}>
      <div className={styles.productitem__image_wrap}>
        <img
          src={item.image}
          srcSet={`${item.image2x} 2x`}
          className={styles.productitem__image}
          alt={item.title}
        />
      </div>
      <span className={styles.productitem__tag}>{item.tag}</span>
      <h3 className={styles.productitem__title}>{item.title}</h3>
      <div className={styles.productitem__info}>
        <h6 className={styles.productitem__author}>{item.author}</h6>
        <span className={styles.productitem__date}>{item.date}</span>
        <span className={styles.productitem__views}>{item.views}</span>
      </div>
      <p className={styles.productitem__description}>{item.decription}</p>
    </article>
  );
};

export default ProductItem;
