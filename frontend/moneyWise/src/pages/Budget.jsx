import { Heading, FormControl, FormLabel, Input, Button, Box,  Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure, } from '@chakra-ui/react';
import React, { useState } from 'react';
import axios from 'axios';

const Budget = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  const [budget, setBudget] = useState({
    category: '',
    amount: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBudget({
      ...budget,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/budget', budget);
      console.log('Budget submitted:', response.data);
      // Optionally, you can reset the form or provide feedback to the user
      setBudget({ category: '', amount: '', date: '' });
    } catch (error) {
      console.error('Error creating budget entry:', error);
    }
  };

  return (
    <>
      <Heading textAlign={'center'} mb={6}>Create your Budget</Heading>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='green'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Box maxWidth="500px" mx="auto">
        <form onSubmit={handleSubmit}>
          <FormControl id="category" mb={4}>
            <FormLabel>Category</FormLabel>
            <Input 
              type="text" 
              name="category" 
              value={budget.category} 
              onChange={handleChange} 
              placeholder="Enter budget category"
            />
          </FormControl>
          <FormControl id="amount" mb={4}>
            <FormLabel>Amount</FormLabel>
            <Input 
              type="number" 
              name="amount" 
              value={budget.amount} 
              onChange={handleChange} 
              placeholder="Enter amount"
            />
          </FormControl>
          <FormControl id="date" mb={4}>
            <FormLabel>Date</FormLabel>
            <Input 
              type="date" 
              min= {new Date().toISOString().split("T")[0]}
              name="date" 
              value={budget.date} 
              onChange={handleChange} 
              placeholder="Enter date"
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" width="full">Submit</Button>
        </form>
      </Box>
    </>
  );
};

export default Budget;
