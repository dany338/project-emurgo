import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 54px;
    color: #215F68;
    font-family: Helvetica, Arial;
    font-size: 24px;
    font-weight: bold;
    line-height: 32px;
    text-align: center;
  }

  .content {
    display: flex;
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fill, minmax(276px, 1fr));
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
