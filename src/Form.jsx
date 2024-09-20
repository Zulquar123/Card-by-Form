import React from "react";
import { useForm } from "react-hook-form";

export default function Form({ handleFormSubmitData }) {
  const inpt = "border-2 border-solid border-black rounded font-bold px-2";
  const btn =
    " bg-blue-500 text-white rounded px-2 mt-2 font-bold text-xl py-1 outline-none";
  const { register, handleSubmit, reset } = useForm();
  const handleFormSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  };
  return (
    <div className="">
      <form
        action=""
        className="flex gap-5 mt-5"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <input
          {...register("name")}
          type="text"
          className={inpt}
          placeholder="name"
          required
        />
        <input
          {...register("email")}
          type="email"
          className={inpt}
          placeholder="email"
          required
        />

        <input
          {...register("image")}
          type="text"
          className={inpt}
          placeholder="image-link"
          required
        />
        <input type="submit" className={btn} />
      </form>
    </div>
  );
}
