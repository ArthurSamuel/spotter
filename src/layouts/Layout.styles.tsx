import styled from "@emotion/styled";

export const ContainerLayout = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 65px;
`;

export const WrapperLayout = styled.div`
  max-width: 1024px;
  width: 100%;

  @media (max-width: 1023px) {
    /* background-color: blue; */
    padding-left: 13px;
    padding-right: 13px;
  }
`;
