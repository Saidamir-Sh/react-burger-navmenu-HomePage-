import React, { FormEvent,  useState } from 'react'
import './styles/_index.scss'

interface Props {
    children?: JSX.Element|JSX.Element[]
    className?: string
    position?: string
}

const Menu = (props: Props) => {

    // show hide sidebar
    const [isActive, setIsActive] = useState<boolean>(false)

    // collapse side bar
    const ToggleMenu = () => {
    setIsActive(!isActive)
    }

  return (
      <>
       <div onClick={ToggleMenu} className={isActive ? 'hamburger is-active' : 'hamburger'} id="hamburger-3">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            </div>
        <section id={!isActive ? 'menu' : 'menu-active'} className={`${props.className} ${props.position}`}>
            {props.children}
        </section>
      </>
    )
}

Menu.Header = (props: Props) => <header className={props.className}>{props.children}</header>;
Menu.Body = (props: Props) => <main className={props.className}>{props.children}</main>;
Menu.Footer = (props: Props) => <footer className={props.className}>{props.children}</footer>;

export default Menu