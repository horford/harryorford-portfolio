import React from "react"
import Contact from "../components/ContactForm"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const ContactPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="Contact" description="Sample description" />
    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <div className="container">
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Contact Form
              </h1>
              <br>
              </br>
            <div/>
            <Contact />
          </div>
        </div>   
      </div>
    </div>
  </Layout>
)

export default ContactPage

