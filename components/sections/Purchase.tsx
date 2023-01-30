import styles from "@styles/components/sections/purchase.module.scss";
import { SectionFrame, availablePayments } from "@/types";

export interface Purchase_Props extends SectionFrame {
    label: string,
    amount: number,
    supportedPayments: availablePayments[]
    connectionsTag: string,
    paypalConfig: {
        btn_variant: "dark" | "light",
        api_key: string
    },
    features: string[]
}

export const Purchase = ({}: Purchase_Props): JSX.Element => {
    return (
        <section className={`default_section`}>

        </section>
    )
}