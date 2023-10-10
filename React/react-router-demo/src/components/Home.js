import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="p-4">
        <div className="text-2xl font-semibold text-center">Home Page</div>
        <button
          onClick={() => navigate("order-summary", { replace: true })}
          className="bg-red-600 text-white py-4 text-xl px-3 my-4 mx-auto block w-[200px] hover:bg-red-700 font-semibold rounded-lg"
        >
          Place Order
        </button>
      </div>
    </>
  );
};
