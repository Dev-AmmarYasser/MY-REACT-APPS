import { useParams } from "react-router";

export const UserDetails = () => {
  const { userId } = useParams();
  return (
    <div className="p-2 text-center text-2xl font-semibold ">
      Details about user {userId}
    </div>
  );
};
