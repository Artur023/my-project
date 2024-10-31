import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const MainSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  gap: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px); 
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding-right: 20px;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  color: #555;
`;

export const VideoContainer = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  iframe {
    width: 100%;
    height: 100%;
  }
`;

export const GridSection = styled.section`
  text-align: center;
  margin-bottom: 40px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 20px auto;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.div`
  text-align: left;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px); 
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterSection = styled.section`
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
`;
