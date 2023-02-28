import { useMemo, useState } from 'react';
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { HeadTag, Navbar, Carousel } from '@/components/reusable';
import { Landing, About, Contact, Purchase, SupportedServices, Purchase_Props } from '@/components/sections';
import { PurchaseOptions } from '@/utils';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);
  const purchaseProps = useMemo<Purchase_Props[]>(() => PurchaseOptions, []);
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
