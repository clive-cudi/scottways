import { useMemo, useState } from 'react';
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { HeadTag, Navbar, Carousel } from '@/components/reusable';
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
  ], []);
  const carouselItems = useMemo(() => [
    {
      label: "VLC",
      logo: "/images/vlc_logo.webp",
      link: ""
    },
    {
      label: "Samsung",
      logo: "/images/samsung_logo.webp",
      link: ""
    },
    {
      label: "Windows",
      logo: "/images/windows_logo.webp",
      link: ""
    },
    {
      label: "Android",
      logo: "/images/android_tv_logo.webp",
      link: ""
    },
    {
      label: "Apple TV",
      logo: "/images/apple_tv_logo.webp",
      link: ""
    },
    {
      label: "Fire TV",
      logo: "/images/fire_tv_logo.webp"
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
        <SupportedServices services={[...carouselItems]} />
        <About />
        <Contact />
      </div>
    </div>
  )
}
