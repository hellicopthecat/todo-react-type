import styled from "styled-components";
import {Categories, categoryState} from "../../atom/atoms";
import {useSetRecoilState} from "recoil";

const HeaderCont = styled.header``;
const TrasformCate = styled.button``;

const Header = () => {
  const setCateState = useSetRecoilState(categoryState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {name} = event.currentTarget;
    setCateState(name as any);
  };
  return (
    <HeaderCont>
      <h1>Welcome</h1>
      <TrasformCate name={Categories.TODO} onClick={onClick}>
        TO DO
      </TrasformCate>
      <TrasformCate name={Categories.DOING} onClick={onClick}>
        DOING
      </TrasformCate>
      <TrasformCate name={Categories.DONE} onClick={onClick}>
        DONE
      </TrasformCate>
    </HeaderCont>
  );
};
export default Header;
