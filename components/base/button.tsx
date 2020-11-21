import { ReactChild, ReactEventHandler, ReactNode } from "react"

export interface ButtonProps {
  children: ReactNode
  color?: string
  textColor?: string
  icon?: boolean
  disabled?: boolean
  disableShadow?: boolean
  disableRounded?: boolean
  startIcon?: ReactChild
  onClick: ReactEventHandler
  className?: string
}

const Button = ({
  children,
  color = "custom-primary",
  textColor = "white",
  icon = false,
  disabled = false,
  disableShadow = false,
  disableRounded = false,
  startIcon,
  onClick,
  className = "",
}: ButtonProps) => (
  <button
    className={`
    transition-shadow duration-200
    ${!disableRounded && (icon ? "rounded-full p-1" : "rounded-md px-3 py-1")}
    ${!disableShadow && "shadow-sm hover:shadow-lg"}
    bg-${color} text-${textColor}
    ${className}`}
    disabled={disabled}
    onClick={onClick}
  >
    {startIcon && <div className="mr-4">{startIcon}</div>}

    {children}
  </button>
)

export default Button
