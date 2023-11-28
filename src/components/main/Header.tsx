import styled from "styled-components";
import {Categories, categoryState, isDark} from "../../atom/atoms";
import {useRecoilState, useSetRecoilState} from "recoil";

const HeaderCont = styled.header`
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
  h1 {
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 50px;
  }
`;
const BtnCont = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
`;
const TrasformCate = styled.button`
  border-radius: 20px;
  padding: 10px 30px;
  color: ${(props) => props.theme.txtColor};
  background-color: ${(props) => props.theme.btnColor};
`;
const DarkModeBtn = styled.button`
  position: absolute;
  right: 10px;
  color: ${(props) => props.theme.txtColor};
  background-color: ${(props) => props.theme.btnColor};
  padding: 10px 20px;
  border-radius: 20px;
  &:hover {
    transition: 0.2s ease-in-out;
    color: ${(props) => props.theme.accentColor};
  }
`;

const Header = () => {
  const [darkMode, setDarkMode] = useRecoilState(isDark);
  const setCateState = useSetRecoilState(categoryState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {name} = event.currentTarget;
    setCateState(name as any);
  };
  const activeDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <HeaderCont>
      <h1>DO DOING DONE</h1>
      <BtnCont>
        <TrasformCate name={Categories.TODO} onClick={onClick}>
          TO DO
        </TrasformCate>
        <TrasformCate name={Categories.DOING} onClick={onClick}>
          DOING
        </TrasformCate>
        <TrasformCate name={Categories.DONE} onClick={onClick}>
          DONE
        </TrasformCate>
        <TrasformCate name={Categories.CUSTOM} onClick={onClick}>
          CUSTOM
        </TrasformCate>
      </BtnCont>
      <DarkModeBtn onClick={activeDarkMode}>
        {darkMode ? "NIGHT" : "DAY"}
      </DarkModeBtn>
    </HeaderCont>
  );
};
export default Header;
