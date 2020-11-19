import { Center, Flex } from "@chakra-ui/react";
import { TransactionTable } from "../components/TransactionTable";

const Index = () => (
  <Flex margin={10} alignContent="center">
    <TransactionTable />
  </Flex>
);

export default Index;
