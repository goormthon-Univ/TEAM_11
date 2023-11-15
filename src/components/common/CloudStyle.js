import styled from "styled-components";

export const Title = styled.p`
  color: #000;
  font-family: Anek Devanagari;
  font-size: 25px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  text-align: left;
  margin: 29px 0 0 27px;
`;

export const Info = styled.div`
  color: #4a4a4a;
  font-family: Anek Devanagari;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  text-align: left;
  margin: 10px 27px;
`;

export const Cloud = styled.img`
  width: 350px;
  margin: 0;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;
export const InputTitle = styled.input`
  width: 239px;
  height: 59px;
  border: none;
  resize: none;
  color: #000;
  font-family: Anek Devanagari;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #000;
  }
`;
export const InputContent = styled.textarea`
  width: 239px;
  height: 304px;
  border: none;
  resize: none;
  color: #000;
  font-family: Anek Devanagari;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #000;
  }
`;
export const InputName = styled.input`
  width: 239px;
  height: 36px;
  border: none;
  resize: none;
  color: #000;
  font-family: Anek Devanagari;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #000;
  }
`;
export const SubmitWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 17px;
`;
export const Cancel = styled.div`
  width: 155px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #fff;
  margin: 24px 0;
`;
export const Submit = styled.div`
  width: 155px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #fff;
  margin: 24px 0;
`;
