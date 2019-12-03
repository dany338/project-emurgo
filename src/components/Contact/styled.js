import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 45px;

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

  .contact-us {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .form-inputs {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .text-paragraph {
        height: 28px;
        width: 487px;
        color: #1D1E21;
        font-family: Helvetica, Arial;
        font-size: 18px;
        line-height: 28px;
      }

      .text-input {
        box-sizing: border-box;
        height: 54px;
        width: 469px;
        border: 1px solid #215F68;
        border-radius: 2px;

        span {
          margin: 16px 10px 18px 23px;
          height: 20px;
          width: 38px;
          opacity: 0.5;
          color: #8C8C8C;
          font-family: Helvetica, Arial;
          font-size: 14px;
          line-height: 20px;
        }
      }

      .text-area {
        box-sizing: border-box;
        height: 170px;
        width: 469px;
        border: 1px solid #215F68;
        border-radius: 2px;

        span {
          margin: 16px 10px 18px 23px;
          height: 20px;
          width: 38px;
          opacity: 0.5;
          color: #8C8C8C;
          font-family: Helvetica, Arial;
          font-size: 14px;
          line-height: 20px;
        }
      }

      .form-button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        height: 48px;
        width: 216px;
        border: 2px solid #215F68;
        border-radius: 2px;
        box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);

        span {
          height: 17px;
          width: 108px;
          color: #215F68;
          font-family: Rubik;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1.87px;
          line-height: 17px;
          text-align: center;
          text-transform: uppercase;
        }
      }
    }

    .image-contact {
      height: 632px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(${(props) => props.photo});
      position: relative;
    }
  }
`;
