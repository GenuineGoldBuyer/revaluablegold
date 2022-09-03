import React, { useState } from 'react';
import Link from 'next/link';
import Container from './container';

export default function Contact() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Whatsappno, setWhatsappno] = useState('');
  const [Address, setAddress] = useState('');
  const [Code, setCode] = useState('');
  const [Quantity, setQuantity] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleWhatsAppNoChange(event) {
    setWhatsappno(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handleAddressChange(event) {
    setAddress(event.target.value);
  }
  function handleCodeChange(event) {
    setCode(event.target.value);
  }
  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const today = new Date();
    const date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    const time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const dateTime = date + ' ' + time;
    const response = fetch(`/api/g_sheet`, {
      method: 'POST',
      body: JSON.stringify({
        Timestamp: dateTime,
        name: Name,
        contact: Code + Whatsappno,
        address: Address,
        quantity: Quantity,
        description:
        'Customer Name: ' +
        Name +
        '\n' +
        'Address: ' +
        Address +
        '\n' +
        'Quantity: ' +
        Quantity,
        email: Email,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    alert('Form submitted. We will contact you shortly ;)');
    setCode('');
    setQuantity('');
    setName('');
    setAddress('');
    setEmail('');
    setWhatsappno('');
  }
  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl bg-gradient-to-tr from-purple-400 to-yellow-700">
        <form
          className="px-8 py-8 xs:px-2 xs:py-3 2xs:px-4 sm:px-4 bg-gradient-to-tr from-purple-400 to-yellow-700"
          method="POST"
          onSubmit={handleSubmit}
          target="hidden_iframe"
        >
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3 mb-6 xs:mb-0 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white font-bold mb-2 xs:mt-3"
                htmlFor="model"
              >
                Name
              </label>
              <div className="relative">
                <input
                  className="appearance-none block w-full  text-white  rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                  id="name"
                  type="text"
                  placeholder="Name"
                  onChange={handleNameChange}
                  value={Name}
                  autoComplete="off"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-2/5 px-3 mb-6 xs:mb-0 md:mb-0">
              <label
                htmlFor="Code"
                className="block uppercase tracking-wide text-white font-bold mb-2 xs:mt-3"
              >
                CODE
              </label>
              <input
                id="Code"
                name="entry.44547744"
                className="appearance-none block w-full  text-white  rounded py-3 xs:py-1 px-2 xs:px-0 leading-tight focus:outline-none  focus:border-gray-500"
                type="text"
                placeholder="Eg. +971, +27 ..."
                onChange={handleCodeChange}
                value={Code}
                required
              />
            </div>
            <div className="w-3/5 px-3 xs:px-3 mb-6 xs:mb-0 md:mb-0">
              <label
                htmlFor="whatsappno"
                className="block uppercase tracking-wide text-white font-bold mb-2 xs:mt-3"
              >
                WhatsApp
              </label>
              <input
                id="whatsappno"
                name="entry.902626710"
                className="block appearance-none w-full   text-white py-3 xs:py-1 px-4 xs:px-0 pr-8 rounded leading-tight focus:outline-none  focus:border-gray-500 "
                type="text"
                placeholder="WhatsApp No"
                onChange={handleWhatsAppNoChange}
                value={Whatsappno}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-6 xs:mb-0">
              <label
                className="block uppercase tracking-wide text-white font-bold mb-2 xs:mt-3"
                htmlFor="city"
              >
                Location
              </label>
              <input
                className="appearance-none block w-full  text-white  rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                id="city"
                type="text"
                placeholder="Eg. Mylapore, Triplicane, Ennore, Vadapalani etc"
                onChange={handleAddressChange}
                value={Address}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-6 xs:mb-0">
              <label
                className="block uppercase tracking-wide text-white font-bold mb-2 xs:mt-3"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full  text-white  rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                id="city"
                type="text"
                placeholder="Mail ID"
                onChange={handleEmailChange}
                value={Email}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-6 xs:mb-0">
              <label
                className="block uppercase tracking-wide text-white font-bold mb-2 xs:mt-3"
                htmlFor="email"
              >
                Quantity of Gold
              </label>
              <input
                className="appearance-none block w-full  text-white  rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                id="city"
                type="text"
                placeholder="Eg, x grams or y kilo bars or z ounce bullions"
                onChange={handleQuantityChange}
                value={Quantity}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-6 xs:mb-0 mt-2">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="flex float-left text-xs text-gray-400">
            <Link href="./privacy-policy">
              <a href="./privacy-policy" className="underline" target="_newtab">
                Privacy policy
              </a>
            </Link>
            &nbsp;
            <Link href="./terms-and-condition">
              <a href="./privacy-policy" className="underline" target="_newtab">
                Terms and conditions
              </a>
            </Link>
          </div>

          <div className="flex float-right text-xs text-gray-400 ">
            100% secure and trusted
          </div>
        </form>
      </div>
    </Container>
  );
}
