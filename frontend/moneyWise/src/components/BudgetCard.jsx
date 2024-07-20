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
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const BudgetCard = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [expenseData, setExpenseData] = useState([]);
  const columns = useBreakpointValue({ base: 1, md: 3 });

  const handleCardClick = (budget) => {
    setSelectedBudget(budget);
    onOpen();
  };

  useEffect(() => {
    if (selectedBudget) {
      const getExpenseData = async () => {
        try {
          const response = await fetch(`http://localhost:8080/getexpense/${selectedBudget.category}`,{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
          });
          const data = await response.json();
          console.log(data);
          setExpenseData(data);
        } catch (error) {
          console.error(error);
        }
      };
      getExpenseData();
    }
  }, [selectedBudget]);

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
                  <strong>Budget Amount:</strong> ${selectedBudget.amount}
                </Box>
                <Box>
                  <Table>
                    <thead>
                      <Tr>
                        <Th>Expense Name</Th>
                        <Th>Amount</Th>
                        <Th>Date</Th>
                      </Tr>
                    </thead>
                    <Tbody>
                      {expenseData.map((item) => (
                        <Tr key={item.id}>
                          <Td>{item.name}</Td>
                          <Td>${item.amount}</Td>
                          <Td>{item.date}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
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
      <Grid mt="30px" templateColumns={`repeat(${columns}, 1fr)`} gap={4}>
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
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default BudgetCard;
