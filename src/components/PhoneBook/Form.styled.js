import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgray;
  box-shadow: 0 0 10px blue;
  border-radius: 15px;
  padding: 20px;
  width: 375px;
  height: auto;
  margin: 0 auto;
  margin-top: 150px;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: blue;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const Label = styled.label`
  font-size: 20px;
  color: blue;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid lightblue;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const FilterInput = styled.input`
  padding: 8px;
  border: 1px solid lightblue;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  color: blue;
  margin-bottom: 10px;
`;

export const DeleteButton = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: blue;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  margin-left: 20px;
`;
