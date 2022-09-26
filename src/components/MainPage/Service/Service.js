import s from './Service.module.scss';

export const Service = ({img, name, description}) => {
    return (

        <div id={s['service']}>
            <div className={'row'}>
                <div id={s['img']} className={'col-2'}>
                    <img src={img} alt={name} />
                </div>
                <div id={s['name']} className={'col-4'}>
                    <h3>{name}</h3>
                </div>
                <div id={s['description']} className={'col-6'}>
                    <p>{description}</p>
                </div>
            </div>
        </div>

    )
}
