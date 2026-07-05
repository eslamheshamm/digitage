"use client"

import React from "react"
import { useForm } from "react-hook-form"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const FormInputs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [succes, setSucces] = React.useState(false)
  const [disable, setDisable] = React.useState(false)
  const onSubmit = (data, e) => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...data,
      }),
    })
      .then(res => {
        console.log(res)
        setSucces(true)
        setDisable(true)
      })
      .catch(error => alert(error))
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between font-body py-2"
      autoComplete="off"
      id="form"
      name="contact"
      method="POST"
      data-netlify="true"
      action="/thanks/"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <label className="mb-5">
        <input
          type="email"
          placeholder="Your email address"
          {...register("email", { required: true })}
          className="p-8 border rounded-2xl focus:ring-1 text-black focus:text-black focus:ring-primary focus:outline-none block w-full bg-white"
        />
        {errors.email && <span>This field is required</span>}
      </label>
      <label className="mb-5 w-full">
        <input
          type="text"
          placeholder="Your name / company’s name"
          className="p-8 border rounded-2xl focus:ring-1 text-black focus:text-black focus:ring-primary focus:outline-none block w-full bg-white"
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
      </label>
      <label className="w-full mb-8">
        <textarea
          placeholder="Your message"
          {...register("message", {
            required: true,
            minLength: 15,
            maxLength: 150,
          })}
          className="resize-none border rounded-2xl h-72 p-8 text-black focus:text-black focus:ring-1 focus:ring-primary focus:outline-none w-full block bg-white"
        />
        {errors.message?.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.message?.type === "minLength" && (
          <span>required to be more than 15 character</span>
        )}
        {errors.message?.type === "maxLength" && (
          <span>Should be less than 150 character </span>
        )}
      </label>
      {succes && <span>Thank you!</span>}

      <button
        type="submit"
        className={
          disable
            ? "self-end py-5 px-20 rounded-2xl bg-primary font-semibold text-black text-lg opacity-40 cursor-auto"
            : "self-end py-5 px-20 rounded-2xl bg-primary font-semibold text-black text-lg transition-transform duration-150 ease-out hover:scale-[1.02] active:scale-[0.97] motion-reduce:transition-none motion-reduce:hover:transform-none"
        }
        disabled={disable}
      >
        Send
      </button>
    </form>
  )
}

export default FormInputs
