import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 45px;

  .title {
    height: 32px;
    width: 211px;
    color: #215F68;
    font-family: Rubik;
    font-size: 24px;
    font-weight: bold;
    line-height: 32px;
    text-align: center;
  }

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img {
      margin-right: 57px;
    }
  }
`;
