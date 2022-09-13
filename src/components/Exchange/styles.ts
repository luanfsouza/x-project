import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 3rem auto;
  input.disable{
    user-select: none;
    pointer-events: none;
  }
  > section.exchangeInfo {
    /* width: 100% !important; */
    > span {
      color: #b5b9ebff;
      letter-spacing: 0.2rem;
    }
    > div {
      margin: 1rem 0;
      /* width: fit-content; */

      > h1 {
        font-weight: 900;
        font-size: 2rem;
        color: ${({ theme }) => theme.text1};
        > span.first {
          color: ${({ theme }) => theme.secondary};
          color: transparent;
          -webkit-text-stroke: 0.1vw ${({ theme }) => theme.secondary};
          position: relative;
          &::before {
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            color: ${({ theme }) => theme.secondary};
            overflow: hidden;
            position: absolute;
            content: attr(data-text);
            border-right: 2px solid ${({ theme }) => theme.secondary};
            -webkit-text-stroke: 0vw ${({ theme }) => theme.secondary};
            animation: animate 6s linear infinite;
          }
        }
        > span.second {
          /* color: #ff8040;
          outline: 4px solid black;
          outline-style: dotted;
          outline-color: #ff8040;
          background-color: #ffe6d9; */
          color: transparent;
          -webkit-text-stroke: 0.1vw ${({ theme }) => theme.primary};
          position: relative;
          &::before {
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            color: ${({ theme }) => theme.primary};
            overflow: hidden;
            position: absolute;
            content: attr(data-text);
            border-right: 2px solid ${({ theme }) => theme.primary};
            -webkit-text-stroke: 0vw ${({ theme }) => theme.primary};
            animation: animate 6s linear infinite;
          }
          @keyframes animate {
            0%,
            10%,
            100% {
              width: 0;
            }

            70%,
            90% {
              width: 100%;
            }
          }
        }
      }
    }
    > p {
      color: ${({ theme }) => theme.text3};
    }
  }
  > section.exchangeMenu {
    background-color: ${({ theme }) => theme.exchangeMenu};

    /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
    backdrop-filter: blur(8.4px);
    -webkit-backdrop-filter: blur(8.4px);
    border: 1px solid rgba(255, 255, 255, 1);
    border-image: linear-gradient(
        to right,
        ${({ theme }) => theme.exchangeMenuBorder1},
        ${({ theme }) => theme.exchangeMenuBorder2}
      )
      1;
    padding: 2rem;
    label {
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      font-weight: 600;
      color: #6c6c6c;
      font-size: 0.7rem;
    }
    select {
      background-color: ${({ theme }) => theme.exchangeMenuInput};
      padding: 0.6rem;
      border-radius: 10px;
      border: none;
      outline: none;
      color: ${({ theme }) => theme.text1};
      font-weight: 700;
      > option {
        border: none;
        outline: none;
      }
    }
    > div.country {
      width: 100%;
      > select {
        width: 100%;
        > option {
        }
      }
    }
    > div.amount {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      input {
        background-color: ${({ theme }) => theme.exchangeMenuInput};
        border: none;
        outline: none;
        padding: 0.6rem;
        color: ${({ theme }) => theme.text1};
        font-weight: 700;
        border-radius: 10px;
      }
      > div {
        display: flex;
        justify-content: space-between;
        > div {
          display: flex;
          flex-direction: column;
          width: 45%;
          margin: 0.6rem 0;
        }
      }
    }
    button {
      margin-top: 1rem;
      border: none;
      background-color: #4e4ef2;
      background-image: linear-gradient(
        90deg,
        ${({ theme }) => theme.exchangeMenuButton1} 1%,
        ${({ theme }) => theme.exchangeMenuButton2} 100%
      );
      border-radius: 5px;
      color: white;
      outline: none;
      padding: 1rem;
    }
  }
  > section.exchangeRanking {
    padding-top: 1rem;
    width: 100%;
    grid-column-start: 1;
    grid-column-end: 3;
    background-color: ${({ theme }) => theme.exchangeRanking};
    border-radius: 16px;
    backdrop-filter: blur(9.2px);
    -webkit-backdrop-filter: blur(9.2px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem auto;
    padding: 1rem;
    border-radius: 10px;
    color: ${({ theme }) => theme.text3};

    > ul.title {
      display: flex;
      justify-content: space-between;
      width: 100%;
      > div {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        > li {
          margin: 1rem 0rem;
          height: 100%;
          display: flex;
          align-items: center;
        }
        > li.name {
          width: 10rem;
          display: flex;
          align-items: center;
          > h4 {
            color: ${({ theme }) => theme.text1};
          }
          > img {
            height: 40px;
            width: 40px;
            margin-right: 0.5rem;
            border-radius: 50%;
          }
        }
        > li.star {
          width: 3rem;
          display: flex;
          justify-content: space-around;
          font-weight: 600;
          color: ${({ theme }) => theme.text1};
          > svg {
            color: orange;
          }
        }
        > li.card {
          width: 6rem;
          display: flex;
          justify-content: space-between;
          > svg {
            font-size: 1.5rem;
          }
          > svg.creditcard1 {
            color: ${({ theme }) => theme.card1};
          }
          > svg.creditcard2 {
            color: ${({ theme }) => theme.card2};
          }
          > svg.creditcard3 {
            color: ${({ theme }) => theme.card3};
          }
        }
        > li.price {
          width: 6rem;
          display: flex;
          font-weight: 600;
          align-items: center;
          > h4 {
            color: ${({ theme }) => theme.text1};
          }
        }
        > li.link {
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: #f3f4ff;
          cursor: pointer;
        }
      }
    }
  }
  @media (max-width: 950px) {
    width: 100%;
    grid-template-columns: 100%;
    > section.exchangeInfo {
      padding-left: 0.7rem;
      width: 100%;
      /* margin-left: 1rem; */
      > div {
        margin: 1rem 0;
        > h1 {
          font-size: 1.5rem;
        }
      }
    }
    > section.exchangeMenu {
      width: 90%;
      margin: auto;
      margin-top: 2rem;
    }
    > section.exchangeRanking {
      width: 100%;
      grid-column-start: 1;
      grid-column-end: 1;
      padding: 0 0.5rem;
      display: flex;
      justify-content: space-between;
      > ul.title {
        > div.cardDiv {
          display: none;
        }
        > div.nameDiv {
          width: 9rem;
          font-size: 0.9rem;
        }
        > div.priceDiv {
          width: 6rem;
        }
        > div.linkDiv {
          display: none;
        }
      }
    }
  }
`;
