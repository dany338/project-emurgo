import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  &.image {
    height: 187px;
    width: 100%;
    background: linear-gradient(41deg, #0C4146 0%, #48A1B0 100%);
  }

  .footer-nav {
    left: 116px;
  }

  .footer-icons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .title {
      height: 15px;
      width: 203px;
      color: #FFFFFF;
      font-family: Helvetica, Arial;
      font-size: 13px;
      line-height: 15px;
    }

    .logo {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 24.93px;
      width: 24px;
    }
  }
`;
