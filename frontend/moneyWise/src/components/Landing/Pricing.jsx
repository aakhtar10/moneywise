import React from 'react';
import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

// Options for each pricing tier
const options = [
  { id: 1, desc: 'Basic features included' },
  { id: 2, desc: 'Priority customer support' },
  { id: 3, desc: 'Access to quarterly business insights' },
];

// Component for each pricing tier
const PackageTier = ({ title, options, typePlan, checked = false }) => {
  const textColor = checked ? 'white' : 'purple.600';
  const bgColor = checked ? 'purple.400' : 'gray.300';

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: 'flex-start',
        md: 'space-around',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      alignItems={{ md: 'center' }}
    >
      <Heading size={'md'}>{title}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={'xl'}>{typePlan}</Heading>
      <Stack>
        <Button
          size="md"
          color={textColor}
          bgColor={bgColor}
        >
          Get Started
        </Button>
      </Stack>
    </Stack>
  );
};

// Main component for three-tier pricing layout
const ThreeTierPricingHorizontal = () => {
  return (
    <Box py={6} px={5} width="full">
      <Stack spacing={4} width={'100%'} direction={'column'}>
        <Stack
          p={5}
          alignItems={'center'}
          justifyContent={{
            base: 'flex-start',
            md: 'space-around',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}
        >
          <Stack
            width={{
              base: '100%',
              md: '40%',
            }}
            textAlign={'center'}
          >
            <Heading size={'lg'}>
              The Right Plan for <Text color="purple.400">Money Wise</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: '100%',
              md: '60%',
            }}
          >
            <Text textAlign={'center'}>
              Choose the plan that suits your business needs. Our plans offer essential features, top-notch support, and valuable insights to help your business thrive.
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <PackageTier title={'Starter'} typePlan="Free" options={options} />
        <Divider />
        <PackageTier title={'Standard'} typePlan="$32.00" options={options} />
        <Divider />
        <PackageTier title={'Premium'} typePlan="$50.00" options={options} />
      </Stack>
    </Box>
  );
};

export default ThreeTierPricingHorizontal;
