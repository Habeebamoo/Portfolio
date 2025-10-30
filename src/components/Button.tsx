interface Props {
  text: string, 
  iconPosition?: "left" | "right", 
  icon?: any,
  color: string,
  activeColor?: string,
  border?: string,
  action: () => void
}

const Button = ({ text, iconPosition, icon, color, activeColor, action, border }: Props) => {
  
  return (
    <button onClick={action} className={`${color} ${activeColor} ${border} text-white font-spaceG text-sm py-2 px-4 rounded-md flex-center gap-2 cursor-pointer`}>
      {iconPosition === "left" && icon}
      {text}
      {iconPosition === "right" && icon}
    </button>
  )
}

export default Button