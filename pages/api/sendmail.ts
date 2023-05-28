import { createTransport } from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";
import { validateEmail } from "@/utils";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

async function sendMailHelper(mailOptions: Mail.Options & {SENDER_EMAIL: string, SENDER_PASS: string}): Promise<SMTPTransport.SentMessageInfo> {
    return new Promise((resolve, reject) => {
        const mailTransporter = createTransport({
            service: "gmail",
            auth: {
                user: `${mailOptions.SENDER_EMAIL}`,
                pass: `${mailOptions.SENDER_PASS}`
            }
        });

        mailTransporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                reject(err);
            } else {
                resolve(info)
            }
        })
    })
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { email, phone, message, custom }: {email: string, phone: string, message: string, custom?: {
            status: boolean,
            sender: string,
            senderPass: string,
            receiver: string,
            message: string,
            subject: string
        }} = req.body;

        if (custom?.status === true) {
            // validate customization fields
            const {status, message, ...requiredFields } = custom;

            if (![...Object.values(requiredFields)].every(Boolean)) {
                return res.status(401).json({
                    success: false,
                    message: "Please provide all parameters for the custom send i.e Sender Email, Password and Subject"
                });
            }
        }
        const SENDER_EMAIL = `${custom?.status === true ? custom.sender : process.env.SENDER_EMAIL}`;
        const SENDER_PASS = `${custom?.status === true ? custom.senderPass : process.env.SENDER_PASS}`
        const RECEIVER_EMAIL = `${custom?.status === true ? custom.receiver : process.env.RECEIVER_EMAIL}`;
        const mailTransporter = createTransport({
            service: "gmail",
            auth: {
                user: `${SENDER_EMAIL}`,
                pass: `${SENDER_PASS}`
            }
        });

        console.log({
            user: `${SENDER_EMAIL}`,
            pass: `${SENDER_PASS}`
        });

        if (custom?.status === true) {
            let mailDetails = {
                from: `${SENDER_EMAIL}`,
                to: `${RECEIVER_EMAIL}`,
                subject: custom.subject,
                text: `${custom.message}`
            }
    
            // mailTransporter.sendMail(mailDetails, (err, data) => {
            //     if (err) {
            //         throw err
            //     }
    
            //     console.log(data);
                
            //     return res.status(200).json({
            //         success: true,
            //         message: "Message sent successfully!!",
            //         data
            //     })
            // });

            sendMailHelper({...mailDetails, SENDER_EMAIL: SENDER_EMAIL, SENDER_PASS: SENDER_PASS}).then((res_) => {
                console.log(res_);
                return res.status(200).json({
                            success: true,
                            message: "Message sent successfully!!",
                            data: res_
                        });
            }).catch((err) => {
                throw new Error(err);
            })
        }

        if (!custom?.status) {
            if (!validateEmail(email)) {
                throw new Error("Invalid Email!!")
            }
            let mailDetails = {
                from: `${SENDER_EMAIL}`,
                to: `${RECEIVER_EMAIL}`,
                subject: "New Message. Scottways TV.",
                text: `
                    Message from Scottways TV website.
                    
                    Details are as follows:
                        Email: ${email},
                        PhoneNumber: ${phone},
                        Message: ${message}
                `
            }

            sendMailHelper({...mailDetails, SENDER_EMAIL: SENDER_EMAIL, SENDER_PASS: SENDER_PASS}).then((res_) => {
                console.log(res_);
                return res.status(200).json({
                            success: true,
                            message: "Message sent successfully!!",
                            data: res_
                        });
            }).catch((err) => {
                throw new Error(err);
            })
        }
    } catch(e) {
        console.log(e);
        return res.status(400).json({
            success: false,
            message: "Couldn't send message!!"
        })
    }
}