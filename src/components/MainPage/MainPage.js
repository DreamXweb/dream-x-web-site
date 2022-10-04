import s from './MainPage.module.scss';
import right_1 from '../../assets/img/right_1.png';
import {Service} from "./Service/Service";
import mobile_apps_design from '../../assets/img/services/mobile_apps_design.png';
import web_applications_design from '../../assets/img/services/web_applications_design.png';
import saas_design from '../../assets/img/services/mobile_apps_design.png';
import crm_system_design from '../../assets/img/services/crm_system_design.png';
import {Case} from "./Case/Case";
import {More} from "../More/More";
import mover from '../../assets/img/cases/mover.png';
import controlPlus from '../../assets/img/cases/controlPlus.png';
import eCommerceAdminPanelCRM from '../../assets/img/cases/eCommerceAdminPanelCRM.png';

const description = "You have the vision for a stunning digital experience. We're the software design and engineering team that can bring it to life.";

export const MainPage = () => {
    return (

        <div id={s['main-page']}>

            <div id={s['first-block']} className={'row'}>
                <div id={s['left']} className={'col-6'}>
                    <p id={s['web-design-company']}>WEB DESIGN COMPANY</p>
                    <h1>NEXT LEVEL UX/UI DESIGN</h1>
                    <p id={s['description']}>{description}</p>
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

            <div id={s['second-block']} className={'row'}>
                <div className={'col-4'}>
                    <h2>SERVICES WE PROVIDE</h2>
                    <p id={s['description_2']}>{description}<br/><br/>{description}</p>
                    <More hasArrow={true} />
                </div>
                <div className={'col-8'}>
                    <Service img={mobile_apps_design} name={'Mobile Apps Design'} description={description}/>
                    <Service img={web_applications_design} name={'Web Applications Design'} description={description}/>
                    <Service img={saas_design} name={'Saas Design'} description={description}/>
                    <Service img={crm_system_design} name={'CRM Systems Design'} description={description}/>
                </div>
            </div>

            <Case title={true} img={mover} name={'Mover'} description={description + '\n' + description} services={['UX/UI Mobile App Design', 'Logo', 'Startup']}/>
            <Case img={eCommerceAdminPanelCRM} imgToLeft={true} name={'E-Commerce Admin Panel CRM'} description={description + '\n' + description} services={['UX/UI WebDesign', 'CRM System Design']}/>
            <Case img={controlPlus} name={'Control Plus'} description={description + '\n' + description} services={['UX/UI WebDesign', 'UX Audit']} />
            <Case img={eCommerceAdminPanelCRM} imgToLeft={true} name={'E-Commerce Admin Panel CRM'} description={description + '\n' + description} services={['UX/UI WebDesign', 'CRM System Design']}/>
            <div style={{textAlign: 'center'}}>
                <More hasArrow={true} text={'More Cases'} style={{display: 'inline-block'}} />
            </div>


        </div>

    )
}
