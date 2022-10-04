import s from './Case.module.scss';
import {More} from "../../More/More";

export const Case = ({title = false,img, imgToLeft = false, name, description, services}) => {

    const text = <>
        {title ? <h2>CASES</h2> : null}
        <p id={s['name']}>{name}</p>
        <p id={s['description']}>{description.split('\n').map(str => <p>{str}</p>)}</p>
        <div id={s['services']}>
            {services.map(service => <div className={s['service']}>
                <span>{service}</span>
            </div>)}
        </div>
        <More />
    </>;

    const imgTag = <img src={img} alt={name}/>;

    return (

        <div  id={s['case']} className={'row'}>
            <div className={'col-6'}>
                {imgToLeft ? imgTag : text}
            </div>
            <div className={'col-6'}>
                {imgToLeft ? text : imgTag}
            </div>
        </div>

    )
}
