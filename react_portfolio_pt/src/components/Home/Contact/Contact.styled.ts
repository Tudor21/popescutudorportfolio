import { styled } from "styled-components";

export const Wrapper = styled.section`
  max-height: 100vh;
  height: 100vh;
  width: 100%;
  padding: 4.5rem 1.2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.2rem 0.1rem 0.7rem;
    max-height: 80vh;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 570px;
  background: rgba(25, 25, 25, 0.96);
  border-radius: 22px;
  box-shadow: 0 8px 44px 0 #ffd60021, 0 2px 22px #ffc10733;
  padding: 2.3rem 1.2rem 1.4rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  backdrop-filter: blur(3px);

  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 700px) {
    max-width: 97vw;
    padding: 1.1rem 0.2rem 0.7rem 0.2rem;
    border-radius: 10px;
    max-height: 96svh;
  }

  @media (max-width: 380px) {
    max-width: 97vw;
    padding: 1.1rem 0.2rem 0.7rem 0.2rem;
    border-radius: 10px;
    max-height: 50svh;
  }
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 1.1rem;
  text-align: center;
  letter-spacing: 1.2px;
  background: linear-gradient(90deg, #ffd600 10%, #ffc107 62%, #fffbe7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 700px) {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #ffe082;
  opacity: 0.92;
  margin-bottom: 1.4rem;
  text-align: center;
  background: linear-gradient(90deg, #fffde7, #ffd600 54%, #ffc107 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 700px) {
    font-size: 0.92rem;
    margin-bottom: 0.7rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.1rem;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 0.7rem;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.62rem 0.9rem;
  border-radius: 8px;
  border: none;
  font-size: 0.97rem;
  background: rgba(255, 253, 231, 0.07);
  color: #fffde7;
  font-weight: 500;
  box-shadow: 0 2px 10px #ffd60012;
  border: 1px solid #ffd60033;
  transition: border-color 0.2s, box-shadow 0.22s, background 0.2s;
  outline: none;

  &::placeholder {
    color: #ffe082bb;
    font-weight: 400;
    opacity: 1;
  }

  &:focus {
    border-color: #ffd600;
    background: rgba(255, 253, 231, 0.13);
    box-shadow: 0 0 0 2px #ffd60055;
  }

  @media (max-width: 700px) {
    font-size: 0.92rem;
    padding: 0.52rem 0.6rem;
    border-radius: 6px;
  }
`;

export const Textarea = styled.textarea`
  padding: 0.62rem 0.9rem;
  border-radius: 8px;
  border: none;
  font-size: 0.97rem;
  min-height: 75px;
  background: rgba(255, 253, 231, 0.07);
  color: #fffde7;
  font-weight: 500;
  box-shadow: 0 2px 10px #ffd60012;
  border: 1px solid #ffd60033;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s, box-shadow 0.22s, background 0.2s;
  outline: none;

  &::placeholder {
    color: #ffe082bb;
    font-weight: 400;
    opacity: 1;
  }

  &:focus {
    border-color: #ffd600;
    background: rgba(255, 253, 231, 0.13);
    box-shadow: 0 0 0 2px #ffd60055;
  }

  @media (max-width: 700px) {
    font-size: 0.92rem;
    padding: 0.45rem 0.55rem;
    min-height: 58px;
    border-radius: 6px;
  }
`;

export const Button = styled.button`
  background: linear-gradient(90deg, #ffd600 55%, #ffc107 100%);
  color: #161616;
  font-weight: 700;
  font-size: 1.02rem;
  padding: 0.65rem 0;
  border-radius: 8px;
  border: none;
  box-shadow: 0 2px 12px #ffd60022;
  cursor: pointer;
  margin-top: 0.3rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: background 0.15s, box-shadow 0.18s, color 0.13s, transform 0.18s;

  &:hover,
  &:focus {
    background: linear-gradient(90deg, #fffde7 20%, #ffd600 82%, #ffc107 100%);
    color: #161616;
    box-shadow: 0 4px 18px #ffd60044;
    outline: none;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.66;
    cursor: not-allowed;
    background: linear-gradient(90deg, #ffd600 55%, #ffc107 100%);
    box-shadow: none;
  }

  @media (max-width: 700px) {
    font-size: 0.98rem;
    padding: 0.55rem 0;
    border-radius: 6px;
  }
`;

export const Info = styled.div`
  margin-top: 1.1rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 700px) {
    flex-direction: row;
    gap: 0.8rem;
    margin-top: 0.8rem;
    align-items: center;
  }
`;

export const InfoItem = styled.div`
  background: rgba(255, 253, 231, 0.09);
  border-radius: 8px;
  padding: 0.7rem 1rem;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 10px #ffd6000f;

  h4 {
    margin: 0 0 0.1rem 0;
    font-size: 0.99rem;
    font-weight: 600;
    color: #ffd600;
    letter-spacing: 0.6px;
  }
  p,
  a {
    color: #fffde7;
    margin: 0;
    font-size: 0.93rem;
    opacity: 0.88;
    text-align: center;
    text-decoration: none;
    word-break: break-all;
    transition: opacity 0.2s;
  }
  a:hover {
    opacity: 1;
    color: #ffc107;
  }
`;

export const SuccessMessage = styled.div`
  margin-top: 0.7rem;
  padding: 0.8rem 1rem;
  background: linear-gradient(90deg, #e0ffbe 10%, #b3e672 90%);
  color: #225510;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: 0 2px 10px #b3e67233;
  text-align: center;
  letter-spacing: 0.2px;
  animation: fadeIn 0.5s;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(16px);}
    to { opacity: 1; transform: translateY(0);}
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 0.7rem;
  padding: 0.8rem 1rem;
  background: linear-gradient(90deg, #ffd1d1 10%, #ffbcbc 90%);
  color: #9b2323;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: 0 2px 10px #ffbcbc33;
  text-align: center;
  letter-spacing: 0.2px;
  animation: fadeIn 0.5s;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(16px);}
    to { opacity: 1; transform: translateY(0);}
  }
`;

