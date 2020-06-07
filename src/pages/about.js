import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"
import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="Sample description" />

    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              About me
            </h1>
          <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mt-4 leading-loose">
            My name is Harry and I'm a graduate from Falmouth University where I studied a BA Animation & 
            Visual Effects degree and I'm currently working towards being an FX artist. 
            My software specialities are as follows; Houdini, Maya, Renderman, Arnold, Nuke.
              <br />
              <br />
              I'm also currently learning C++ and Python basics. I have a strong background in live action compositing. 
              I've also had the privilege of being able to use a wide range of different cameras at university which includes the Blackmagic cameras and Red Cinema cameras. 
              This has allowed me to collect a wide range of stock footage for personal use in the future.
              <br />
              <br />
              I'd be more than happy to hear from you:
              <br />
              <a
                href="mailto:harryorford1@gmail.com"
                className="border-b border-gray-500 hover:border-blue-600 hover:text-blue-600"
              >
                harryorford1@gmail.com
              </a>
            </div>
            <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
            <Img
              fluid={data.harry.childImageSharp.fluid}
              alt="John Doe"
              className="rounded-md shadow-md"
            />
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Newsletter />
  </Layout>
)

export default AboutPage

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
