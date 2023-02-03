import styles from "@styles/components/reusable/carousel.module.scss";
import React from "react";

interface CarouselItemWrapper_Props {
    children?: React.ReactNode
}

export const CarouselItemWrapper = ({ children }: CarouselItemWrapper_Props): JSX.Element => {
    return (
        <div className={styles.carousel_item_wrapper}>
            {children}
        </div>
    )
}