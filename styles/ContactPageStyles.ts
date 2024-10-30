import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const FormWrapper = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  background-color: #1976d2; /* Primary color */
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #115293;
  }
`;
