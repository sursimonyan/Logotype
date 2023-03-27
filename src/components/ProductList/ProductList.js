import cn from "classnames";
import ProductItem from '../ProductItem/ProductItem';
import { ProductListData } from '../../data/data';

import styles from './ProductList.module.scss';

export const ProductList = () => {
    return (
        <section className={cn(styles.productlist, "container")}>
            {ProductListData.length ? ProductListData.map((item) => (
                <ProductItem item={item} key={item.id} />
            )) : null}
        </section>
    );
};
