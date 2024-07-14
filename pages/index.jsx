import Contato from "../components/header/contato";
import Welcome from "../components/header/welcome";
import Header from "../components/header/header";
import styles from "./Home.module.scss";
import Features from "../components/header/features";



export default function Home() {
  return (
    <div className="{styles.container">
      <Header />
      <Welcome />
      <Features />
      <Contato />

    </div>
  );
}
