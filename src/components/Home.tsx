import theOllyLogo from "../assets/logo.png";
import appScreenshot1 from "../assets/file (2).png";
import appScreenshot2 from "../assets/file (3).png";
import appScreenshot3 from "../assets/file (4).png";
import playstoreButton from "../assets/playstore-button-logo.png";
import appstoreButton from "../assets/appstore-button-logo.png";
import playstoreLogo from "../assets/playstore-logo.png";
import appstoreLogo from "../assets/appstore-logo.png";

const Home = () => {
  return (
    <div className="container">
      <nav>
        <img src={theOllyLogo} alt="the-olly-logo" />
        <div className="app-download-buttons">
          <a
            // href="https://play.google.com/store/apps/details?id=com.reytara.olly"
            target="_blank"
          >
            <img src={playstoreButton} alt="playstore button" />
          </a>
          <a
            // href="https://apps.apple.com/in/app/olly/id6480505963"
            target="_blank"
          >
            <img src={appstoreButton} alt="appstore button" />
          </a>
        </div>

        <div className="app-download-logos">
          <a
            // href="https://play.google.com/store/apps/details?id=com.reytara.olly"
            target="_blank"
          >
            <img src={playstoreLogo} alt="playstore logo" />
          </a>
          <a
            // href="https://apps.apple.com/in/app/olly/id6480505963"
            target="_blank"
          >
            <img src={appstoreLogo} alt="appstore logo" />
          </a>
        </div>
      </nav>

      <section className="hero-section">
        <img src={appScreenshot1} alt="app-screenshot1" />
        <img
          src={appScreenshot2}
          alt="app-screenshot2"
          className="appScreenshot2"
        />
      </section>

      <section className="text-section">
        <h1>IGI</h1>
        <div>
          <p>
            Stay connected with your community and never miss out on fun
            activities again. Our app is designed especially for older adults
            who want to explore events happening in their city, make new
            friends, and lead an active, fulfilling lifestyle.
            <br />
            Key Features: <br />
            <br />
            <ul>
              <li>
                <span>Citywide Event Listings:</span> Browse upcoming
                senior-friendly events—workshops, clubs, fitness classes,
                socials, concerts, and more.
              </li>
              <li>
                <span>Easy RSVP:</span> One-tap sign-up lets you confirm
                attendance and see who else is going.
              </li>
              <li>
                <span>Personalized Recommendations:</span> Tailor your feed by
                interests—arts & crafts, walking groups, book clubs, health
                seminars, and beyond.
              </li>
              <li>
                <span>Reminders & Notifications:</span> Get timely alerts so you
                never forget a reservation or special gathering.
              </li>
              <li>
                <span>Accessibility First:</span> Large-print text,
                high-contrast mode, and voice-over support make navigation
                simple and clear.
              </li>
              <li>
                <span>Favorites & History:</span> Save events you love and
                revisit past activities to plan repeat visits.
              </li>
              <li>
                <span>Safe & Private:</span> Your data stays secure—no sharing
                with third parties, and you control all notification settings.
              </li>
            </ul>
            <br />
            Whether you’re looking to learn a new craft, join a walking tour, or
            attend a local concert, our app makes it effortless to stay engaged
            and discover what’s happening around you. Download now and start
            exploring!
          </p>
          {/* <div> */}
          <img src={appScreenshot3} alt="app-screenshot3" />
          {/* </div> */}
        </div>
      </section>

      <footer>
        <div>
          <h3>Contact Us</h3>
          <p>
            <span>E-Mail :</span>{" "}
            <a href="mailto:ns@ollytheapp.com">
              intergenerationalimpacts@gmail.com
            </a>
          </p>
          <p>
            <span>Organization Name : </span>Intergenerational Impacts
          </p>
          <p>
            <span>Address : </span> USA, New York
          </p>
        </div>
        <div className="copyright">
          <span>&copy; 2024, Intergenerational Impacts Private Limited</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
