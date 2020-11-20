import { ReactChild, ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  color?: string
  textColor?: string
  icon?: boolean
  startIcon?: ReactChild
  onClick: () => void
}

const Button = ({
  children,
  color = "custom-primary",
  textColor = "white",
  icon = false,
  startIcon,
  onClick,
}: ButtonProps) => (
  <button
    className={`transition-shadow duration-200  ${
      icon ? "rounded-full p-1" : "rounded-md px-3 py-1"
    } shadow-sm hover:shadow-lg bg-${color} text-${textColor}`}
    onClick={onClick}
  >
    {startIcon && <div className="mr-4">{startIcon}</div>}

    {children}
  </button>
)

export default Button
