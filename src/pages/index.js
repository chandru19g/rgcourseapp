import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/reuseable/HeroSection"
import Infoblock from "../components/reuseable/Infoblock"
import DualInfoBlock from "../components/reuseable/DualInfoBlock"
import Coursecart from "../components/Cart/Coursecart"
import Bundlecart from "../components/Cart/Bundlecart"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I write code"
      subtitle=""
      heroclass="hero-background"
    />
    <Infoblock heading="About Us" />
    <Coursecart courses={data.courses} />
    <DualInfoBlock heading="Our Team" />
    <Bundlecart bundles={data.bundle} />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    courses: allContentfulCourses {
      edges {
        node {
          id
          title
          price
          description {
            description
          }
          category
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
    bundle: allContentfulBundle {
      edges {
        node {
          id
          title
          price
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
