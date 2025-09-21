import React from "react";
import Grocery from "../../assets/grocery.png";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Form } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-[90%] h-full mx-auto px-8 mt-15 py-10 md:gap-15">
      {/* Image Div  */}
      <div className="hidden md:flex w-[40%] h-full justify-center items-center">
        <img src={Grocery} />
      </div>

      {/* Content div  */}
      <div className="bg-zinc-100 flex flex-col md:max-w-[60%]  p-5 gap-5 rounded-xl shadow-sm">
        <Heading highlight="Contact" heading="Us"/>

        {/* Input Form  */}
        <div className="flex flex-col md:flex-row gap-15">
          <Form className="">
            <p className="text-zinc-600 text-sm font-semibold">
              Enter Your Full Name
            </p>
            <input
              type="text"
              name="text"
              id="text"
              autoComplete="off"
              placeholder="Full Name"
              className="h-10 w-full px-3 flex-1 bg-zinc-200 focus:outline-none rounded-lg text-sm placeholder:text-gray-400"
            />

            <p className="text-zinc-600 text-sm font-semibold mt-5">
              Enter Your Email
            </p>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Email Address"
              className="h-10 w-full px-3 flex-1 bg-zinc-200 focus:outline-none rounded-lg text-sm placeholder:text-gray-400"
            />

            <p className="text-zinc-600 text-sm font-semibold mt-5">
              Write Your Massege
            </p>
            <textarea
              name="message"
              placeholder="Message"
              className="h-20 w-full px-3 pt-2 bg-zinc-200 focus:outline-none rounded-lg text-sm resize-none placeholder:text-gray-400 mb-5"
            ></textarea>

            <Button content="Submit" />
          </Form>
          
            {/* Contact Info */}
          <div className="flex flex-col p-5 gap-5">
            <div>
                <h4 className="text-zinc-800 text-lg">Contact</h4>    
                <p className="text-zinc-600 text-sm">xyz@gmail.com</p>
            </div>
            
            <div>
                <h4 className="text-zinc-800 text-lg">Based In</h4>    
                <p className="text-zinc-600 text-sm">Haldwani, <br /> Uttarakhand</p>
            </div>

            <div className="flex w-30 justify-between text-xl">
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
            </div>
 
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
