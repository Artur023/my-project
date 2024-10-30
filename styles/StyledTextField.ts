import styled from "styled-components";
import { TextField } from "@mui/material";

const StyledTextField = styled(TextField)`
  & .MuiInputBase-root {
    transition: all 0.3s ease;
    border-radius: 4px;
  }

  &:hover .MuiInputBase-root {
    box-shadow: 0 0 10px 2px rgba(33, 150, 243, 0.5);
  }
`;

export default StyledTextField;
