import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Form = ({ selectedFan, handleDecrement, handleIncrement }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const datenow = new Date();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !address || !contactNumber) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(
        "https://script.google.com/macros/s/AKfycbximZs5hLA-Rl15H9_EoUVH5QyRsdyYbSt2LC2durxHcDoIKt9dk-4g38-JYADzGk-UeA/exec",
        new URLSearchParams({
          name,
          address,
          contactNumber,
          datenow,
          selectedFan
        }).toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      toast.success("Form Submitted Successfully");
      setName("");
      setAddress("");
      setContactNumber("");
    } catch (error) {
      alert("Error submitting form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="form-input" className="p-6 font-poppins bg-gray-200 mt-6">
      <div id="form-input" className="p bg-gray-200 mt-6">
        <h1 className="text-center text-2xl my-4">
          To Order, please fill up the form below
        </h1>

        <form
          className="flex p-8 bg-white rounded-md flex-col gap-6 mt-2"
          onSubmit={handleSubmit}
        >

          <img loading="lazy" src="https://m.media-amazon.com/images/I/61mpLVU15lL._AC_UF894,1000_QL80_.jpg" alt="Air cooler fan" />
          <div className="flex items-center justify-between">
            <label className="font-poppins font-bold" htmlFor="name">
              Quantity
            </label>

            <div className="flex justify-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleDecrement();
                }}
                className="border p-2 bg-[#DB4444] text-white sm:p-0 w-8 sm:w-8 rounded-l-md"
              >
                -
              </button>
              <p className="border w-8 flex justify-center place-items-center rounded-sm">
                {selectedFan}
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleIncrement();
                }}
                className="border w-8 sm:w-8 rounded-r-lg bg-[#DB4444] text-white"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="font-poppins font-bold">Price</p>
            <p className="text-green-600 font-bold font-poppins">Rs. {selectedFan*700}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-poppins font-bold">Delivery Price</p>
            <p className="text-green-600 font-bold font-poppins">{selectedFan == 1? 'Rs 100': 'Free'}</p>
          </div>
          <div className="flex flex-col">
            <label className="font-poppins" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              className="border-b border-red-500 placeholder:font-poppins font-poppins p-1 focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label  htmlFor="address">
              Address
            </label>
            <input
              id="address"
              placeholder="Enter your Address"
              className="border-b border-red-500 p-1 focus:outline-none focus:border-blue-500"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              placeholder="Enter your contact Number"
              id="contactNumber"
              className="border-b border-red-500 p-1 focus:outline-none focus:border-blue-500"
              type="number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className={`text-white bg-red-500 p-2 rounded-md ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
