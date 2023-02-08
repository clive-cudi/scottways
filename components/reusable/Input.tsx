import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "@styles/components/reusable/input.module.scss";

interface Input extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    withIcon?: {
        status: boolean;
        icon: JSX.Element
    }
}

export const Input = ({ className, withIcon, ...utilProps }: Input) => {
    return (
        <div className={`${styles.input_wrapper} ${className}`}>
            {withIcon?.status === true ? <span className={styles.input_icon}>{withIcon.icon}</span> : null}
            <input {...utilProps} />
        </div>
    )
}