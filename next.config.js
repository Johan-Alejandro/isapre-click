/** @type {import('next').NextConfig} */

const path = require("path");

// const API_URL = process.env.API_URL;
// const SITE_URL = process.env.SITE_URL;

const nextConfig = {
  publicRuntimeConfig: {
    env: {
      channel_id: process.env.CHANNEL_ID,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      seoName: process.env.SEO_NAME,
      location: process.env.LOCATION,
    },
  },
  trailingSlash: false,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "ultimatefitness.cl",
      "mundo-salud-store-3.mybigcommerce.com",
      "mundo-salud-store-2.mybigcommerce.com",
      "ultimatefitnessco.cdn.prismic.io",
      "ultimatefitness.cdn.prismic.io",
      "ultimatefitness.cdn.prismic.io/ultimatefitness",
      "picsum.photos",
      "bigcommerce.com",
      "cdn11.bigcommerce.com",
      "images.prismic.io",
      "mega.nz",
      "i.picsum.photos",
      "grupo-vita.mybigcommerce.com",
      "scontent.cdninstagram.com",
      "www.instagram.com",
      "res.cloudinary.com",
    ],
    formats: ["image/webp"],
    dangerouslyAllowSVG: true,
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  //   prependData: `@import "settings.module.scss";`,
  // },
};

module.exports = nextConfig;
