import { useDispatch, useSelector } from "react-redux";

import { submitQueryAction } from "../stores/querySlice";

export const useQuery = () => {
  const dispatch = useDispatch();

  const queryString = useSelector((state) => state.query.queryString);
  const searchString = useSelector((state) => state.query.searchString);

  const submitQuery = () => {
    dispatch(submitQueryAction());
    console.log(`query string: ${queryString}`);

    const searchString = `https://www.google.com/search?q=${queryString}`;

    if (queryString) {
      window.location.href = searchString;
    //   window.open(searchString, "_blank");
    }
  };

  return [submitQuery];
};
