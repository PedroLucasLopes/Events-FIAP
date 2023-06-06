export type InputTypes = {
  type: "email" | "text" | "tel" | "datetime-local" | "password" | "number";
  placeholder?: string;
  size?: "xs" | "xs" | "md" | "lg";
  variant?: "outline" | "filled" | "flushed" | "unstyled";
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
};
