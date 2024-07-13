import { Box, Flex, Grid, GridItem,Progress } from '@chakra-ui/react'
import React from 'react'

const BudgetCard = ({data}) => {
  return (
  <>

<Grid mt={"30px"} templateColumns='repeat(3, 1fr)' gap={4}>
{data.map(item=>{
    return(
        <GridItem borderRadius={"10px"} bg={"rgb(48, 151, 148)"}  p={"20px"} key={item.id} >
            <Flex padding={"10px"} justifyContent={"space-between"}>
                <Box>{item.category}</Box>
                <Box>${item.amount} Budgeted</Box>
            </Flex>
            <Progress border={"1px solid black"} hasStripe value={20} />
            <Box padding={"10px"}>{item.date}</Box>
         </GridItem>
    )
})}
</Grid>

  </>
  )
}

export default BudgetCard