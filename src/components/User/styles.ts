import styled from 'styled-components';

export const Container = styled.div`
  $white: #fff;
  $google-blue: #4285f4;
  height: 100vh;
  $button-active-blue: #1669f2;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  overflow-x: hidden;
  .google-btn {
    width: 184px;
    height: 42px;
    background-color: $google-blue;
    border-radius: 2px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;
    .google-icon-wrapper {
      position: absolute;
      margin-top: 1px;
      margin-left: 1px;
      width: 40px;
      height: 40px;
      border-radius: 2px;
      background-color: $white;
    }
    .google-icon {
      position: absolute;
      margin-top: 11px;
      margin-left: 11px;
      width: 18px;
      height: 18px;
    }
    .btn-text {
      float: right;
      margin: 11px 11px 0 0;
      color: $white;
      font-size: 14px;
      letter-spacing: 0.2px;
      font-family: 'Roboto';
    }
    &:hover {
      box-shadow: 0 0 6px $google-blue;
    }
    &:active {
      background: $button-active-blue;
    }
  }

 
    > div.left {
      padding: 4rem;
      height: 80%;
      
      > form {
        padding: 2rem;
        display: flex;
        width: 400px;
        flex-direction: column;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 0px 0px 15px -6px black;
        height: 80%;
        justify-content: center;
        align-items: center;
        > h1{
          margin-bottom: 2rem;
          color: ${({ theme }) => theme.text2};;
        }
        > label {
          display: inline-block;
          font-weight: 600;
          margin-bottom: 0.4em;
        }
        > input {
          border: 1px solid gray;
          outline: none;
          margin-bottom: 1rem;
          padding: 0.3rem;
          border-radius: 5px;
        }
        > button {
          border-radius: 5px;
          background-color: #222;

          width: 100%;
          border-radius: 5px;
          user-select: none;
          cursor: pointer;
          > p {
            width: 100%;
            /* display: block; */
            height: 100%;
            padding: 0.5em 0;
            color: #e5e3e3;
          }
        }
        > div.info {
          display: flex;
          justify-content: flex-end;
          margin-top: 0.5rem;
          /* >span {
          color: border-left: unset;text-decoration:underline;
          cursor: pointer;
        } */
        }
      }
    }
    @media (max-width: 550px) {
      div.left {
      padding: 0;
    }
    }
  @import url(https://fonts.googleapis.com/css?family=Roboto:500);
  
`;
