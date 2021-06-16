import css from './Button.module.scss'

interface ButtonProps {
    text: string
    onClick: () => void
    shape?: 'ellipse' | 'square'
    className?: string
}

const Button = ({text, shape='ellipse', className, onClick }:ButtonProps) => {

    const classes = `${css.button} ${css[shape]} ${className}`

    return <button className={classes} onClick={onClick}>{text}</button>
}
export default Button
