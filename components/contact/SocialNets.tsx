import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

let nets = ["twitter", "facebook", "instagram"];

const SocialNets = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      my={10}
      spacing={4}
      mx="auto"
    >
      {nets.map((net) => (
        <Box position="relative" height="40px" width="40px">
          <Image
            src={`/images/contact-us/${net}.png`}
            layout="fill"
            width="32px"
            objectFit="contain"
            objectPosition="center"
            height={net === "twitter" ? "29px" : "32px"}
          />
        </Box>
      ))}
    </Stack>
  );
};

export default SocialNets;