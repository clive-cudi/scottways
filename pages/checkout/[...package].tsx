import { useRouter } from "next/router";
import { PayPalScriptProvider, PayPalButtons, ReactPayPalScriptOptions } from "@paypal/react-paypal-js";

export default function CheckoutPage() {
    const router = useRouter();
    const checkoutPackage = router.query.package;
    const paypalOptions: ReactPayPalScriptOptions= {
        "client-id": process.env.PAYPAL_CLIENT_ID as string,
        "data-react-paypal-script-id": ""
    };

    return (
        <PayPalScriptProvider options={{"client-id": paypalOptions["client-id"]}}>
        <div className={`app`}>
            <div className={`content`}>
                <span>Package {`${checkoutPackage}`}</span>
                <PayPalButtons />
            </div>
        </div>
        </PayPalScriptProvider>
    )
}