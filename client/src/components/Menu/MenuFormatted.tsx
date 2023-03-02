// import React from "react";
// import { Menu, MenuItem } from "@mui/joy";
// import ListItemDecorator from "@mui/joy/ListItemDecorator";
// import { Check } from "@mui/icons-material";
// import { weightTypes } from "../../shared/constants/common";
// import { IMenuFormatProps } from "../../shared/types";

// const MenuFormatted: React.FC<IMenuFormatProps> = ({
//   anchorEl,
//   fontWeight,
//   setAnchorEl,
//   setFontWeight,
// }) => {
//   return (
//     <Menu
//       anchorEl={anchorEl}
//       open={Boolean(anchorEl)}
//       onClose={() => setAnchorEl(null)}
//       size="sm"
//       placement="bottom-start"
//       sx={{ "--List-decorator-size": "24px" }}
//     >
//       {weightTypes.map((weight) => (
//         <MenuItem
//           key={weight}
//           selected={fontWeight === weight}
//           onClick={() => {
//             setAnchorEl(null);
//             setFontWeight(weight);
//           }}
//           sx={{ fontWeight: weight }}
//         >
//           <ListItemDecorator>
//             {fontWeight === weight && <Check fontSize="small" />}
//           </ListItemDecorator>
//           {weight === "200" ? "lighter" : weight}
//         </MenuItem>
//       ))}
//     </Menu>
//   );
// };

// export default MenuFormatted;
import { Box } from "@mui/material";
const MenuFormatted = () => {
  return <Box></Box>;
};
