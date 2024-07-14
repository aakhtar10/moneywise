import {
    Box,
    Flex,
    Grid,
    GridItem,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Progress,
    useDisclosure,
    Button,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
 
  
  const BudgetCard = ({ data }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedBudget, setSelectedBudget] = useState(null);
  
    const handleCardClick = (budget) => {
      setSelectedBudget(budget);
      onOpen();
    };
  
    return (
      <>
        <Modal size="xl" isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
          <ModalOverlay backdropFilter="revert-layer" backdropInvert="80%" backdropBlur="1px" />
          <ModalContent>
            <ModalHeader>Budget Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {selectedBudget && (
                <>
                  <Box mb={4}>
                    <strong>Category:</strong> {selectedBudget.category}
                  </Box>
                  <Box mb={4}>
                    <strong>Amount:</strong> ${selectedBudget.amount}
                  </Box>
                  <Box>
                    <strong>Date:</strong> {selectedBudget.date}
                  </Box>
                </>
              )}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Grid mt="30px" templateColumns="repeat(3, 1fr)" gap={4}>
          {data.map((item) => (
            <GridItem
              borderRadius="10px"
              bg="rgb(48, 151, 148)"
              p="20px"
              key={item.id}
              onClick={() => handleCardClick(item)}
              cursor="pointer"
            >
              <Flex padding="10px" justifyContent="space-between">
                <Box fontWeight="bold">{item.category}</Box>
                <Box>${item.amount} Budgeted</Box>
              </Flex>
              <Progress border="1px solid black" hasStripe value={20} />
              <Box padding="10px" textAlign="right" fontStyle="italic">
                Budget Date: {item.date}
              </Box>
            </GridItem>
          ))}
        </Grid>
      </>
    );
  };
  
  export default BudgetCard;
  