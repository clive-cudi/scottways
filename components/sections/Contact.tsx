import styles from "@styles/components/sections/contact.module.scss";
import { SectionFrame } from "@/types";
import { Input, Button } from "../reusable";
import Image from "next/image";
import React, { useState, ChangeEvent } from "react";
import axios from "axios";

interface Contact_Props extends SectionFrame {}

export const Contact = ({}: Contact_Props): JSX.Element => {
    const [contactFormData, setContactFormData] = useState({
        email: "",
        phone: "",
        message: ""
    });

    function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        const name = e.target.name;
        const input_type = e.target.type;

        const value = (type: string): string => {
            switch (type) {
                default:
                    return e.target.value;
            }
        }

        setContactFormData((prev) => {
            return {
                ...prev,
                [name]: value(input_type)
            }
        })
    };

    function handleSubmit() {
        const { phone, ...requiredData } = contactFormData; 
        if ([...Object.values(requiredData)].every(Boolean)) {
            console.log("Contact Form Data: ", contactFormData);
            axios.post("/api/sendmail", {...contactFormData}).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <section className={`default_section ${styles.contact}`} id={"contact"}>
            <div className={styles.contact_content}>
                <div className={styles.contact_strip}>
                    <h2>Contact Us.</h2>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <div className={styles.contact_strip}>
                        <Input type={"email"} placeholder={"Enter Email"} name={"email"} onChange={handleInputChange} withIcon={{status: true, icon: <Image src={"/icons/mail-icon.png"} alt={"@"} height={20} width={20} />}} />
                    </div>
                    <div className={styles.contact_strip}>
                        <Input type={"tel"} placeholder={"Enter Phone"} name={"phone"} onChange={handleInputChange} withIcon={{status: true, icon: <Image src={"/icons/phone-icon.png"} alt={"@"} height={20} width={20} />}} />
                    </div>
                    <div className={styles.contact_strip}>
                        <textarea placeholder={"Enter Message"} name={"message"} onChange={handleInputChange} ></textarea>
                    </div>
                    <div className={styles.contact_strip}>
                        <Button type={"submit"} variant={"regular_dark"} onClick={(): void => {handleSubmit()}}>Submit</Button>
                    </div>
                </form>
            </div>
        </section>
    )
}