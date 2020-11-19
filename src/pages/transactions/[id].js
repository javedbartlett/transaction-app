import { Button, Image, Textarea, Box, Heading } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Amount from "../../components/Amount";
import { findTransaction } from "../../utils/dataAccess";

const Transactions = () => {
  const router = useRouter();
  const { id } = router.query;
  const [transaction, setTransaction] = useState();
  const [note, setNote] = useState("");

  useEffect(() => {
    // Get transaction for id
    const fetchData = async () => {
      setTransaction(await findTransaction(id));
      setNote(localStorage.getItem("tNote_" + id));
    };
    fetchData();
  }, [id]);

  const showNotes = !transaction?.isCredit;

  let handleInputChange = (e) => {
    setNote(e.target.value);
  };

  let saveStorage = () => {
    localStorage.setItem("tNote_" + id, note);
  };

  return !transaction ? (
    <div>Loading... Sorry, proxy is slow today!</div>
  ) : (
    <Box m={5}>
      <Heading mb={5}>Details</Heading>
      <Box fontFamily="Menlo">
        Date: {dayjs(transaction.date).format("MMM DD, YYYY")}
      </Box>
      <Box fontFamily="Menlo">Description: {transaction.description}</Box>
      <div>
        Amount: <Amount transaction={transaction} />
      </div>
      {transaction.imageUrl && <Image src={transaction.imageUrl}></Image>}
      {showNotes && (
        <>
          <div>Notes: </div>
          <Textarea
            display="block"
            value={note || ""}
            w="20rem"
            placeholder={"Enter Notes here"}
            onChange={handleInputChange}
          />
          <Button
            onClick={() => saveStorage()}
            variant="outline"
            colorScheme="blue"
            m={1}
          >
            Save
          </Button>
        </>
      )}
      <Button
        variant="outline"
        colorScheme="blue"
        onClick={() => router.push("/")}
        m={1}
      >
        Back
      </Button>
    </Box>
  );
};

export default Transactions;
