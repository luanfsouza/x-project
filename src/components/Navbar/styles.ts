import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: auto;
  /* color: red; */
  > nav {
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 1rem 0;
    > div.logo {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      h1 {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.primary};
        /* background: linear-gradient(
          to right,
          ${({ theme }) => theme.primary},
          ${({ theme }) => theme.secondary}
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; */
        > span {
          background-color: black;
          border-radius: 50%;
          color: white;
          padding: 0rem 0.5rem;
          font-size: 1.7rem;
        }
      }
    }
    > ul {
      display: flex;
      width: 100%;
      justify-content: space-between;
     
      > li.login {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
        > strong {
          > a {
            color: ${({ theme }) => theme.text2};
          }
        }
      }
      > li {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.text2};
        margin-right: 1rem;
        > svg {
          margin-right: 1rem;
          font-size: 1.8rem;
        }
      }
    }
  }
  @media (max-width: 950px) {
    > nav {
      display: flex;
      /* width: 100vw; */
      width: 100%;
      flex-direction: column;
      padding: 1rem;
      > div.logo {
        width: 100%;

        display: flex;
        justify-content: space-between;
        > h1 {
          font-size: 1.6rem;
          > span {
            font-size: 2rem;
          }
        }
      }
      > ul {
        width: 100%;

        > li {
          font-size: 1rem;
        }
        > li.login {
          font-size: 1rem;
          > strong {
            > a {
              color: ${({ theme }) => theme.text2};
            }
          }
        }
      }
    }
  }
`;
