import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 370px;
  height: 410px;
  margin-right: 29px;

  .image {
    img {
      width: 370px;
    }
  }

  .date {
    color: #8C8C8C;
    font-family: Helvetica, Arial;
    font-size: 14px;
    line-height: 20px;
  }

  .text {
    color: #1D1E21;
    font-family: Helvetica, Arial;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
  }
`;
