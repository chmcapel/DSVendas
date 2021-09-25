import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">DSVendas</h1>
                    <p className="lead">Oi <a href= "https://www.instagram.com/julianacwolff/"> Juliana <a/>, Não quero que deixe de conhecer o Seo Tibério por falta de convite... </p>
                    <hr />
                    <p></p>
                    <Link className="btn btn-primary btn-lg" to="/dashboard">
                        Acessar o dashboard
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;