import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  header?: ReactNode
  color?: string
  textColor?: string
  className?: string
}

const Card = ({
  children,
  header,
  color = "white",
  textColor = "custom-primary",
  className,
}: CardProps) => (
  <div
    className={`
    transition-shadow duration-200
    flex flex-col justify-center items-center
    rounded-md
    shadow-md hover:shadow-xl
    bg-${color} text-${textColor}
    ${className}`}
  >
    {header}

    <div className="w-full">{children}</div>
  </div>
)

export default Card
