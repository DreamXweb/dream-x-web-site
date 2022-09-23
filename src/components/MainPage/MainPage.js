import s from './MainPage.module.scss';
import right_1 from '../../assets/img/right_1.png';

export const MainPage = () => {
    return (

        <div id={s['main-page']}>
            <div className={'row'}>
                <div id={s['left']} className={'col-6'}>
                    <p id={s['web-design-company']}>WEB DESIGN COMPANY</p>
                    <h1>NEXT LEVEL UX/UI DESIGN</h1>
                    <p id={s['description']}>{"You have the vision for a stunning digital experience. We're the software design and engineering team that can bring it to life."}</p>
                    <div id={s['get-started']}>
                        <div />
                        <p>LET'S GET STARTED</p>
                    </div>
                    <div className={'row'}>
                        <div className={'col-4'}>
                            <p><b>Telegram</b></p>
                            <p className={s['contact']}>@dreamxcompany</p>
                        </div>
                        <div className={'col-8'}>
                            <p><b>E-mail</b></p>
                            <p className={s['contact']}>dreamxcompany@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className={'col-6'}>
                    <img style={{width: '100%'}} src={right_1} alt={'right_1'}/>
                </div>
            </div>
        </div>

    )
}
