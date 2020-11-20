import { Box } from "@chakra-ui/react";

const Amount = ({transaction}) =>  {
    const amountTextColor = transaction.isCredit
    ? { color: "forestgreen" }
    : { color: "firebrick" };
  const negativeOrPositiveSign = transaction.isCredit ? "+" : "-";    

  return (
    <Box ml={5} fontFamily="Menlo" css={amountTextColor} key={transaction.id}>
    {negativeOrPositiveSign + '$' + transaction.amount}
  </Box>
  )  
}

export default Amount;
