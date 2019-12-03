import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: tretch;
  justify-content: space-evenly;

  &.image {
    height: 935px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.photo});
    position: relative;
  }

  .header-nav {
    position: absolute;
    left: 116px;
    top: 28px;
  }

  .header-content {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
    position: absolute;
    left: 116px;
    top: 305px;

    .paragraph {
      height: 148px;
      width: 699px;
      color: #FFFFFF;
      font-family: Helvetica, Arial;
      font-size: 62px;
      font-weight: bold;
      line-height: 72px;
      margin-bottom: 25px;
    }

    .task {
      height: 24px;
      width: 83px;
      color: #FFFFFF;
      font-family: Helvetica, Arial;
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 25px;
    }

    .logo {
      display: flex;
      flex-direction: row;
      align-items: left;
      justify-content: flex-start;
      margin-bottom: 25px;

      span {
        height: 24px;
        width: 34px;
        color: #FFFFFF;
        font-family: Helvetica, Arial;
        font-size: 20px;
        font-weight: 300;
        line-height: 24px;
      }

      img {
        margin-left: 2px;
      }
    }

    .buttons {
      display: flex;
      flex-direction: row;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        height: 48px;
        width: 216px;
        border: 2px solid #FFFFFF;
        border-radius: 2px;
        box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);

        span {
          height: 17px;
          color: #FFFFFF;
          font-family: Helvetica, Arial;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1.87px;
          line-height: 17px;
          text-align: center;
          text-transform: uppercase;
        }

        &:last-child {
          margin-left: 25px;
        }
      }
    }
  }
`;
