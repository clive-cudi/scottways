import { useRouter } from "next/router";
import { PayPalScriptProvider, PayPalButtons, ReactPayPalScriptOptions, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { PurchaseOptions } from "@/utils";
import { useEffect, useState } from "react";
import { PurchaseSubscription } from "@/types";
import { HeadTag, Navbar } from "@/components/reusable";
import bg_image from "@/components/assets/scottways_landing_bg.webp";
import stylesLanding from "@styles/components/sections/landing.module.scss";
import styles from "@styles/pages/checkout/package.module.scss";
import { Purchase_Props } from "@/components/sections";
import Image from "next/image";
import { CheckOut } from "@/components/sections";

export default function CheckoutPage() {
    const router = useRouter();
    const checkoutPackage = router.query.package as PurchaseSubscription[];
    const paypalOptions: ReactPayPalScriptOptions= {
        "client-id": process.env.PAYPAL_CLIENT_ID as string,
        "data-react-paypal-script-id": ""
    };
    const [targetPackage, setTargetPackage] = useState<Purchase_Props>();
    // const [{ isPending }] = usePayPalScriptReducer();
    const navLinks = [
        {
            label: "Home",
            link: "/#home",
            isActive: false
        },
        {
            label: "Services",
            link: "/#services",
            isActive: false
        },
        {
            label: "About",
            link: "/#about",
            isActive: false
        },
        {
            label: "Contact",
            link: "/#contact",
            isActive: false
        }
    ]

    return (
        <PayPalScriptProvider options={{"client-id": paypalOptions["client-id"]}}>
        <div className={`app`}>
            <HeadTag title={`Scottways ${router.query.package} package checkout.`} />
            <div className={`content`}>
                <Navbar navLinksOverride={navLinks} variant={"checkout"} className={styles.checkout_nav} />
                <CheckOut checkoutPackage={checkoutPackage} />
            </div>
        </div>
        </PayPalScriptProvider>
    )
}