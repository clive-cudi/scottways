import styles from "@styles/components/sections/landing.module.scss";
import { SectionFrame } from "@/types";
import { Button } from "../reusable";
import bg_image from "../assets/scottways_landing_bg.webp";

interface Landing_Props extends SectionFrame {
    bannerMessage?: string
}

export const Landing = ({ bannerMessage }: Landing_Props): JSX.Element => {
    return (
        <section className={`default_section ${styles.landing}`} id={"home"}>
            <div className={styles.landing_wrapper} style={{backgroundImage: `url(${bg_image.src})`}}>
                <div className={styles.landing_bg_filter}></div>
                <div className={styles.landing_content}>
                    <div className={styles.landing_intro_block}>
                        <p>{bannerMessage ?? "The Greatest and latest shows out there."}<br />{bannerMessage ?? "Don't miss!"}</p>
                        <Button>Contact Us</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}