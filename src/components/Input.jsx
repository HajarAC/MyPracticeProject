import { forwardRef } from "react";

const Input = forwardRef(function Input({ lable, textarea, ...props }, ref) {

  return (
    <p className="paragraph">
      <label className="lable ">{lable}</label>
      {textarea ? (
        <textarea ref={ref} className="text-area" {...props} />
      ) : (
        <input ref={ref} {...props} />
      )}
    </p>
  );
});

export default Input;
