import { FaChevronDown } from 'react-icons/fa';
import styles from './App.module.css';
import ReferalsCard from './ReferalsCard';
import ServicesCard from './ServicesCard';

export default function App() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          background: 'white',
          height: '117px',
          position: 'fixed',
          zIndex: '2',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <div className={styles.logo}>
          <img
            alt="logo-Bob-Meijer"
            src="https://bobmeijer.nl/wp-content/uploads/2022/09/Logo_Bob-Meijer_RGB.png"
          />
        </div>
        <div style={{ marginRight: '50px' }}>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>
                Google Ads Services{' '}
                <FaChevronDown style={{ width: '12px', marginLeft: '8px' }} />
              </a>
            </li>
            <li>
              <a>Google Ads resources</a>
            </li>
            <li>
              <a>About me</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>
                <img
                  style={{ paddingRight: '5px' }}
                  src="https://bobmeijer.nl/wp-content/plugins/sitepress-multilingual-cms/res/flags/nl.png"
                  alt="dutch-flag"
                />
                NL
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section
        style={{ background: '#FEF3DF', maxHeight: '675px', display: 'flex' }}
      >
        <div
          style={{
            width: '170px',
            height: '190px',
            paddingTop: '100px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'end',
          }}
        >
          <img
            style={{ marginTop: '100px', width: '84px' }}
            alt="rectangles"
            src="https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Arrow-Up_Bob-Meijer_RGB.png"
          />
        </div>
        <div
          style={{
            maxWidth: '750px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            paddingTop: '205px',
            paddingLeft: '15px',
          }}
        >
          <h1 style={{ fontSize: '44px', lineHeight: '56px' }}>
            Your Google Ads
            <br />
            campaigns perform better
            <br />
            with me behind the wheel.
          </h1>
          <p style={{ marginTop: '-5px', marginBottom: '25px' }}>
            I’ll get the most out of your Google Ads campaigns or
            <br />
            teach you the intricacies so you can do it yourself!
          </p>
          <a className={styles.ctaBtn}>I want to outsource Google Ads</a>
        </div>
        <div>
          <img
            style={{ width: '550px', marginTop: '193px', marginLeft: '30px' }}
            alt="image-of-bob"
            src="/Bob_circle.png"
          />
        </div>
      </section>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '100px',
          marginBottom: '35px',
        }}
      >
        <h1>I work with the best companies</h1>
        <img
          style={{ width: '151px', marginTop: '-12px', marginBottom: '-10px' }}
          alt="wave"
          src="https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Wave_Bob-Meijer_RGB.png"
        />
        <p>May I add you to the list?</p>
      </div>
      <div className={styles.partnersGroup}>
        <div className={styles.partners}>
          <img
            alt="partner-logo"
            src="https://bobmeijer.nl/wp-content/uploads/2022/09/klant-conrad.png"
            style={{ width: '100px' }}
          />
        </div>
        <div className={styles.partners}>
          <img
            alt="partner-logo"
            src="https://bobmeijer.nl/wp-content/uploads/2022/09/klant-rompslomp.png"
            style={{ width: '100px' }}
          />
        </div>
        <div className={styles.partners}>
          <img
            alt="partner-logo"
            src="https://bobmeijer.nl/wp-content/uploads/2022/09/klant-ww-2.png"
            style={{ width: '100px' }}
          />
        </div>
        <div className={styles.partners}>
          <img
            alt="partner-logo"
            src="https://bobmeijer.nl/wp-content/uploads/2022/09/klant-bww.png"
            style={{ width: '100px' }}
          />
        </div>
        <div className={styles.partners}>
          <img
            alt="partner-logo"
            src="https://bobmeijer.nl/wp-content/uploads/2023/12/kadasterdata-logo-png-1.png"
            style={{ width: '100px' }}
          />
        </div>
        <div className={styles.partners}>
          <img
            alt="partner-logo"
            src="https://bobmeijer.nl/wp-content/uploads/2022/09/klant-kpmg.png"
            style={{ width: '100px' }}
          />
        </div>
      </div>
      <div className={styles.partnersGroup}>
        <div className={styles.partners}>
          <img
            alt="partner-logo"
            src="https://bobmeijer.nl/wp-content/uploads/2022/09/klant-steigerbuisstunter.png"
            style={{ width: '100px' }}
          />
        </div>
        <div className={styles.partners}>
          <img
            alt="partner-logo"
            src="https://bobmeijer.nl/wp-content/uploads/2022/09/klant-harley.png"
            style={{ width: '100px' }}
          />
        </div>
        <div className={styles.partners}>
          <img
            alt="partner-logo"
            src="https://bobmeijer.nl/wp-content/uploads/2022/09/klant-springcast.png"
            style={{ width: '100px' }}
          />
        </div>
        <div className={styles.partners}>
          <img
            alt="partner-logo"
            src="https://bobmeijer.nl/wp-content/uploads/2022/09/klant-bynco.png"
            style={{ width: '100px' }}
          />
        </div>
        <div className={styles.partners}>
          <img
            alt="partner-logo"
            src="https://bobmeijer.nl/wp-content/uploads/2022/09/klant-louwman.png"
            style={{ width: '100px' }}
          />
        </div>
        <div className={styles.partners}>
          <img
            alt="partner-logo"
            src="https://bobmeijer.nl/wp-content/uploads/2023/12/decathlon-logo-png-1.png"
            style={{ width: '100px' }}
          />
        </div>
      </div>
      <section
        style={{
          background: '#e6ebe4',
          height: '550px',
          display: 'flex',
          padding: '80px 80px',
          marginTop: '85px',
        }}
      >
        <div
          style={{
            height: '100%',
            width: '50%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}
        >
          <img
            style={{ maxWidth: '140px' }}
            alt="dots"
            src="https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Dots_Bob-Meijer_RGB.png"
          />
          <img
            style={{
              maxWidth: '494px',
              boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.16)',
              zIndex: '1',
              marginLeft: '-30px',
              marginTop: '30px',
            }}
            alt="bob"
            src="https://bobmeijer.nl/wp-content/uploads/2022/09/bobmeijernl-foto-6-1-1024x1024.png"
          />
        </div>
        <div
          style={{
            height: '100%',
            maxWidth: '560px',
            paddingTop: '40px',
            paddingLeft: '25px',
          }}
        >
          <h1>Hi, I'm Bob Meijer.</h1>
          <p>
            As a Google Ads specialist, I help{' '}
            <strong>ambitious companies</strong> get the most out of Google Ads.
            I work for a select number of clients and am responsible for over
            €1,500,000 per month in ad spend.
          </p>
          <p>
            Over the years, I have had the opportunity to work on more than 100
            Google Ads accounts. Often challenging accounts from great names,
            including{' '}
            <strong>
              Weight Watchers, Louwman, Harley Davidson, KPMG, Schoonenberg
            </strong>
            , and more.
          </p>
          <p>
            I also provide <strong>Google Ads courses</strong> and 1-on-1{' '}
            <strong>coaching sessions</strong>. In these, I share my knowledge
            with <strong>novice to very advanced</strong> Google Ads
            advertisers. This way, they learn the intricacies of the business.
          </p>
        </div>
      </section>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '70px',
        }}
      >
        <h1 style={{ fontSize: '40px' }}>Google Ads services</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <ServicesCard
            src="https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Google-Ads-uitbesteden_Bob-Meijer_RGB.png"
            background="#FEF3DF"
            service="Outsource Google Ads"
            serviceParagraph="I get the most out of your Google Ads campaigns. Let me setup, manage and optimize your account."
            serviceBtn="I want to know more"
          />
          <ServicesCard
            src="https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Google-Ads-training_Bob-Meijer_RGB.png"
            background="#E6EBE4"
            service="Google Ads courses"
            serviceParagraph="Learn proven Google Ads strategies, techniques, and clever hacks I use daily to grow my client’s accounts!"
            serviceBtn="I want to learn Google Ads"
          />
          <ServicesCard
            src="https://bobmeijer.nl/wp-content/uploads/2022/09/Icoon_Google-Ads-coaching_Bob-Meijer_RGB.png"
            background="#E0F1F1"
            service="Google Ads coaching"
            serviceParagraph="Do you have the basics of Google Ads under control and are ready to go deeper? I am here for you!"
            serviceBtn="I want to spar"
          />
        </div>
      </section>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '70px',
        }}
      >
        <h1 style={{ fontSize: '40px' }}>What people say about me</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <ReferalsCard
            background="transparent"
            rfaParagraph="Bob convinced WeightWatchers of his knowledge and expertise from the 1st moment of contact. The results exceeded expectations!"
            thumbnail="https://bobmeijer.nl/wp-content/uploads/2022/09/jens-riga-1.png"
            name="Jens Riga"
            position="Head of Digital at WeightWatchers"
          />
          <ReferalsCard
            background="transparent"
            rfaParagraph="Bob has provided results quickly with a structured approach. He also offered a more professional basis for further optimizing our campaigns."
            thumbnail="https://bobmeijer.nl/wp-content/uploads/2022/09/tim-nota.png"
            name="Tim Nota"
            position="Director at WisMon"
          />
          <ReferalsCard
            background="transparent"
            rfaParagraph="We have been working with Bob for quite some time, and his expertise in Google Ads has become indispensable. We are extremely satisfied!"
            thumbnail="https://bobmeijer.nl/wp-content/uploads/2022/09/fanar.png"
            name="Fanar Al-Obaidy"
            position="Founder at NOX Sleep Drink"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '60px',
            marginBottom: '60px',
          }}
        >
          <ReferalsCard
            background="transparent"
            rfaParagraph="We have experienced your service as very nice and enlightening. You work fast, are flexible and always advise us well. Our target group now knows how to find us much better."
            thumbnail="https://bobmeijer.nl/wp-content/uploads/2022/09/Clip-2.jpg"
            name="Laura Wever"
            position="Online Marketer at Brünen"
          />
          <ReferalsCard
            background="transparent"
            rfaParagraph="The number of conversions has more than tripled compared to the previous year. I think it needs no further explanation that I am very satisfied with that."
            thumbnail="https://bobmeijer.nl/wp-content/uploads/2022/09/Clip-1-1.jpg"
            name="Ellen Das"
            position="Owner at Love, Peace & Joy"
          />
          <ReferalsCard
            background="transparent"
            rfaParagraph="We felt we could get more out of Google Ads. Since switching to Bob, things have been going much better. We are getting more bookings for less budget, great!"
            thumbnail="https://bobmeijer.nl/wp-content/uploads/2022/09/Clip-1.jpg"
            name="
René Speelman"
            position="Marketing Manager at Gamecity"
          />
        </div>
      </section>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '70px',
          background: '#FEF3DF',
          paddingTop: '70px',
          paddingBottom: '70px',
        }}
      >
        <h1>Ready to grow?</h1>
        <p
          style={{
            textAlign: 'center',
            marginTop: '-8px',
            marginBottom: '30px',
          }}
        >
          Let’s talk about the results I can get for your business. Free of
          jargon and without bullshit
          <br />
          bingo.
        </p>
        <a className={styles.ctaBtn}>Get in touch</a>
      </section>
      <footer style={{ minHeight: '600px', background: '#2F3349' }}>
        <div
          style={{
            margin: '0 180px 0 180px',
            minHeight: '600px',
          }}
        >
          <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
              <img
                alt="logo-footer"
                src="https://bobmeijer.nl/wp-content/uploads/2022/09/Logo_Bob-Meijer_DIA_RGB.png"
                style={{ width: '156px' }}
              />
              <p
                style={{
                  color: 'white',
                  lineHeight: '30px',
                  fontFamily: 'Figtree',
                  paddingTop: '2px',
                  marginBottom: '-2px',
                }}
              >
                Noordijkerveldweg 10
                <br />
                7161LW Neede
                <br />
                Netherlands
              </p>
              <p
                style={{
                  color: 'white',
                  lineHeight: '30px',
                  fontFamily: 'Figtree',
                }}
              >
                KvK-number: 78449227 Btw-identificationnumber: NL861402728B01
              </p>
            </div>
            <div className={styles.gridItem}>
              <h4>Google Ads services</h4>
              <a className={styles.footerLink}>Outsource Google Ads</a>
              <a className={styles.footerLink}>Google Ads audit</a>
              <a className={styles.footerLink}>Google Ads coaching</a>
            </div>
            <div className={styles.gridItem}>
              <h4>Resources</h4>
              <a className={styles.footerLink}>Visit my LinkedIn</a>
              <a className={styles.footerLink}>Google Ads community</a>
              <a className={styles.footerLink}>Google Ads newsletter</a>
              <a className={styles.footerLink}>Google Ads podcast</a>
            </div>
            <div className={styles.gridItem}>
              <h4>General</h4>
              <a className={styles.footerLink}>About me</a>
              <a className={styles.footerLink}>Contact</a>
              <a className={styles.footerLink}>Terms and conditions</a>
              <a className={styles.footerLink}>Privacy statement</a>
              <a className={styles.footerLink}>Cookie policy</a>
            </div>
          </div>
          <div
            style={{
              height: '200px',
              marginTop: '30px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '60px',
              borderTop: '1px solid #E0F1F1',
            }}
          >
            <img
              alt="Google Partner"
              src="https://bobmeijer.nl/wp-content/uploads/2022/09/Google-partner.png"
              style={{ width: '177px' }}
            />
            <img
              alt="Microsoft Partner"
              src="https://bobmeijer.nl/wp-content/uploads/2022/09/Microsoft-partner.png"
              style={{ width: '177px' }}
            />
          </div>
        </div>
      </footer>
    </>
  );
}
