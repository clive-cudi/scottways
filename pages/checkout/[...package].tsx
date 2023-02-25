import { useRouter } from "next/router";

export default function CheckoutPage() {
    const router = useRouter();
    const checkoutPackage = router.query.package; 

    return (
        <div className={`app`}>
            <div className={`content`}>
                <span>Package {`${checkoutPackage}`}</span>
            </div>
        </div>
    )
}