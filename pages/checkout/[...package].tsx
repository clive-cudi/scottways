import { useRouter } from "next/router";
import { PayPalScriptProvider, PayPalButtons, ReactPayPalScriptOptions } from "@paypal/react-paypal-js";
import { PurchaseOptions } from "@/utils";
import { useEffect } from "react";
import { PurchaseSubscription } from "@/types";
import { HeadTag, Navbar } from "@/components/reusable";
import bg_image from "@/components/assets/scottways_landing_bg.webp";
import stylesLanding from "@styles/components/sections/landing.module.scss";
import styles from "@styles/pages/checkout/package.module.scss";

export default function CheckoutPage() {
    const router = useRouter();
    const checkoutPackage = router.query.package as PurchaseSubscription[];
    const paypalOptions: ReactPayPalScriptOptions= {
        "client-id": process.env.PAYPAL_CLIENT_ID as string,
        "data-react-paypal-script-id": ""
    };
    const availablePackages = PurchaseOptions.map((opt) => opt.variant);
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

    useEffect(() => {
        if (router.query.package && checkoutPackage.length > 0) {
            if (!availablePackages.includes(checkoutPackage[0])) {
                router.push("/");
            }
        }
    }, [])

    return (
        <PayPalScriptProvider options={{"client-id": paypalOptions["client-id"]}}>
        <div className={`app`}>
            <HeadTag title={`Scottways ${router.query.package} package checkout.`} />
            <div className={`content`}>
                <Navbar navLinksOverride={navLinks} variant={"checkout"} />
                <section className={`default_section ${stylesLanding.landing}`}>
                    {/* <div className={stylesLanding.landing_bg_filter}></div> */}
                    <div className={styles.section_col}></div>
                    <div className={styles.section_col}>
                        <div className={stylesLanding.landing_content}>
                            <span>Package {`${checkoutPackage}`}</span>
                            <PayPalButtons />
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </PayPalScriptProvider>
    )
}