import Welcome from "../components/header/welcome";
import Header from "../components/header/header";
import styles from "./Home.module.scss";



export default function Home() {
  return (
    <div className="{styles.container">
      <Header />
      <Welcome />

    </div>
  );
}
