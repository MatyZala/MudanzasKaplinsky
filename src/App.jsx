import styles from "./style";
import { Billing, Business, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Form from "./components/Form";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <Testimonials />
        <CTA />
        <Form />
        <Clients />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
