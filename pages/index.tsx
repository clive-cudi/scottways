import { useMemo } from 'react';
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { HeadTag } from '@/components/reusable';
import { Landing, About, Contact, Purchase, SupportedServices, Purchase_Props } from '@/components/sections';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const purchaseProps = useMemo<Purchase_Props[]>(() => [
    {
      amount: 1,
      connectionsTag: "36 hrs",
      features: ["_", ")__", "))"],
      label: "Trial",
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
      <div className={`content`}>
        <Landing />
        <About />
        <Contact />
        <Purchase {...purchaseProps[0]} />
        <SupportedServices />
      </div>
    </div>
  )
}
