import type { availablePayments } from "@customtypes/index";

export function mapPaymentVendorToIcon(vendor: availablePayments): string {
    switch (vendor) {
        case "american":
            return "/icons/american-express-icon.png";
        case "discover":
            return "/icons/discover-card-icon.png";
        case "mastercard":
            return "/icons/mastercard-icon.png";
        case "paypal":
            return "/icons/paypal-icon.png";
        case "visa":
            return "/icons/visa-icon.png";
    }
}