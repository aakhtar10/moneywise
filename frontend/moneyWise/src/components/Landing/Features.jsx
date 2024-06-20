'use client';

import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FcMoneyTransfer,
  FcCurrencyExchange,
  FcStatistics,
  FcBullish,
  FcPlanner,
} from 'react-icons/fc';

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function GridListWith() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Manage Your Finances Effectively
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          With Money Wise, you can easily track your expenses, manage your income, and gain insights into your financial health.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Expense Tracking'}
            icon={<Icon as={FcMoneyTransfer} w={10} h={10} />}
            description={'Keep a detailed record of all your expenses to manage your budget efficiently.'}
            href={'#'}
          />
          <Card
            heading={'Income Management'}
            icon={<Icon as={FcCurrencyExchange} w={10} h={10} />}
            description={'Monitor your income from various sources and ensure a balanced financial life.'}
            href={'#'}
          />
          <Card
            heading={'Financial Reports'}
            icon={<Icon as={FcStatistics} w={10} h={10} />}
            description={'Generate comprehensive reports to get insights into your financial health and make informed decisions.'}
            href={'#'}
          />
          <Card
            heading={'Investment Tracking'}
            icon={<Icon as={FcBullish} w={10} h={10} />}
            description={'Track your investments and analyze their performance over time.'}
            href={'#'}
          />
          <Card
            heading={'Budget Planning'}
            icon={<Icon as={FcPlanner} w={10} h={10} />}
            description={'Plan your budget effectively to achieve your financial goals and stay on track.'}
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  );
}
