import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

export const MainMenu = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: linear-gradient(87.38deg, rgb(92, 51, 255) -4.51%, rgb(51, 153, 255) 104.58%);
  color: #fefefe;

  h1 {
    @media(max-width: 768px) {
      font-size: 1.5em;
    }
  }

  @media(max-width: 468px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  margin: 25px 0;
  padding: 0 10px;
  width: 25%;

  @media(max-width: 768px) {
    margin: 25px auto;
    width: 100%;
    max-width: 300px;
  }
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    font-size: 14px;
  }

  input {
    border: 1px solid #ededed;
    border-radius: 5px;
    padding: 5px 10px;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioItem = styled.div`
  padding-bottom: 2.5px;
  font-size: 16px;
`;

export const ListContainer = styled.div`
  width: 75%;
  margin: 25px 0;
  padding: 0 10px;

  @media(max-width: 768px) {
    width: 100%;
  }

  @media(max-width: 568px) {
    overflow-x: scroll;
  }

  table {
    width: 100%;
    text-align: center;

    tbody {
      tr {
        td {
          border-bottom: 1px solid #eee;
        }

        .empty-list {
          padding: 25px 0;
        }

        .actions {
          display: flex;

          button {
            margin: 0 2.5px;
          }
        }
      }
    }

    th, td {
      padding: 5px;
    }
  }
`;
