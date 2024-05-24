import React from 'react'
import styles from './header.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Container from '../Grid/Container';

const Header = () => {
    return (
        <>
            <Container> 
                <header>
                    <div className={styles.navbar}>
                        <div className="logo">
                            <h3>FOUNDATION</h3>
                        </div>
                        <MenuIcon/>
                        <div className="links">
                            <ul>
                                <li>
                                    <Link to={"/"}> HOME</Link>
                                </li>
                                <li>
                                    <Link to={"/about"}>ABOUT</Link>
                                </li>
                                <li>
                                    <Link to={"/contact"}>CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
            </Container>
                
        </>
    )
}

export default Header