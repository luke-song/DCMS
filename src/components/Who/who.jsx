import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Image,
} from "@chakra-ui/react";

export default function Who() {
  return (
    <Container maxW="container.xl" centerContent="center">
      <Heading as="h3" fontSize="9xl" mb={4} textColor="#464549">
        Our Team
      </Heading>
      <SimpleGrid
        columns="2"
        spacing="20px"
        backgroundColor="white"
        spacingX="5px"
        maxW="1000"
        textColor="#464549"
        gridTemplateColumns="250px 455px"
        borderRadius={30}
      >
        <Image
          boxSize="250px"
          objectFit="cover"
          padding="4"
          src="/akshat.png"
          alt="Akshat"
          backgroundSize="500px"
          backgroundColor="white"
          paddingLeft={5}
          borderRadius={45}
          marginTop={2}
          marginLeft={1}
        />
        <Container
          fontFamily={"chicago"}
          backgroundColor=""
          textColor="#464549"
          padding="5"
          h="266px"
          fontSize={12}
        >
          <Heading
            fontFamily={"chicago"}
            fontSize={22}
            paddingBottom={4}
            paddingTop={5}
            textColor="#FF6467"
          >
            Akshat Giri
          </Heading>
          <h1>
            Explain who you are. What do you do? What are your hobbies? What are your interests?
          </h1>
        </Container>
      </SimpleGrid>
      <Container h="50px" />
      <SimpleGrid
        columns="2"
        spacing="20px"
        backgroundColor="white"
        spacingX="5px"
        maxW="1000"
        textColor="#464549"
        gridTemplateColumns="455px 250px"
        borderRadius={30}
      >
        <Container
          fontFamily={"chicago"}
          backgroundColor=""
          textColor="#464549"
          padding="5"
          h="266px"
          fontSize={12}
        >
          <Heading
            fontFamily={"chicago"}
            fontSize={22}
            paddingBottom={4}
            paddingTop={5}
            textColor="#FF6467"
          >
            Luke Song
          </Heading>
          <h1>
            Software Engineering Student at San Jose State University, graduates
            2023.
          </h1>
          <br />
          <h1>
            Have a passion for web development and building applications from
            the ground up! Specialize mainly in web architecture and full-stack
            development.
          </h1>
        </Container>
        <Image
          boxSize="250px"
          objectFit="cover"
          padding="4"
          src="/luke.jpg"
          alt="Luke"
          backgroundSize="200px"
          backgroundColor=""
          paddingRight={4}
          borderRadius={45}
          marginLeft={-4}
          marginTop={2}
        />
      </SimpleGrid>

      <Divider orientation="horizontal" color="#464549" h="50px" />
      <SimpleGrid
        columns="2"
        spacing="20px"
        backgroundColor="white"
        spacingX="5px"
        maxW="1000"
        textColor="#464549"
        gridTemplateColumns="250px 455px"
        borderRadius={30}
      >
        <Image
          boxSize="250px"
          objectFit="cover"
          padding="4"
          src="/andrew.jpg"
          alt="Andrew"
          backgroundSize="500px"
          backgroundColor="white"
          paddingLeft={5}
          borderRadius={45}
          marginTop={2}
          marginLeft={1}
        />
        <Container
          fontFamily={"chicago"}
          backgroundColor=""
          textColor="#464549"
          padding="5"
          h="266px"
          fontSize={12}
        >
          <Heading
            fontFamily={"chicago"}
            fontSize={22}
            paddingBottom={4}
            paddingTop={5}
            textColor="#FF6467"
          >
            Andrew Bustos
          </Heading>
          <h1>
            Explain who you are. What do you do? What are your hobbies? What are your interests?
          </h1>
        </Container>
      </SimpleGrid>
      <Container h="50px" />
      <SimpleGrid
        columns="2"
        spacing="20px"
        backgroundColor="white"
        spacingX="5px"
        maxW="1000"
        textColor="#464549"
        gridTemplateColumns="455px 250px"
        borderRadius={30}
      >
        <Container
          fontFamily={"chicago"}
          backgroundColor=""
          textColor="#464549"
          padding="5"
          h="266px"
          fontSize={12}
        >
          <Heading
            fontFamily={"chicago"}
            fontSize={22}
            paddingBottom={4}
            paddingTop={5}
            textColor="#FF6467"
          >
            Jimin Song
          </Heading>
          <h1>
            Software Engineer.
          </h1>
          <h1>
           A data-enthusiastic and highly motivated engineer
          </h1>
        </Container>
        <Image
          boxSize="250px"
          objectFit="cover"
          padding="4"
          src="/jimin.jpg"
          alt="Jimin"
          backgroundSize="200px"
          backgroundColor=""
          paddingRight={4}
          borderRadius={45}
          marginLeft={-4}
          marginTop={2}
        />
      </SimpleGrid>
      <Divider orientation="horizontal" color="#464549" h="50px" />
      <SimpleGrid
        columns="2"
        spacing="20px"
        backgroundColor="white"
        spacingX="5px"
        maxW="1000"
        textColor="#464549"
        gridTemplateColumns="250px 455px"
        borderRadius={30}
      >
        <Image
          boxSize="250px"
          objectFit="cover"
          padding="4"
          src="/minjae.jpeg"
          alt="minjae"
          backgroundSize="500px"
          backgroundColor="white"
          paddingLeft={5}
          borderRadius={45}
          marginTop={2}
          marginLeft={1}
        />
        <Container
          fontFamily={"chicago"}
          backgroundColor=""
          textColor="#464549"
          padding="5"
          h="266px"
          fontSize={12}
        >
          <Heading
            fontFamily={"chicago"}
            fontSize={22}
            paddingBottom={4}
            paddingTop={5}
            textColor="#FF6467"
          >
            Minjae Kwon
          </Heading>
          <h1>
            Front End Developer
          </h1>
          <br />
          <h1>
            Focused on creating a great user experience on web-based applications.
            Has experience in developing consumer-focused websites using React.
          </h1>
        </Container>
      </SimpleGrid>
    </Container>
  );
}
