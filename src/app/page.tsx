import Header from "@/components/Header/Header";
import styles from './styles.module.scss'
import Container from "@/layout/Container/Container";
import Information from "@/components/Information/Information";

export default function Home() {

  return (
      <>
          <Container>
              <Header/>
              <main className={styles.main}>
                  <Information />
              </main>
          </Container>
      </>
  );
}
