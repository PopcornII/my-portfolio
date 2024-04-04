
import React, {useState} from "react";
import "./Contact.css"

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email:"",
    message:"",
  });

  const [ShowAlert, setShowAlert] = useState(false);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData, 
      [name]:value,
    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch("https://getform.io/f/pboxmvla", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log("Form submitted successfully!");
        setShowAlert(true); //show alert after successful submission
        setFormData({
          // Clear form fields
          name:"",
          email:"",
          message: "",
        });
        setTimeout(() => setShowAlert(false), 4000);
        // Optionally, you can clear the form fields here
      } else {
        console.error("Form submission failed.");
      }
      
    }catch(error){
      console.error("Error", error);

    }
  }

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-blue-950 to-gray-500 p-4 text-white pt-auto"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full pt-10">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
        {ShowAlert && (
          <div className="alert">
            Thank For Chatting Me! I'll get back to you soon.
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
