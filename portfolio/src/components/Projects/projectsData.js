import {
  project1Laptop,
  project1Mobile,
  project2Laptop,
  project2Mobile,
  project3Laptop,
  project3Mobile,
} from "./projectImages";

export const projectData = [
  {
    id: 1,
    image: project1Laptop,
    transitionImage: project1Mobile,
    title: "PharmEasy Clone",
    codeLink: "https://github.com/Nirmal403/PharmEasy",
    liveLink: "https://pharm-easy-beta.vercel.app/",
    techstack: ["HTML,CSS,Javascript"],
    description: "PharmEasy is one of India's most trusted online pharmacy & medical stores offering pharmaceutical and healthcare products. A web application to buy medicines and book lab test appointments."
  },
  
  {
    id: 2,
    image: project3Laptop,
    transitionImage: project3Mobile,
    title: "Freshly",
    codeLink: "https://github.com/Nirmal403/Freshly.git",
    liveLink: "https://graceful-belekoy-c9fe2f.netlify.app/index.html",
    techstack: ["HTML,CSS,Javascript,ES6"],
    description:"Freshly is a healthy food app were you can able to order your favourite food dish via online.",
  },
  {
    id: 3,
    image: project2Laptop,
    transitionImage: project2Mobile,
    title: "Tripoto Clone",
    codeLink: "https://github.com/Nirmal403/Tripoto-clone",
    liveLink: "https://tripoto-nirmal403.vercel.app/",
    techstack: ["HTML, CSS, Javascript, ReactJs, Redux, Chakra UI"],
    description:"Tripoto is a travel Booking website, for providing end to end solution to to your travelling by making your bookings handy.",
  },
  
];
