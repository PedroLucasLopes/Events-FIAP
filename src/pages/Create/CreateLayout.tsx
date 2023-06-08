import { useCallback } from "react";
import {
  Button,
  Divider,
  HStack,
  Heading,
  Input,
  Textarea,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const CreateLayout = () => {
  const { pathname } = useLocation();
  const talkOrEvent = useCallback((pathname: string) => {
    const path = pathname.slice(1, pathname.length);

    const page: any = {
      createEvent: {
        type: "Evento",
        label: ["Título do anúncio", "Categoria", "Descrição"],
      },
      createTalk: {
        type: "Talk",
        label: ["Título da comunidade", "Categoria", "Propósito da comunidade"],
      },
    };
    return page[path];
  }, []);

  const { type, label } = talkOrEvent(pathname);
  return (
    <>
      <VStack
        background="#0095FF"
        backgroundSize="2rem"
        w="100%"
        h="100%"
        align="center"
        justify="center"
      >
        <HStack
          mt="2rem"
          mb="1rem"
          align="center"
          justify="center"
          maxW="30rem"
        >
          <Heading fontSize="1.6rem" color="#f9f9f9">
            Criar {type}
          </Heading>
        </HStack>
      </VStack>
      <VStack mt="2rem">
        <Input
          type="file"
          w="15rem"
          h="10rem"
          border="1px dotted gray"
          textAlign="center"
        />
        <Divider pt="1rem" maxW="30rem" />
        {label.map((_text: string, i: number) => {
          return (
            <VStack align="left" key={i}>
              <label>{_text}</label>
              {_text === "Descrição" || _text === "Propósito da comunidade" ? (
                <Textarea w="90vw" maxW="30rem" />
              ) : (
                <Input type="text" w="90vw" maxW="30rem" />
              )}
            </VStack>
          );
        })}
        <Text fontSize=".8rem">
          Ao publicar você concorda e aceita nossos Termos de Uso e Privacidade
        </Text>
        <Button colorScheme="blue" size="lg">
          Criar {type}
        </Button>
      </VStack>
    </>
  );
};

export default CreateLayout;
