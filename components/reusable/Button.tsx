import React, { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import styles from "@styles/components/reusable/button.module.scss";

type button_variant = "regular_dark" | "regular_light";

interface Button_Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    label?: string
    variant?: button_variant
}

export const Button = ({ children, label, variant, ...utilProps }: Button_Props) => {
    return (
        <button className={`${styles.custom_btn} ${styles[`variant_${variant}`]}`} {...utilProps}>
            {children ?? label}
        </button>
    )
}