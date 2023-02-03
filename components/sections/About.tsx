import styles from "@styles/components/sections/about.module.scss";
import { SectionFrame } from "@/types";

interface About_Props extends SectionFrame {}

export const About = ({}: About_Props): JSX.Element => {
    return (
        <section className={`default_section ${styles.about}`} id={"about"}>
            <div className={styles.about_content}>
                <div className={styles.about_header}>
                    <h2>WHAT MAKES OUR SERVICE THE BEST.</h2>
                </div>
                <div className={styles.about_info_col}>
                    <p>Great support system from our team at any time.</p>
                </div>
                <div className={styles.about_info_col}>
                    <p>Multiple auto updates so that you don't miss out</p>
                </div>
                <div className={styles.about_info_col}>
                    <p>Service automations to avoid interruptions</p>
                </div>
                <div className={styles.about_info_col}>
                    <p>$* Hr refund policy</p>
                </div>
            </div>
        </section>
    )
}