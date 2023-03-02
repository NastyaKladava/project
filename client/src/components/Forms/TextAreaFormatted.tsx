// import React, { useState } from "react";
// import { Textarea, FormControl, FormLabel, IconButton } from "@mui/joy";
// import {
//   FormatBold,
//   FormatItalic,
//   KeyboardArrowDown,
// } from "@mui/icons-material";
// import MenuFormatted from "../Menu/MenuFormatted";
// import { Box, FormHelperText, styled } from "@mui/material";
// import { Controller, useForm } from "react-hook-form";
// import { ITextAreaFormattedProps } from "../../shared/types";

import { Box } from "@mui/material";

// const StyledBox = styled(Box)(({ theme }) => ({
//   display: "flex",
//   gap: "var(--Textarea-paddingBlock)",
//   pt: "var(--Textarea-paddingBlock)",
//   borderTop: "1px solid",
//   borderColor: "divider",
//   flex: "auto",
// }));

// const TextAreaFormatted: React.FC<ITextAreaFormattedProps> = ({ control }) => {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLAnchorElement>(null);
//   const [fontWeight, setFontWeight] = useState<string>("normal");
//   const [isItalic, setIsItalic] = useState<boolean>(false);

//   return (
//     <Controller
//       name="collectionDescr"
//       control={control}
//       defaultValue=""
//       render={({ field, fieldState: { error } }) => (
//         <FormControl>
//           <FormLabel>Add description</FormLabel>
//           <Textarea
//             {...field}
//             id="collectionDescr"
//             placeholder="Type description here..."
//             minRows={3}
//             error={error ? true : false}
//             endDecorator={
//               <StyledBox>
//                 <IconButton
//                   variant="plain"
//                   color="neutral"
//                   onClick={(event) => setAnchorEl(event.currentTarget)}
//                 >
//                   <FormatBold />
//                   <KeyboardArrowDown fontSize="medium" />
//                 </IconButton>
//                 <MenuFormatted
//                   anchorEl={anchorEl}
//                   fontWeight={fontWeight}
//                   setAnchorEl={setAnchorEl}
//                   setFontWeight={setFontWeight}
//                 />
//                 <IconButton
//                   variant={isItalic ? "soft" : "plain"}
//                   color={isItalic ? "primary" : "neutral"}
//                   aria-pressed={isItalic}
//                   onClick={() => setIsItalic((bool) => !bool)}
//                 >
//                   <FormatItalic />
//                 </IconButton>
//               </StyledBox>
//             }
//             sx={{
//               minWidth: 300,
//               fontWeight,
//               fontStyle: isItalic ? "italic" : "initial",
//             }}
//           />
//         </FormControl>
//       )}
//       rules={{ required: true }}
//     />
//   );
// };

// export default TextAreaFormatted;

const TextAreaFormatted = () => {
  return <Box></Box>;
};
