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
    codeLink: "https://github.com/ribhar/PharmEasy-clone",
    liveLink: "https://pharmeasyin.netlify.app/",
    techstack: ["HTML,CSS,Javascript"]
  },
  
  {
    id: 2,
    image: project3Laptop,
    transitionImage: project3Mobile,
    title: "Freshly",
    codeLink: "https://github.com/Nirmal403/Freshly.git",
    liveLink: "https://graceful-belekoy-c9fe2f.netlify.app/index.html",
    techstack: ["HTML,CSS,Javascript,ES6"]
  },
  {
    id: 3,
    image: project2Laptop,
    transitionImage: project2Mobile,
    title: "Tripoto Clone",
    codeLink: "https://github.com/Nirmal403/Tripoto-clone",
    liveLink: "https://tripoto-nirmal403.vercel.app/",
    techstack: ["HTML, CSS, Javascript, ReactJs, Redux"]
  },
  
];
