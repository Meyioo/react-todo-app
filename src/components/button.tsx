interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onclick?: () => void;
  label: string;
  disabled?: boolean;
}

export default function Button({
  type = "button",
  onclick = Function,
  label,
  disabled,
}: Readonly<ButtonProps>) {
  return (
    <button
      className="inline-block w-full rounded-lg bg-blue-700 px-5 py-3 text-sm font-medium text-white disabled:bg-blue-500"
      type={type}
      disabled={disabled}
      onClick={onclick}
    >
      {label}
    </button>
  );
}
