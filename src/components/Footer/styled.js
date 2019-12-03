import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .footer-icons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .title {
      height: 15px;
      width: 203px;
      color: #FFFFFF;
      font-family: Rubik;
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
