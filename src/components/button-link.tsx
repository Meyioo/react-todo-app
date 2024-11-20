type ButtonLinkProps = {
  label?: string;
  href?: string;
};

export default function ButtonLink({
  label = "Offene Aufgaben",
  href = "/",
}: Readonly<ButtonLinkProps>) {
  return (
    <a
      href={href}
      className="inline-block w-full rounded-lg bg-blue-700 px-5 py-3 text-sm font-medium text-white"
    >
      {label}
    </a>
  );
}
