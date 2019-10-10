import RenImg from "../img/Rentech.png";
import DroomImg from "../img/droom.png";
import CalcImg from "../img/myCalc.png";
import gitImg from "../img/gitImg.png";
import hackImg from "../img/hackernews.png";

const data = {
  properties: [
    {
      _id: "React Calculator",
      index: 0,
      picture: CalcImg,
      code: "https://github.com/DeejayEaster/my-react-calculator",
      url: "https://deejay-react-calc.netlify.com/",
      info:
        "This is a functioning calculator built with react and styled with SASS. ",
      tech1: "fab fa-react fa-2x",
      tech2: "fab fa-sass fa-2x"
    },
    {
      _id: "Droom",
      index: 1,
      picture: DroomImg,
      code: "https://github.com/lambda-bw-droom/droom-landing",
      url: "https://lambda-bw-droom.github.io/droom-landing/",
      info:
        "Droom is an application designed to create a new way for employers and employees to break the ice and start a conversation. Think Tinder meets Indeed. My role was to design the marketing landing page for the site. The app, however, is not yet complete.",
      tech1: "fab fa-html5 fa-2x",
      tech2: "fab fa-sass fa-2x",
      tech3: "fab fa-js-square fa-2x"
    },
    {
      _id: "Rentech",
      index: 2,
      picture: RenImg,
      code:
        "https://github.com/build-week-use-my-tech-stuff-umts/umts-frontend",
      url: "https://rentech.netlify.com/login",
      info:
        "Rentech is a project that was built to create a classifieds marketplace that allows users to loan or sell their unwanted tech items. My role in this project was Front-End architect. It was my job to build out the components, implement the functionality, and style the application. I also handled state management with Redux.",
      tech1: "fab fa-react fa-2x",
      tech2: "fab fa-sass fa-2x",
      tech3: "fab fa-node fa-2x"
    },
    {
      _id: "Hacker News Clone",
      index: 3,
      picture: hackImg,
      code: "https://github.com/orgs/React-Hacker-News-Clone/dashboard",
      url: "https://modern-hackernews.netlify.com/login",
      info:
        "This is an attempt to bring the legendary hacker-news web application into the modern era of the internet. My role in building out this application was creating the Java and Node back-end, which included a CRUD feature for a user to contribute their own news stories.",
      tech1: "fab fa-react fa-2x",
      tech2: "fab fa-java fa-2x",
      tech3: "fab fa-node fa-2x"
    },
    {
      _id: "Github Dashboard",
      index: 4,
      picture: gitImg,
      code: "https://github.com/DeejayEaster/Sprint-Challenge--User-Interface",
      url: "http://www.deejay.dev/github-usercard/",
      info:
        "This project uses the GitHub API to render data about me and my followers. I am currently working on a complete GitHub dashboard version of this application that will display contribution statistics and a deeper insight into my Git projects.",
      tech1: "fab fa-react fa-2x",
      tech2: "fab fa-sass fa-2x"
    }
  ]
};

export default data;
