import type { availablePayments } from "@customtypes/index";
import { EMAIL_REGEX } from "./constants";

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

export const validateEmail = (email: string) => {
    return email ? email.match(
        EMAIL_REGEX
    ) : null;
};

// export async function sendMailHelper(mailOptions: Mail.Options & {SENDER_EMAIL: string, SENDER_PASS: string}): Promise<SMTPTransport.SentMessageInfo> {
//     return new Promise((resolve, reject) => {})
// }


export { EMAIL_REGEX } from "./constants";