import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 150px;

  img {
    height: 282px;
    width: 300px;
  }

  .content {
    display: flex;
    flex-direction: column;
    margin: ${(props) => ((props.index % 2) === 0) ? '0px 0px 0px 70px;' : '0px 100px 0px 0px;' };

    .title {
      align-items: flex-start;
      height: 36px;
      width: 114.9px;
      color: #353535;
      font-family: Helvetica, Arial;
      font-size: 30px;
      line-height: 36px;
    }

    .subtitle {
      color: #000000;
      font-family: Helvetica, Arial;
      font-size: 14px;
      line-height: 28px;
    }

    .paragraph {
      height: 168px;
      width: 400px;
      color: #9B9B9B;
      font-family: Helvetica, Arial;
      font-size: 14px;
      line-height: 28px;
    }
  }
`;
