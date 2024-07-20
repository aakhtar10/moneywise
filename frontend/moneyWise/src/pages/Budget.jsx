import {
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Box,
    useDisclosure,
    Text,
    useToast,
    Flex,
    Select
  } from '@chakra-ui/react';
  import React, { useEffect, useState } from 'react';
  import axiosInstance from '../JS/Axios';
import BudgetCard from '../components/BudgetCard';
  
  const Budget = () => {
    const [budget, setBudget] = useState({ category: '', amount: ''});
    const [expense,setExpense]= useState({amount:'',category:'',date:`${Date.now()}`})
    const toast = useToast(); 
    const [data, setData] = useState([]);
   const eachcategory = data.map((item) => item.category);


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
    const handleExpenseChange = (e) => {
      const { name, value } = e.target;
      setExpense({
        ...expense,
        [name]: value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!budget.category || !budget.amount) {
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
        setBudget({ category: '', amount: ''});
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
     <Flex flexWrap={'wrap'} justifyContent={'space-evenly'}  gap={4}>
     <Box  borderRadius={"lg"} boxShadow={"lg"} border={"2px dashed black"} p={4} w="500px" >
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
                  
                  
                  <Button type="submit" colorScheme="teal" width="full">Submit</Button>
                </form>
              </Box>

              <Box borderRadius={"lg"} boxShadow={"lg"} border={"2px dashed black"} p={4} w="500px" >
                <form onSubmit={handleSubmit}>
                  <Flex justifyContent={'space-evenly'}  gap={4}>
                  <FormControl id="category" mb={4}>
                    <FormLabel>Expense Name</FormLabel>
                    <Input
                      type="text"
                      name="category"
                      value={budget.category}
                      onChange={handleChange}
                      placeholder="Eg. Rent, Food, etc."
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
                  </Flex>
                  {eachcategory.length > 0 ?(
                 <FormControl   id="category" mb={4}>
                  <FormLabel  >Budget Category</FormLabel>
                 <Select placeholder='Select Category'>
                  {eachcategory.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                 </Select>
                 </FormControl>) : null
  }
                  <Button type="submit" colorScheme="teal" width="full">Add Expense </Button>
                </form>
              </Box>
     </Flex>
   
 
  <Heading mt={6}>Existing Budgets</Heading>
  {data.length === 0 ? <Text mt={6} textAlign={'center'} >No existing budgets</Text> :
       <BudgetCard  data={data}/>
  }
      </>
    );
  };
  
  export default Budget;
  