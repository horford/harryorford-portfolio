import React from "react"
import Contact from "../components/ContactForm"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const TestContactPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="TestContact" description="Sample description" />
    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Contact Form
            </h1>
            <br>
            </br>
                <div className="container">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="post" data-netlify-honeypot="bot-field" data-netlify="true" name="testcontact">
                
                    <div class="flex flex-wrap -mx-3 mb-6">
                    
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="first-name">
                        First Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="first-name" type="text" placeholder="Harry" />
                    </div>
                
                    <div class="w-full md:w-1/3 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="last-name">
                        Last Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="last-name" type="text" placeholder="Orford" />
                    </div>

                    <div class="w-full md:w-2/3 px-3">
                    <div class="md:w-1/3"></div>             
                        <div class="md:w-2/3">
                        <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                </div>
            </div>

          </div>

        </form>
  </div>
          </div>
        </div>   
      </div>
    </div>
  </Layout>
)

export default TestContactPage

