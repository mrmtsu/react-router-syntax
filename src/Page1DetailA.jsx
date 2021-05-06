import { useHistory, useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();

  const history = useHistory();

  // goBackメソッドで遷移元へ戻る
  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};