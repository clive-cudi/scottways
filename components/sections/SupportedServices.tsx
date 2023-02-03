import type { SectionFrame } from "@/types";
import styles from "@styles/components/sections/supportedServices.module.scss";
import { CarouselItemWrapper } from "../reusable/CarouselItemWrapper";
import { Carousel } from "../reusable";
import Image from "next/image";

export interface SupportedServices_Props extends SectionFrame {
    services: {
        label: string,
        logo: string,
        link?: string
    }[]
    carouselConfig?: {
        elementTimeout?: number
    }
}

export const SupportedServices = ({ services, carouselConfig, background, height }: SupportedServices_Props ): JSX.Element => {
    return (
        <section className={`default_section ${styles.supported_services}`}>
            <div className={styles.supported_services_content}>
                <Carousel items={services.map((service__, index) => <CarouselItemWrapper key={index}><Image src={service__.logo} alt={service__.label} fill={true} onClick={() => {}} /></CarouselItemWrapper>)} />
            </div>
        </section>
    )
}