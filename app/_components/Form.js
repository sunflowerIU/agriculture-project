"use client";

import { sendEmail } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function Form() {
  return (
    <form
      action={async (formData) => {
        const data = await sendEmail(formData);

        console.log(data);
        if (data.id) {
          alert("Your message has been sent successfully.");
        } else {
          alert(data.message);
        }
      }}
      className="rounded-2xl border-1 border-lime-500 p-6 shadow-lg"
    >
      <h2 className="text-primary mb-4 text-xl font-semibold">
        Send Us a Message
      </h2>

      <div className="space-y-4">
        <input name="bot" className="hidden" type="text" />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="placeholder-primary w-full rounded-md border border-green-700 px-3 py-2 focus:outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="placeholder-primary w-full rounded-md border border-green-700 px-3 py-2 focus:outline-none"
        />
        <input
          type="text"
          name="phone"
          pattern="^\d{10}$"
          placeholder="Your Phone Number"
          required
          className="placeholder-primary w-full rounded-md border border-green-700 px-3 py-2 focus:outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="placeholder-primary w-full rounded-md border border-green-700 px-3 py-2 focus:outline-none"
        />

        {/* <button>submit</button> */}
      </div>
      <SubmitButton updatingLabel="Submitting...">Submit Now</SubmitButton>
    </form>
  );
}

export default Form;
