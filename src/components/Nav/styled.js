import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .logo {
    height: 35px;
    width: 188.19px;
  }

  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    span {
      color: #FFFFFF;
      font-family: Helvetica, Arial;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      cursor: pointer;
      margin-left: 49px;
    }
  }
`;
