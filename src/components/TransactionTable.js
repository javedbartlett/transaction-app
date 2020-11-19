import { Box, Flex, Select, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchTransactions } from "../utils/dataAccess";
import { sortTransactions } from "../utils/sortTransactions";
import { Transaction } from "./Transaction";

export const TransactionTable = () => {
  const [transactions, setTransactions] = useState();
  const [headers,] = useState(["Date", "Description", "Amount", "Note"]);
  const [sortType, setSortType] = useState('amountAsc');
  const [err, setErr] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const transactions = await fetchTransactions();
        setTransactions(transactions);
      } catch (e) {
        console.log(e);
      }
    };

    fetch();
  }, []);

  useEffect(() => {
    if (transactions) {
      const sorted = sortTransactions(sortType, transactions);
      setTransactions(sorted);
    }
  }, [sortType]);

  return !transactions ? (
    <Box>Loading... Sorry, proxy is slow!</Box>
  ) : (
    <Flex flexDirection="column">
      <Select
        alignSelf="flex-end"
        mb={10}
        w="10rem"
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value="dateAsc">Date (Asc)</option>
        <option value="dateDesc">Date (Desc)</option>
        <option value="amountAsc">Amount (Asc)</option>
        <option value="amountDesc">Amount (Desc)</option>
      </Select>
      <SimpleGrid columns={4} spacing={0}>
        {headers.map((header, i) => (
          <Box fontFamily="Menlo" fontWeight="bold" key={i}>
            {header}
          </Box>
        ))}
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
