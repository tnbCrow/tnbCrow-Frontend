import React, { FC, ReactNode } from "react";

interface ButtonProps {
  disabled?: boolean;
  full?: boolean;
  icon?: ReactNode;
  loading?: boolean;
  type?: "primary" | "secondary" | "text" | "link";
}

export const Button: FC<
  ButtonProps | (ButtonProps & { type: "link" } & { href: string })
> = ({
  disabled = false,
  icon = null,
  loading = false,
  type = "primary",
  children,
  ...rest
}) => {
  let tailwind = `p-1 rounded-full md:h-8 lg:h-10 max-h-10`;

  switch (type) {
    case "primary": {
      const disabledColor = disabled ? "bg-gray-400" : "hover:bg-link";

      tailwind = [tailwind, disabledColor, "bg-button text-white  "].join(" ");
      break;
    }
    case "secondary": {
      const disabledColor = disabled
        ? "bg-gray-100 text-gray-400"
        : "hover:bg-blue-50";

      tailwind = [
        tailwind,
        disabledColor,
        "bg-white text-white border border-link text-link ",
      ].join(" ");
      break;
    }
    case "text": {
      const disabledColor = disabled ? "text-gray-400" : "hover:underline";

      tailwind = [
        tailwind,
        disabledColor,
        "text-button border-0 text-button  focus:border focus:border-dotted",
      ].join(" ");
      break;
    }
    case "link":
      const disabledColor = disabled ? "text-gray-400" : "hover:underline";

      tailwind = [
        tailwind,
        disabledColor,
        "text-button border-0 text-link  ",
      ].join(" ");
      break;
    default:
      break;
  }

  return (
    <button className={tailwind} disabled={disabled} {...rest}>
      {loading ? (
        <i className="fa fa-refresh fa-spin" style={{ marginRight: "5px" }} />
      ) : (
        <span className="space-x-5">
          {icon}
          {children}
        </span>
      )}
    </button>
  );
};
