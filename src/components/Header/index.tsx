import { useMemo } from 'react';

import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useAuth } from '@/hooks/auth';

export function Header() {
  const router = useRouter();

  function handleActionButton() {
    document?.querySelector('#inscricao')?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <Box bgColor="#FF8200">
      <Flex
        as="header"
        w="100%"
        display="flex"
        justify="space-around"
        align="center"
        color="white"
        h="6rem"
        px="1rem"
        mx="auto"
        maxWidth="1366px"
      >
        <Flex width={['20', '35', '40']} height={['30', '25', '20']}>
          <Flex width="100%" height="100%" position="relative">
            <Image
              src="/assets/icone-shalom.png"
              alt="Logo Shalom"
              fill
              objectFit="cover"
            />
          </Flex>
        </Flex>
        <Text fontWeight="bold" fontSize={['md', '3xl']} textAlign="center">
          {"ACAMP'S BEACH"}
        </Text>
        <Button
          colorScheme="whiteAlpha"
          borderRadius="full"
          size={['md', 'lg']}
          onClick={handleActionButton}
        >
          INSCREVA-SE
        </Button>
        {/* <Box cursor="pointer">Sobre o Evento</Box> */}
        {/* <Box cursor="pointer">Contatos</Box> */}
      </Flex>
    </Box>
  );
}
