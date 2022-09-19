import s from './Header.module.scss';
import logo from "../../assets/img/logo.png";

// TODO animation
// TODO adaptivity

export const Header = () => {
    return (

        <header id={s['header']}>
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

    )
}
