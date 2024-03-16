import { FC, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary"

interface ButtonProps {
    children: ReactNode,
    variant?: ButtonVariant,
    className?: string,
    onClick?: () => void 
}

const Button:FC<ButtonProps> = ({className, children, variant="primary", onClick}) => {
    const variants = {
        'primary':'bg-usr-button-primary text-usr-text-primary',
        'secondary':'text-usr-text-primary'
    }

    const ButtonClass = `${className} px-4 py-[8px] text-[14px] font-semibold rounded-lg ${variants[variant]}`
    
    return(
        <button
        className={ButtonClass}
        onClick={onClick}
        >{children}</button>
    )
}

export default Button