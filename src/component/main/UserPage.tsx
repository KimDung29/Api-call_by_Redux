import { useEffect } from "react";
import {
  AppDispatch,
  fetchUsersAsync,
  useAppDispatch,
  useAppSelector,
} from "../../redux/store";
import { RootState } from "../../redux/reducer";
import TableUsers from "../tableUser/TableUser";

const UserPage = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <TableUsers />
    </>
  );
};
export default UserPage;
