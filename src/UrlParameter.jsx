import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  // useParams Page2Routes.jsxでidを設定しているためidを受け取れる
  const { id } = useParams();
  // useLocation searchにあるクエリパラメータを使用できる
  const { search } = useLocation();
  // URLSearchParams クエリパラメータを便利に扱えるメソッドを提供してくれる
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメータは {id} です</p>
      {/* getメソッドでnameを取得する */}
      <p>クエリパラメータは {query.get("name")} です</p>
    </div>
  );
};
