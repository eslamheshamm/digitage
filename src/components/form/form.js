"use client"

import React from "react"
import { useForm } from "react-hook-form"

const FormInputs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [succes, setSucces] = React.useState(false)
  const [sendError, setSendError] = React.useState(false)
  const [disable, setDisable] = React.useState(false)
  const onSubmit = async data => {
    setSendError(false)
    setDisable(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Failed to send")
      setSucces(true)
    } catch {
      setSendError(true)
      setDisable(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between font-body py-2"
      autoComplete="off"
      id="form"
      name="contact"
    >
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human:{" "}
          <input {...register("bot-field")} />
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
      {sendError && (
        <span>Something went wrong, please try again.</span>
      )}

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
