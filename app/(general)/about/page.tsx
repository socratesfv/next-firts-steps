import { Metadata } from "next";


export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO',
 keywords: 'seo, about, ',

};

export default function AboutPage(){

  return(
    <>
    <p className="text-5xl">About Page</p>
    </>
  )
}