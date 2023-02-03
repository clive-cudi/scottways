import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "@styles/components/sections/purchase.module.scss";
import type { SectionFrame, availablePayments, PurchaseSubscription } from "@customtypes/index";
import Image from "next/image";
import { Button } from "../reusable";
import { mapPaymentVendorToIcon } from "@/utils";

export interface Purchase_Props extends SectionFrame {
    label: string,
    variant: PurchaseSubscription
    amount: number,
    supportedPayments: availablePayments[]
    connectionsTag: string,
    paypalConfig: {
        btn_variant: "dark" | "light",
        api_key: string
    },
    features: string[]
    posterImg?: string
    parentDivProps?: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
}

export const Purchase = ({ label, variant, amount, supportedPayments, connectionsTag, paypalConfig, features, posterImg, parentDivProps }: Purchase_Props): JSX.Element => {
    return (
        <section className={`default_section ${styles.purchase_section_wrapper} ${styles[`variant_${variant}`]}`} {...parentDivProps}>
            <div className={styles.section_col}>
                <div className={styles.section_col_image}>
                    <Image src={posterImg ?? ""} alt={`${variant}`} fill={true} />
                </div>
            </div>
            <div className={styles.section_col}>
                <div className={styles.purchase_content}>
                    <div className={styles.purchase_label}>
                        <h2>{label}</h2>
                    </div>
                    <div className={styles.purchase_price}>
                        <h4>${amount}</h4>
                    </div>
                    <div className={styles.paypal_purchase}>
                        <Button variant={`regular_${paypalConfig.btn_variant}`}><Image src={mapPaymentVendorToIcon("paypal")} alt={"@"} height={20} width={20} />Buy Now</Button>
                    </div>
                    <div className={styles.supported_purchase_vendors}>
                        {supportedPayments.map((vendor, ix) => <span key={ix}><Image src={mapPaymentVendorToIcon(vendor)} alt={`@vendor_${vendor}_icon`} height={20} width={20} /></span>)}
                    </div>
                    <div className={styles.connections_tag_info}>
                        <span>{connectionsTag}</span>
                    </div>
                    <div className={styles.purchase_features}>
                        <ul>
                            {features.map((ftr, index) => <li key={index}>{ftr}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}