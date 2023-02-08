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
    SENDER_PASS: `${process.env.SENDER_PASS}`
  }
}

module.exports = nextConfig;
