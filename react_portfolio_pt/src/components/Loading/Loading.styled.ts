import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  z-index: 99999;
`;

const BarWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
  height: 64px;
  margin-bottom: 28px;
  @media (max-width: 600px) {
    height: 40px;
    gap: 5px;
    margin-bottom: 18px;
  }
`;

const Bar = styled.div`
  width: 12px;
  height: 70%;
  min-height: 38px;
  max-height: 64px;
  border-radius: 10px;
  background: linear-gradient(120deg, #FFD600 65%, #FFC107 100%, #fffde7 100%);
  box-shadow: 0 0 8px 2px #2B2A2A22;
  @media (max-width: 600px) {
    width: 7px;
    min-height: 22px;
    max-height: 40px;
  }
`;

const Text = styled.div`
  background: linear-gradient(120deg, #FFD600 65%, #FFC107 100%, #fffde7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-size: 1.15rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 0.98rem;
  }
`;

export { Wrapper, BarWrapper, Bar, Text };
