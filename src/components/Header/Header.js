import s from './Header.module.scss';
import logo from "../../assets/img/logo.png";
import {useRef} from "react";

// TODO animation
// TODO adaptivity

export const Header = () => {

    const header = useRef();

    window.onscroll = () => {
        console.log('header = ', header);
        if ( !header || !header.current ) {
            return;
        }
        if ( window.scrollY > 20 ) {
            header.current['style'].background = 'rgba(255, 255, 255, .9)';
        } else {
            header.current['style'].background = 'transparent';
        }
    }

    return (
        <div className={'container'} >
            <header id={s['header']} >
                <div id={s['background']} ref={header} />
                <div className={'row'}>
                    <div id={s['logo-container']} className={'col-2'}>
                        <img src={logo} alt={'logo'} />
                    </div>
                    <div id={s['nav']} className={'col-8'}>
                        <div className={s['nav-item']}>
                            <p>Services</p>
                            <div className={s['underline']} />
                        </div>
                        <div className={s['nav-item']}>
                            <p>Cases</p>
                            <div className={s['underline']} />
                        </div>
                        <div className={s['nav-item']}>
                            <p>Workflow</p>
                            <div className={s['underline']} />
                        </div>
                        <div className={s['nav-item']}>
                            <p>Reviews</p>
                            <div className={s['underline']} />
                        </div>
                        <div className={s['nav-item']}>
                            <p>Company</p>
                            <div className={s['underline']} />
                        </div>
                        <div className={s['nav-item']}>
                            <p>Blog</p>
                            <div className={s['underline']} />
                        </div>
                        <div className={s['nav-item']}>
                            <p>Contacts</p>
                            <div className={s['underline']} />
                        </div>
                    </div>
                    <div id={s['get-in-touch-container']} className={'col-2'}>
                        <div id={s['get-in-touch']}>
                            <p>GET IN TOUCH</p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
