import { setUserLogout } from "@/redux/slice/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const useErrorLogout = () => {
  const dispatch = useDispatch();
  const handleErrorLogout = (error, otherTitle = "Error Occured") => {
    if (error.response.status === 401) {
      dispatch(setUserLogout());
      toast.warning(
        <span className="text-red-600 font-semibold">Session Expired</span>,
        {
          duration: 4000, // 4 seconds
          position: "top-center",
          description: "Please Login Again to Continue",
        }
      );
    } else {
      toast.error(
        <span className="text-red-600 font-semibold">{otherTitle}</span>,
        {
          description: error.response.data.message,
          duration: 4000, // 4 seconds
          position: "top-center",
        }
      );
    }
  };

  return { handleErrorLogout };
};

export default useErrorLogout;
