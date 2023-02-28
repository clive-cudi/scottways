import styles from "@styles/pages/checkout/package.module.scss";
import { useState, useEffect } from "react";
import { PurchaseOptions } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/router";
import { Purchase_Props } from "./Purchase";
import { PurchaseSubscription } from "@/types";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

interface checkOut_Props {
    checkoutPackage: PurchaseSubscription[]
}

export const CheckOut = ({ checkoutPackage }: checkOut_Props): JSX.Element => {
    const router = useRouter();
    const [targetPackage, setTargetPackage] = useState<Purchase_Props>();
    const availablePackages = PurchaseOptions.map((opt) => opt.variant);
    const [{ isPending }] = usePayPalScriptReducer();
    
    useEffect(() => {
        if (router.query.package && checkoutPackage.length > 0) {
            if (!availablePackages.includes(checkoutPackage[0])) {
                router.push("/");
            }
            setTargetPackage(PurchaseOptions.filter((pOpt) => pOpt.variant.toLowerCase() === checkoutPackage[0])[0] ?? {});
        }
    }, [router]);


    return (
        <section className={`default_section ${styles.checkout_page_section}`}>
            {/* <div className={stylesLanding.landing_bg_filter}></div> */}
            <div className={styles.section_col}>
                <div className={styles.section_col_image}>
                    <Image src={targetPackage?.posterImg ?? ""} alt={`${targetPackage?.variant}`} fill={true} />
                </div>
                <div className={styles.section_col_package_info}>
                    <div className={styles.section_col_package_info_strip}>
                        <span className={styles.package_info_title}>Purchase Details</span>
                    </div>
                    <div className={styles.section_col_package_info_strip}>
                        <span>Package: </span>
                        <h3>{targetPackage?.label}</h3>
                    </div>
                    <div className={styles.section_col_package_info_strip}>
                        <span>Price in USD: </span>
                        <h3>{targetPackage?.amount}</h3>
                    </div>
                    <div className={`${styles.section_col_package_info_strip} ${styles.package_info_feature_list}`}>
                        <span>Features: </span>
                        <ul>
                            {targetPackage?.features.map((ftr, ix) => <li key={ix}>{ftr}</li>)}
                        </ul>
                    </div>
                    <div className={styles.section_col_package_info_strip}></div>
                </div>
            </div>
            <div className={styles.section_col}>
                {isPending ? <span className={styles.paypal_init_loading}>Initializing Paypal...</span> : <PayPalButtons className={styles.pay} />}
            </div>
        </section>
    )
}