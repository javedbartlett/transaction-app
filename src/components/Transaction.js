import { Box, color } from "@chakra-ui/react";
import Link from "next/link";
import * as dayjs from "dayjs";
import Amount from "./Amount";

export const Transaction = ({ transaction }) => {
  const note = localStorage.getItem("tNote_" + transaction.id);

  return (
    <>
      <Box fontFamily="Menlo">{dayjs(transaction.date).format("MMM DD, YYYY")}</Box>
      <Box
        color="blue"
        _hover={{ color: "darkblue", textDecoration: "underline" }}
        fontFamily="Menlo"
      >
        <Link href={`/transactions/${transaction.id}`}>
          {transaction.description}
        </Link>
      </Box>
      <Amount transaction={transaction} />
      <Box whiteSpace="nowrap" fontFamily="Menlo">{note}</Box>
    </>
  );
};
