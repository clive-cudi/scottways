export interface SectionFrame {
    height?: string | number;
    background?: string;
}

export type availablePayments = "paypal" | "mastercard" | "visa" | "discover" | "american";

export interface NavLink {
    label: string;
    link: string
    isActive: boolean
}

export type PurchaseSubscription = "trial" | "basic" | "standard" | "premium" | "gold"