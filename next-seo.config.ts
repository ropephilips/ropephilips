import { NextSeoProps } from "next-seo";

const defaultSEOConfig: NextSeoProps = {
  title: "Ropephilips digital - web Apps, Digital Marketing Project management & Tech Solutions",
  titleTemplate: "%s | Ropephilips Digital",
  description: "Ropephilips delivers web app development, project management services , SEO & digital marketing, IT support, and lead generation services.",
  canonical: "https://ropephilips.vercel.app/",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ropephilips.vercel.app/",
    title: "Ropephilips Digital - Web apps, Project management & Tech Solutions",
    site_name: "Ropephilips Digital",
    description: "Ropephilips helps businesses grow with expert project management, web app development, SEO, and IT solutions.",
    images: [
    {  
      url: "https://ropephilips.vercel.app/og.png",
      width: 1200,
      height: 600,
      alt: "Ropephilips Digital",
    },
    ],
    siteName: "Ropephilips Digital", 
  },
   twitter: {
    handle: "@ropephilips",
    site: "@ropephilips",
    cardType: "summary_large_image",
  },
};
export default defaultSEOConfig;