import Button from "../button";
import Styles from "./contato.module.scss";

const Contato = () => {
    return( 
    <div className={Styles.container}>
        <div className={Styles.texts}>
            <span>ENTRE EM CONTATO</span>
            <h1>Aumente seu resultado de vendas e performance</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna
            </p>
        </div>
        <div className={Styles.form}>
            <h1>Fale com especialista</h1>
            <input type="text" placeholder="Nome completo"/>
            <input type="email" placeholder="E-mail profissional"/>
            <input type="text" placeholder="Celular/Whatsapp"/>
            <input type="text" placeholder="Site"/>
            <input type="text" placeholder="Oçamento para mídia"/>
            <Button title="Enviar"></Button>
        </div>
    </div>
    );
};

export default Contato;