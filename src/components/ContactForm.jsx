import React from "react"

const ContactForm = () => (
  <div className="container">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="post" data-netlify-honeypot="bot-field" data-netlify="true" name="contact">
          
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
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                Email
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" type="email" placeholder="harryorford1@gmail.com"></input>
            </div>

            <div class="w-full md:w-2/3 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="subject">
                Subject
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="subject" type="text" placeholder="Subject Of Your Message"></input>
            </div>

            <div class="w-full md:w-2/3 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Message">
                Message
              </label>
              <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="message" type="text" placeholder="Your Message"></textarea>
            </div>

            <div class="w-full md:w-2/3 px-3">
              <div class="md:w-1/3"></div>             
                <div class="md:w-2/3">
                  <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                    Submit Message
                  </button>
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact" />
                </div>
            </div>

          </div>

        </form>
  </div>
        )

export default ContactForm
