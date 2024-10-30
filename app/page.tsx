"use client"
import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import {
  Container,
  MainSection,
  Content,
  Title,
  Paragraph,
  VideoContainer,
  GridSection,
  Grid,
  GridItem,
  FooterSection,
} from "../styles/HomeStyles";

const Home: React.FC = () => (
  <Container>
    <MainSection>
      <Content>
        <Title>Most important title on the page</Title>
        <Paragraph>
          We're no strangers to love. You know the rules and so do I. A full
          commitment's what I'm thinking of. You wouldn't get this from any
          other guy.
        </Paragraph>
      </Content>
      <VideoContainer>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video Rick Astley"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </VideoContainer>
    </MainSection>

    <GridSection>
      <h2>Also very important title</h2>
      <Grid>
        {[...Array(6)].map((_, index) => (
          <GridItem key={index}>
            <h3>Title</h3>
            <p>
              Never gonna give you up, never gonna let you down, never gonna run
              around and desert you. Never gonna make you cry, never gonna say
              goodbye, never gonna tell a lie and hurt you.
            </p>
          </GridItem>
        ))}
      </Grid>
      <Link href="/contact">
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: { xs: "10px", sm: "20px", md: "30px" },
          }}
        >
          Contact us
        </Button>
      </Link>
    </GridSection>

    <FooterSection>
      <h2>Less important title</h2>
      <Link href="/contact">
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: { xs: "10px", sm: "20px", md: "30px" },
          }}
        >
          Contact us
        </Button>
      </Link>
    </FooterSection>
  </Container>
);

export default Home;
