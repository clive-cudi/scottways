import type { SectionFrame } from "@/types"

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
        <section className={`default_section`}>

        </section>
    )
}