import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "./userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const UserView = () => {
  const dispatch = useAppDispatch();
  const { loading, users, error } = useAppSelector((state) => state.user);

  useEffect(() => {
    console.log("UserView mounted");
    dispatch(fetchUsers());
    return () => {
      console.log("UserView unmounted");
    };
  }, []);
  return (
    <div className="flex flex-col items-center w-1/3">
      <h2 className="text-xl mb-2">List of Users</h2>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && users?.length > 0 && (
        <ul className="list-disc pl-5">
          {users.map((user) => (
            <li key={user.id} className="flex flex-col">
              <p>{user.name}</p>
              {/* <p>{user.email}</p> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserView;
