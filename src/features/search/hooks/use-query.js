import { useDispatch, useSelector } from "react-redux";

import { submitQueryAction } from "../stores/querySlice";

export const useQuery = () => {
  const dispatch = useDispatch();

  const queryString = useSelector((state) => state.query.queryString);
  const searchString = useSelector((state) => state.query.searchString);

  const submitQuery = () => {
    dispatch(submitQueryAction());
  };

  return [submitQuery];
};
