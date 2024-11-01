import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #333;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
    display: inline-block;

    &:hover {
      background-color: #0056b3;
    }
  }

  .form-group {
    margin-bottom: 15px;
  }

  .form-label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
  }

  .form-input, .form-textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    width: 100%;
  }

  .form-textarea {
    resize: vertical;
  }

  .message {
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 4px;
  }

  .error-message {
    color: #ff4d4d;
    background-color: #ffe6e6;
  }

  .success-message {
    color: #4caf50;
    background-color: #e6ffe6;
  }
`;

export default GlobalStyles;
