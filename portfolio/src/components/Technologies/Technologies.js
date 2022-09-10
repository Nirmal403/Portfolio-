import React from "react";
import {
  TechnologiesContainer,
  TechnologiesHeader,
  TechnologiesIcons,
  TechnologyIcon,
} from "../styles/Technologies.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { iconsData } from "./icons";

const Technologies = () => {
  return (
    <TechnologiesContainer id="technology">
      {/* <TechnologiesHeader>Technologies I am familiar with</TechnologiesHeader> */}
      <SectionHeading>
        <SectionTitle number="03">Technologies</SectionTitle>
      </SectionHeading>
      <TechnologiesIcons>
        {iconsData.map((iconData) => {
          return (
            <TechnologyIcon
              key={iconData.id}
              src={iconData.icon}
              alt={iconData.name}
              title={iconData.name}
              {...iconData}
            />
          );
        })}
      </TechnologiesIcons>
    </TechnologiesContainer>
  );
};

export default Technologies;
