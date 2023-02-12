import styles from './style';
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from './Components'

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`${styles.paddingX} ${styles.flexStart} flex-col justify-start items-center`}>
      
      <div className={`${styles.boxWidth}`}>
        <Stats />
      </div>

      <div className={`${styles.boxWidth}`}>
        <Business />
      </div>

      <div className={`${styles.boxWidth}`}>
        <Billing />
      </div>
  
      <div className={`${styles.boxWidth}`}>
        <CardDeal />
      </div>
      
      <div className={`${styles.boxWidth}`}>
        <Testimonials />
      </div>

      <div className={`${styles.boxWidth}`}>
        <Clients />
      </div>

      <div className={`${styles.boxWidth}`}>
        <CTA />
      </div>
  
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
)

export default App