import {
  GridItem,
  Image,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { colors } from "../../theme";
import SectionContainer from "../SectionContainer";

const Bio = ({ secondary }) => (
  <GridItem>
    <VStack m="auto" w="75%" spacing="12px" pt="5%">
      <Text>
        Hi, I&apos;m Brian I studied Information Science at the University of
        Kenyatta, and I&apos;m currently working in{" "}
        <Link href="https://www.sama.com/" isExternal>
          Sama
        </Link>{" "}
        as a <strong style={{ color: secondary }}>Quality analyst</strong>{" "}
        on the{" "}
        <Link
          href="/"
          isExternal
        >
          Datalabeling Platform
        </Link>
        .
      </Text>
      <Text>
      I am a skilled programmer with experience in using React,
       JavaScript, Django, and Python to develop websites and applications.
        I have experience in using Docker to create efficient and scalable deployments.
         Additionally, I am knowledgeable in using tools such as Canva and Notion to create high-quality designs and project management solutions.
        .
      </Text>
    </VStack>
  </GridItem>
);

const Headshot = () => (
  <GridItem>
    <Image
      m="auto"
      src="/me.jpg"
      alt="Brian Madoy"
      zIndex={1}
      className="image"
      onClick={() => {
        window.open("https://www.linkedin.com/in/brian-madoyi-581207199/");
      }}
    />
  </GridItem>
);

export default function About() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  return (
    <SectionContainer
      id="about"
      name="about"
      headerMt="-5%"
      headerText="About Me"
      useHeaderStyle
    >
      <SimpleGrid
        pl="10%"
        pt="5%"
        pr="10%"
        spacing={12}
        columns={[1, null, 2]}
        justifyContent="center"
      >
        {shouldAlternate ? <Bio secondary={secondary} /> : <Headshot />}
        {shouldAlternate ? <Headshot /> : <Bio secondary={secondary} />}
      </SimpleGrid>
    </SectionContainer>
  );
}
