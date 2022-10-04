import s from './More.module.scss';
import arrow from "../../assets/img/arrow.png";

export const More = ({hasArrow = false, text = 'Read More', style={}}) => {
    return (
        <div className={s['more']} style={style}>
            <div className={s['button']}>
                <p>{text}</p>
            </div>
            {hasArrow ? <img src={arrow} alt={'arrow' } /> : null}
        </div>
    );
}
