import { forwardRef } from "react";

export const Form = forwardRef(({ children, noValidate, onSubmit }, ref) => {
  return (
    <div className="w-full flex justify-center mb-10">
      <form
        ref={ref}
        onSubmit={onSubmit}
        noValidate={noValidate}
        className="w-96 "
      >
        {children}
      </form>
    </div>
  );
});
