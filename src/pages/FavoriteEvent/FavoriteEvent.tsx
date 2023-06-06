import React from "react";
import { Heading, VStack, Text, HStack } from "@chakra-ui/react";
import PageTitle from "../../components/PageTitle/PageTitle";
import ActionCard from "../../components/ActionCard/ActionCard";
import ButtonForm from "../../components/Button/Button";

const FavoriteEvent = () => {
  const cardData = [
    {
      svg: "",
      label: "Jogos",
      id: "",
    },
    {
      svg: "",
      label: "Músicas",
      id: "",
    },
    {
      svg: "",
      label: "Teatro",
      id: "",
    },
    {
      svg: "",
      label: "Cinema",
      id: "",
    },
    {
      svg: "",
      label: "Parque",
      id: "",
    },
  ];
  return (
    <VStack
      m="0 auto"
      maxWidth="768px"
      w="100%"
      align="center"
      justify="center"
    >
      <Heading w="100%">
        <PageTitle>Qual o seu tipo de evento favorito?</PageTitle>
      </Heading>
      <VStack w="100%" align="left" pl="1rem">
        <Text fontWeight="bold" pt="2rem" fontSize="1.5rem">
          Eventos Culturais
        </Text>
        <HStack
          w="100%"
          overflow="scroll"
          overflowY="hidden"
          overflowX={window.innerWidth >= 768 ? "hidden" : undefined}
        >
          {cardData.map((data) => (
            <ActionCard
              path={`${data.id}`}
              svg={undefined}
              backgroundColor="#0095FF"
              color="#fefefe"
              height="4.5rem"
              width="6rem"
            >
              {data.label}
            </ActionCard>
          ))}
        </HStack>
      </VStack>
      <VStack w="100%" align="left" pl="1rem">
        <Text fontWeight="bold" pt="2rem" fontSize="1.5rem">
          Eventos de jogos
        </Text>
        <HStack
          w="100%"
          flex="wrap"
          overflow="scroll"
          overflowY="hidden"
          overflowX={window.innerWidth >= 768 ? "hidden" : undefined}
        >
          {cardData.map((data) => (
            <ActionCard
              path={`${data.id}`}
              svg={undefined}
              backgroundColor="#0095FF"
              color="#fefefe"
              height="4.5rem"
              width="6rem"
            >
              {data.label}
            </ActionCard>
          ))}
        </HStack>
      </VStack>
      <VStack w="100%" align="left" pb="2rem" pl="1rem">
        <Text fontWeight="bold" pt="2rem" fontSize="1.5rem">
          Eventos de culinária
        </Text>
        <HStack
          w="100%"
          flex="wrap"
          overflow="scroll"
          overflowY="hidden"
          overflowX={window.innerWidth >= 768 ? "hidden" : undefined}
        >
          {cardData.map((data) => (
            <ActionCard
              path={`${data.id}`}
              svg={undefined}
              backgroundColor="#0095FF"
              color="#fefefe"
              height="4.5rem"
              width="6rem"
            >
              {data.label}
            </ActionCard>
          ))}
        </HStack>
      </VStack>
      <ButtonForm size="lg" color="blue" type="button">
        Continuar
      </ButtonForm>
    </VStack>
  );
};

export default FavoriteEvent;
