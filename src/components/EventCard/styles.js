import styled,{ css } from 'styled-components'
export const Card = styled.div`
    width: 25rem;
    border: 1px solid gray;
    border-radius: 10px;
    box-shadow: 0 0 5px gray;
    background-color: ${({ dataJaPassou }) => dataJaPassou ? "red" : "white" };
    transition: 0,2s;

    ${
        ({ dataJaPassou }) => dataJaPassou && css`
        color: white;
        `
    }

    &:hover {
        transform: scale(1.05);
    }

    img {
        width: 100%;
        height: 50%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-radius: 8px;

        div {
    padding: 0.8rem;

    }
    .button-container {
        display: flex; /* Use flexbox for layout */
        gap: 5px; /* Adjust the gap size as needed */
      }
    
    .red-button {
        background-color: #ff6b6b; /* Red color */
        color: white;
        border: none;
        border-radius: 10px;
        padding: 8px 16px;
        cursor: pointer;
        transition: background-color 0.3s ease; /* Smooth color transition */
      }
      
    .red-button:hover {
        background-color: #ba0d0d; /* Darker red on hover */
      }
      
    .detalhes-button {
        background-color: #3498db; /* Blue color */
        color: white;
        border: none;
        border-radius: 10px;
        padding: 8px 16px;
        cursor: pointer;
        transition: background-color 0.3s ease; /* Smooth color transition */
      }
      
    .detalhes-button:hover {
        background-color: #0f5685; /* Darker blue on hover */
      }
`