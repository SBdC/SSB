import * as React from 'react'
import { Link } from 'gatsby'

import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'
import Header from './header'

const Layout = ({ pageTitle, children }) => {

    return (
        <div className={container}>
            <Header />
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>
                            About
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/artists" className={navLinkText}>
                            Artists
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/program" className={navLinkText}>
                            Program
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/kapitel" className={navLinkText}>
                            kapitel
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/kuenstlergruppe" className={navLinkText}>
                            kuenstlergruppe
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout