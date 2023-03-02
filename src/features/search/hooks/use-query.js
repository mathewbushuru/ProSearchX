import { useDispatch, useSelector } from "react-redux";

import { submitQueryAction } from "../stores/querySlice";

export const useQuery = () => {
  const dispatch = useDispatch();

  const queryString = useSelector((state) => state.query.queryString);
  const searchString = useSelector((state) => state.query.searchString);

  const submitQuery = () => {
    dispatch(submitQueryAction());
    console.log(`query string: ${queryString}`);
    // window.location.href = `https://www.google.com/search?q=${queryString}`;
    window.open(`https://www.google.com/search?q=${queryString}`, "_blank");
  };

  return [submitQuery];
};
