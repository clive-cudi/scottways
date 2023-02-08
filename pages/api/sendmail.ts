import { createTransport } from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";
import { validateEmail } from "@/utils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { email, phone, message }: {email: string, phone: string, message: string} = req.body;
        const mailTransporter = createTransport({
            service: "gmail",
            auth: {
                user: `${process.env.SENDER_EMAIL}`,
                pass: `${process.env.SENDER_PASS}`
            }
        });

        console.log({
            user: `${process.env.SENDER_EMAIL}`,
            pass: `${process.env.SENDER_PASS}`
        })

        if (!validateEmail(email)) {
            throw new Error("Invalid Email!!")
        }

        let mailDetails = {
            from: `${process.env.SENDER_EMAIL}`,
            to: `${process.env.RECEIVER_EMAIL}`,
            subject: "New Message. Scottways TV.",
            text: `
                Message from Scottways TV website.
                
                Details are as follows:
                    Email: ${email},
                    PhoneNumber: ${phone},
                    Message: ${message}
            `
        }

        mailTransporter.sendMail(mailDetails, (err, data) => {
            if (err) {
                throw err
            }

            console.log(data);
            
        })

        return res.status(200).json({
            success: true,
            message: "Message sent successfully!!"
        })
    } catch(e) {
        console.log(e);
        return res.status(400).json({
            success: false,
            message: "Couldn't send message!!"
        })
    }
}