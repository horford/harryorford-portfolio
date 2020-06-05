import { graphql } from "gatsby"
import React from "react"
import Contact from "../components/ContactForm"
import Layout from "../layouts/Layout"
import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"
import ContactForm from "../components/ContactForm"

const ContactPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="Contact" description="Sample description" />

    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Contact Form
            </h1>
            <br>
            </br>
            <Contact />
          </div>
        </div>   
      </div>
    </div>
  </Layout>
)

export default ContactPage

export const query = graphql`
  query {
    harry: file(relativePath: { eq: "harry.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 480, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
