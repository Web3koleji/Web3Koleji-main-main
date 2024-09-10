"use client";
import "./routeBar.css";
import { useRouter } from 'next/navigation';


interface RouteBarProps {
}

const RouteBar: React.FC<RouteBarProps> = ({ }) => {

    const router = useRouter();

    const mainPage = () => {
        router.push("/")
    }

    const sources = () => {
        router.push("/sources")
    }

    const team = () => {
        router.push("/team")
    }

    const soon = () => {
        router.push("/soon")
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }} >
            <div style={{ display: "flex", flexDirection: "row" }}>
                <ul className="bar" >
                    <div onClick={mainPage} className="bar-item" >Menü</div>
                    <div onClick={sources} className="bar-item">Kaynaklar</div>
                    <div onClick={team} className="bar-item">Ekibimiz</div>
                    <div onClick={soon} className="bar-item">Haberler</div>
                    <div onClick={soon} className="bar-item">Aramıza katılın</div>
                </ul>
                <div className="logos" >
                    <a className="logo" onClick={mainPage} ><img src="https://r.resimlink.com/R26BeJ_oX0dM.png" alt="web3koleji-logo" /></a>
                </div>
            </div>
        </div>
    );
};

export default RouteBar;
