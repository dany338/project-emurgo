import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 45px;

  &.image {
    height: 600px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.photo});
    position: relative;

    @media only screen and (min-width: 993px)
    {
      width: 112%;
    }
  }

  h2 {
    text-align: left;
    justify-content: end;
    align-items: left;
    color: #ffffff;
  }
`;
