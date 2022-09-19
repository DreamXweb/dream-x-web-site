import './App.css';
import './my-sass.scss';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './App-boot.module.css';

function AppBoot() {
  return (
    <div>
        <p>azaz</p>
      <div className="clutch-widget" data-nofollow="true" data-url="https://widget.clutch.co" data-widget-type="2"
           data-height="45" data-clutchcompany-id="1704815" />
        <h1>H!</h1>
        <Button>hi</Button>
        <div id={s['container']} className={'container'}>

            <div id={s['row_1']} className={'row'}>
                <div id={s['block_1']} className={'col-sm-1 col-md-2 col-lg-3 col-xl-4'} />
                <div id={s['block_2']} className={'col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8'} />
            </div>

            <div id={s['row_2']} className={'row'}>
                <div id={s['block_1_1']} className={'col-sm-1 col-md-2 col-lg-3 col-xl-4'} >
                    <div id={s['block_2_1']} className={'row'} />
                </div>
                <div id={s['block_1_2']} className={'col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8'} >
                    <div id={s['block_2_2']} className={'row'} />
                </div>
            </div>

        </div>
    </div>
  );
}

export default AppBoot;
