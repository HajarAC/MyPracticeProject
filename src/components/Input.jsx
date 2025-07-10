import { forwardRef } from "react";

const Input = forwardRef(function Input({ lable, textarea, ...props }, ref) {
  const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone ">{lable}</label>
      {textarea ? (
        <textarea ref={ref} className="text-area" {...props} />
      ) : (
        <input ref={ref} {...props} />
      )}
    </p>
  );
});

export default Input;
