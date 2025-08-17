import "../styles/Team.css";
// Keeping these here for reference
// import fed from "../data/team/fed.png";
import default_image from "../data/team4/default.jpg"
import kevin from "../data/team3/kevin2024.jpg";
import albert from "../data/team3/albert.png"
import jack from "../data/team3/jack.png"
import alex from "../data/team2/alex.jpg";
import youdas from "../data/team3/youdas.png";
import salim from "../data/team3/salim.png";
import fed from "../data/team2/fed2.jpeg";
import russel from "../data/team2/russel.jpeg";
import sarah from "../data/team3/sarah.png";
import ScrollAnimation from "react-scroll-animation-wrapper";

const Profile = ({ role, src, alt, title, name, experience, major }) => {
  return (
    <div className={`${role}-profile-container`}>
      <img
        src={src}
        alt={alt}
        className={`${role}-profile-container_picture`}
      />

      <div className="profile-info">
        <h3 style={{ color: "crimson", marginBottom: 0 }}>{name}</h3>
        <h3>{title}</h3>
        <p>{experience}</p>
        <p className="text-sm">{major}</p>
      </div>
    </div>
  );
};

function Team2024() {
  return (
    <div
      id="team"
      style={{ padding: "5%", backgroundColor: "rgba(230, 230, 230, 0.5)" }}
    >
      <h1 className="section-header" tabIndex="0">
        Meet the 2025-2026 Team
      </h1>
      <div className="coach-container">
        
        <ScrollAnimation animateIn="fade-in-r-to-l" offset={0}>
          <Profile
            role="coach"
            src={youdas}
            alt=""
            title="President"
            name="Youdas Yessad"
            experience="Amateur Boxer - P4P"
            major="U3 Soft. Eng."
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fade-in" offset={0}>
          <Profile
            role="coach"
            src={alex}
            alt="Alex Moghadam"
            title="Vice-President & Head Coach"
            name="Alexander Moghadam"
            experience="Amateur Boxer - Hard Knox"
            major="U3 Honours in Investment Management"
          />
        </ScrollAnimation>
        
      </div>
      <div className="exec-container">
        <ScrollAnimation animateIn="fade-in-r-to-l" offset={0}>
          <Profile
            role="exec"
            src={default_image}
            alt="???"
            title="VP Finance"
            name="???"
            major="???"
            
          />
        </ScrollAnimation>
         
        <ScrollAnimation animateIn="fade-in" offset={0}>
          <Profile
            role="exec"
            src={sarah}
            alt="Sarah Ramonjavelo"
            title="VP External Affairs"
            name="Sarah Ramonjavelo"
            major="U4 Chem. Eng."
            
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fade-in-l-to-r" offset={0}>
          <Profile
            role="exec"
            src={default_image}
            alt="???"
            title="VP Logistics & Operations"
            name="???"
            major="???"
            
          />
        </ScrollAnimation>
        
        
      </div>
      <div className="exec-container">
        <ScrollAnimation animateIn="fade-in-l-to-r" offset={0}>
          <Profile
            role="coach"
            src={albert}
            alt="Albert Choi"
            title="Director of Events & Coach"
            name="Albert Choi"
            experience="Amateur Boxer - Underdog"
            major="Bsc. Kinesiology, U1 Master in Kinesiology"
            
          />
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fade-in" offset={0}>
          <Profile
            role="coach"
            src={jack}
            alt="Jack Petko"
            title="Director of Outreach & Coach"
            name="Jack Petko"
            experience="Amateur Boxer"
            major="U2 Honours Econ. & Finance"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fade-in-r-to-l" offset={0}>
          <Profile
            role="coach"
            src={salim}
            alt="Salim"
            title="Director of Marketing & Coach"
            name="Salim Tarbouche"
            experience="Amateur Boxer - Underdog"
            major="U2 Physiology"
          />
        </ScrollAnimation>
       
      </div>
      <div className="exec-container">
        <ScrollAnimation animateIn="fade-in-l-to-r" offset={0}>
          <Profile
            role="coach"
            src={fed}
            alt="fed"
            title="Executive Advisor"
            name="Federico Sanchez"
            experience="Former Professional Boxer"
            major="BSc. Kinesiology"
          />
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Team2024;
