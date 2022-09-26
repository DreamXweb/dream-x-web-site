import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "./components/Header/Header";
import {MainPage} from "./components/MainPage/MainPage";

/* TODO firebase admin */

function AppBoot() {
    return (
        <>
            <Header />

            <div className={'container'}>

                <MainPage />

                {/* TODO next blocks */}

                <hr />
                <div className="clutch-widget" data-nofollow="true" data-url="https://widget.clutch.co" data-widget-type="2"
                     data-height="45" data-clutchcompany-id="1704815" />
                <hr />
            </div>

        </>

    );
}

export default AppBoot;
