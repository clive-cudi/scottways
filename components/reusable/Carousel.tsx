import { useEffect } from "react";
import styles from "@styles/components/reusable/carousel.module.scss";

interface CarouselProps {
    items: JSX.Element[];
    autoscroll?: boolean;
    scrollOrientation?: "forward" | "reverse";
    autoscrollTimeout?: number
}

export const Carousel = ({ items, autoscroll, scrollOrientation, autoscrollTimeout}: CarouselProps): JSX.Element => {
    return (
        <div className={styles.carousel}>
            <div className={styles.carousel_content}>
                {items.map((itm) => itm)}
            </div>
        </div>
    )
}