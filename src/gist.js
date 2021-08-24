import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGists } from "./store/gists";
export function Gist() {
  const { gistsPending, gists, gistsError } = useSelector(
    (state) => state.gists
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!gists.length) {
      dispatch(getGists());
    }
  }, [dispatch, gists]);
  if (gistsPending) {
    return <h1>pending...</h1>;
  }
  if (gistsError) {
    return <h1>ERROR!!!!</h1>;
  }
  return (
    <div>
      {Array.from({ length: 10 }).map((_, index) => (
        <button key={index} onClick={() => dispatch(getGists(index + 1))}>
          button {index}
        </button>
      ))}
      <ul>
        {gists.map((gist, index) => (
          <li key={index}>{gist.description}</li>
        ))}
      </ul>
    </div>
  );
}
