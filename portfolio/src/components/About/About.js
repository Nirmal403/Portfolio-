import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";    
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/icons/my-image.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";

import resume from "../../assets/Nirmal_Resume.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="01">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage style={{}} src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          {/* <StyledParagraph>
            Currently pursuing full stack web development in Masai School. I am
            a passionate full stack web developer based in India.
          </StyledParagraph> */}
         
          <StyledParagraph>
          Motivated and skilled Front-End Web Developer with over 1.6 years of experience in translating UI/UX designs into efficient and visually appealing web applications. Proficient in HTML5, CSS3, and JavaScript frameworks such as ReactJs and Redux workflow. Adept at collaborating with cross-functional teams and implementing best practices in software development. Seeking an opportunity to contribute to a challenging project within asupportive and innovative working environment.
          </StyledParagraph>
          {/* <StyledParagraph>
           The technologies, tools and languages I am using to build
            my projects are HTML, CSS, JavaScript, React Js, Redux, Bootstrap,
            Git and GitHub, Chakra UI and VS Code.   And I
            am looking forward to talk with you!
          </StyledParagraph> */}
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="Nirmal_Resume"
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
