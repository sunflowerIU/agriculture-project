import { useFormStatus } from "react-dom";

function SubmitButton({
  variant = "primary",
  className = "",
  updatingLabel = "",
  children,
}) {
  const { pending } = useFormStatus();

  // Define variant styles
  const baseClasses =
    "inline-block font-semibold px-6 py-3 rounded-lg hover:scale-110  shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-400 mt-6 cursor-pointer";

  const variants = {
    primary: "bg-primary hover:bg-lime-600 text-lime-50",
    secondary:
      "bg-secondary hover:bg-primary hover:text-secondary text-primary",
    outline: "border border-lime-500 text-lime-500 hover:bg-lime-50",
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <button disabled={pending} type="submit" className={combinedClasses}>
      {pending ? updatingLabel : children}
    </button>
  );
}

export default SubmitButton;
