import {
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Box,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    useToast,
    Flex
  } from '@chakra-ui/react';
  import React, { useEffect, useState } from 'react';
  import axiosInstance from '../JS/Axios';
  import { AddIcon } from '@chakra-ui/icons';
import BudgetCard from '../components/BudgetCard';
  
  const Budget = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const [budget, setBudget] = useState({ category: '', amount: '', date: '' });
    const toast = useToast();
    const [data, setData] = useState([]);


  //Fetching the budget

  useEffect(() => {
      const fetchBudget = async () => {
          try{
            const response = await axiosInstance.get('http://localhost:8080/budget');
            setData(response.data);
          }catch(err){
            console.log(err)
          }
          
      }
      fetchBudget();
  },[budget])
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setBudget({
        ...budget,
        [name]: value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!budget.category || !budget.amount || !budget.date) {
        toast({
          title: 'All fields are required.',
          status: 'warning',
          duration: 2000,
          isClosable: true,
        });
        return;
      }
      try {
        const response = await axiosInstance.post('http://localhost:8080/budget/budget', budget);
        console.log('Budget submitted:', response.data);
        toast({
          title: 'Budget created successfully.',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        setBudget({ category: '', amount: '', date: '' });
        onClose();
      } catch (error) {
        console.error('Error creating budget entry:', error);
        toast({
          title: 'Error creating budget entry.',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      }
    };
  
    return (
      <>
        <Heading textAlign={'center'} mb={6}>Create your Budget</Heading>
     <Flex justifyContent={'space-evenly'} mb={6} gap={4}>
     <Box borderRadius={"lg"} boxShadow={"lg"} border={"2px dashed black"} p={4} w="500px" >
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
                      min={new Date().toISOString().split("T")[0]}
                      name="date"
                      value={budget.date}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <Button type="submit" colorScheme="teal" width="full">Submit</Button>
                </form>
              </Box>

              <Box borderRadius={"lg"} boxShadow={"lg"} border={"2px dashed black"} p={4} w="500px" >
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
                      min={new Date().toISOString().split("T")[0]}
                      name="date"
                      value={budget.date}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <Button type="submit" colorScheme="teal" width="full">Submit</Button>
                </form>
              </Box>
     </Flex>
       
        <BudgetCard  data={data}/>
      </>
    );
  };
  
  export default Budget;
  