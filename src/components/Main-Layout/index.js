import { Outlet } from "react-router-dom";
import TopBar from "./Top-bar";
import './index.scss';
import Menu from "./menu";
import { useEffect, useState } from "react";
import Footer from "./footer";

function MainLayout(){
      const [isSticky, setIsSticky] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
        const topBarHeight = document.querySelector('.layout__header-topbar').offsetHeight;
        setIsSticky(window.scrollY >= topBarHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <>
            <div className="layout">
                <div className="layout__header">
                    <div className="layout__header-topbar">
                        <TopBar/>
                    </div>
                    <div className={`layout__header-menu ${isSticky ? 'sticky' : ''}`}>
                        <Menu/>
                    </div>
                </div>

                <main className="layout__main">
                    <Outlet/>
                </main>

                <footer className="layout__footer">
                    <Footer/>
                </footer>
            </div>
        </>
    )
}

export default MainLayout;