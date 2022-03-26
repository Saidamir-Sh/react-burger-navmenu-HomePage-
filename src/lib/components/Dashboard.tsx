import React, { FormEvent, ReactNode, useState } from 'react'
import './styles/_dashboard.scss'

interface Props {
    children: JSX.Element
}

const Dashboard = (props: Props) => {

    // show hide sidebar
    const [isActive, setIsActive] = useState<boolean>(false)

    // collapse side bar
    const handleSideBar = (e: FormEvent) => {
    e.preventDefault()
    setIsActive(!isActive)
    }

  return (
    <div id='dashboard'>
        {props.children}
    </div>
  )
}

Dashboard.Header = (props: Props) => <header>{props.children}</header>;
Dashboard.Body = (props: Props) => <main>{props.children}</main>;
Dashboard.Footer = (props: Props) => <footer>{props.children}</footer>;

export default Dashboard