import { useMemo, useState } from 'react';
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { HeadTag, Navbar } from '@/components/reusable';
import { Landing, About, Contact, Purchase, SupportedServices, Purchase_Props } from '@/components/sections';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);
  const purchaseProps = useMemo<Purchase_Props[]>(() => [
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
      height: ""
    },
    {
      variant: "basic",
      amount: 1,
      connectionsTag: "36 hrs",
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
      height: ""
    },
    {
      variant: "standard",
      amount: 1,
      connectionsTag: "36 hrs",
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
      height: ""
    },
    {
      variant: "premium",
      amount: 1,
      connectionsTag: "36 hrs",
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
      height: ""
    },
    {
      variant: "gold",
      amount: 1,
      connectionsTag: "36 hrs",
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
      height: ""
    }
  ], [])

  return (
    <div className={`app`}>
      <HeadTag />
      <div className={`content`} onLoad={() => {
        setIsContentLoaded(true);
      }} id={"app_content"}>
        <Navbar isDOMReady={isContentLoaded} />
        <Landing />
        {purchaseProps.map((purchase_domain, index) => <Purchase key={index} {...purchase_domain} />)}
        <About />
        <Contact />
        <SupportedServices />
      </div>
    </div>
  )
}
