/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "source.unsplash.com"
    ]
  },
  env: {
    SENDER_EMAIL: `${process.env.SENDER_EMAIL}`,
    SENDER_PASS: `${process.env.SENDER_PASS}`,
    RECEIVER_EMAIL: `${process.env.RECEIVER_EMAIL}`,
    SANDBOX_ACC: `${process.env.SANDBOX_ACC}`,
    PAYPAL_CLIENT_ID: `${process.env.PAYPAL_CLIENT_ID}`,
    PAYPAL_CLIENT_SECRET: `${process.env.PAYPAL_CLIENT_SECRET}`,
    DEFAULT_REDIRECT_PAYPAL: `${process.env.DEFAULT_REDIRECT_PAYPAL}`
  }
}

module.exports = nextConfig;
