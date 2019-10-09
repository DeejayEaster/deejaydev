import RenImg from "../img/Rentech.png";
import DroomImg from "../img/droom.png";
import CalcImg from "../img/myCalc.png";
import gitImg from "../img/gitImg.png";

const data = {
  properties: [
    {
      _id: "React Calculator",
      index: 0,
      picture: CalcImg,
      code: "https://github.com/DeejayEaster/my-react-calculator",
      url: "https://deejay-react-calc.netlify.com/",
      info:
        "This is a functioning calculator built in react and styled with SASS. ",
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
        "Droom is an application designed to xreate a new way for employers and employess to interface. Think tinder meets indeed. My role was to design the marketing landing page for the site.",
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
        "Rentech is a project that was built with the objective of creating a classifieds marketplace that allows users to loan or sell their unwanted tech items. My role in this project was front-end archetect. It's was my job to build out the components and style the application, as well as handle state managment.",
      tech1: "fab fa-react fa-2x",
      tech2: "fab fa-sass fa-2x",
      tech3: "fab fa-node fa-2x"
    },
    {
      _id: "Github Dashboard",
      index: 3,
      picture: gitImg,
      code: "https://github.com/DeejayEaster/Sprint-Challenge--User-Interface",
      url: "http://www.deejay.dev/github-usercard/",
      info:
        "Currently this project used the github api to render data about me and my followers. I am currently working on a complete github dashboard version of this application.",
      tech1: "fab fa-react fa-2x",
      tech2: "fab fa-sass fa-2x"
    },
    {
      _id: "Hacker News Clone",
      index: 4,
      picture:
        "https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property01.jpg",
      code:
        "https://github.com/build-week-use-my-tech-stuff-umts/umts-frontend",
      url: "https://deejay-react-calc.netlify.com/",
      info:
        "This is an attempt to bring the legendary hacker-news web application into the modern world ear of the internet. My role in building out this application was creating the Java and Node backend, which included a crud User's News feature.",
      tech1: "fab fa-react fa-2x",
      tech2: "fab fa-java fa-2x",
      tech3: "fab fa-node fa-2x"
    }
  ]
};

export default data;
