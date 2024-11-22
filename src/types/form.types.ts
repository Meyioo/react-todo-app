export type ButtonType = "submit" | "button" | "reset";
export type FormInputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "tel"
  | "url"
  | "search"
  | "date"
  | "time"
  | "datetime-local"
  | "month"
  | "week"
  | "color"
  | "file"
  | "hidden"
  | "image"
  | "range"
  | "reset"
  | "submit"
  | "button"
  | "checkbox"
  | "radio"
  | "select"
  | "textarea";

export type FormField<T> = {
  name: T;
  placeholder: string;
  type: FormInputType;
};
