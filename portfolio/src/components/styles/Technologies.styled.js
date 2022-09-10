import styled from "styled-components";

export const TechnologiesContainer = styled.section`
  // background-color: ${({ theme }) => theme.backgroundColor.dark};
  // color: ${({ theme }) => theme.color.light};
  background-color: ${({ theme }) => theme.backgroundColor.light};
  color: ${({ theme }) => theme.color.dark};
`;

export const TechnologiesHeader = styled.h2`
  text-align: center;
  font-weight: 700;
`;

export const TechnologiesIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 3rem;
  // border: 1px solid red;
  height: 5rem
`;

export const TechnologyIcon = styled.img`
  height: 5rem;
  // border: 1px solid red;
  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 24px;
  }
`;
