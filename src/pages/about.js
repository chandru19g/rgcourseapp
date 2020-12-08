import React from "react"
import { graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/reuseable/HeroSection"
import Infoblock from "../components/reuseable/Infoblock"
import DualInfoBlock from "../components/reuseable/DualInfoBlock";
import TeamPhotosection from "../components/About/TeamPhotosection";

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
      img = {data.img.childImageSharp.fluid}
      title = "About LearnCodeOnline"
      subtitle = ""
      heroclass ="about-background"
    />
    <DualInfoBlock heading="A message from CEO" />
    <Infoblock heading="About Vision" />
    <TeamPhotosection />
  </Layout>
)

export const query = graphql `
{
  img: file(relativePath: { eq: "about.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage
