export * from "./helpers";
import { Purchase_Props } from "@/components/sections";

export const PurchaseOptions: Purchase_Props[] = [
    {
      variant: "trial",
      amount: 1,
      connectionsTag: "36 hrs",
      features: [
        "Fast Customer Service",
        "98% uptime",
        "Over 15000 channels",
        "No IP lock",
        "FHD HD Channels"
      ],
      label: "Trial",
      paypalConfig: {
        api_key: "",
        btn_variant: "light",
      },
      supportedPayments: ['american', 'discover', 'paypal'],
      background: "",
      height: "",
      posterImg: "/images/remote-fp.jpg",
      parentDivProps: {id: "services"}
    },
    {
      variant: "basic",
      amount: 1,
      connectionsTag: "ONE CONNECTION",
      features: [
        "Fast Customer Service",
        "98% uptime",
        "Over 15000 channels",
        "No IP lock",
        "FHD HD Channels"
      ],
      label: "Basic (monthly package)",
      paypalConfig: {
        api_key: "",
        btn_variant: "dark",
      },
      supportedPayments: ['american', 'discover', 'paypal'],
      background: "",
      height: "",
      posterImg: "/images/remote-one.jpg"
    },
    {
      variant: "standard",
      amount: 1,
      connectionsTag: "TWO CONNECTIONS",
      features: [
        "Fast Customer Service",
        "98% uptime",
        "Over 15000 channels",
        "No IP lock",
        "FHD HD Channels"
      ],
      label: "Standard (monthly package)",
      paypalConfig: {
        api_key: "",
        btn_variant: "light",
      },
      supportedPayments: ['american', 'discover', 'paypal'],
      background: "",
      height: "",
      posterImg: "/images/remote-gray-scale.jpg"
    },
    {
      variant: "premium",
      amount: 1,
      connectionsTag: "3 CONNECTIONS (Best Seller)",
      features: [
        "Fast Customer Service",
        "98% uptime",
        "Over 15000 channels",
        "No IP lock",
        "FHD HD Channels"
      ],
      label: "Premium (monthly package)",
      paypalConfig: {
        api_key: "",
        btn_variant: "dark",
      },
      supportedPayments: ['american', 'discover', 'paypal'],
      background: "",
      height: "",
      posterImg: "/images/remote_1.webp"
    },
    {
      variant: "gold",
      amount: 1,
      connectionsTag: "4 CONNECTIONS",
      features: [
        "Fast Customer Service",
        "98% uptime",
        "Over 15000 channels",
        "No IP lock",
        "FHD HD Channels"
      ],
      label: "Gold (monthly package)",
      paypalConfig: {
        api_key: "",
        btn_variant: "light",
      },
      supportedPayments: ['american', 'discover', 'paypal'],
      background: "",
      height: "",
      posterImg: "/images/cinema-fp.jpg"
    }
  ]