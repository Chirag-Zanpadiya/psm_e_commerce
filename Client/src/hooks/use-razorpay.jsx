import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useRazorpay = () => {
  const generatePayment = async (amout) => {
    try {
      const res = await axios.post(
        import.meta.env.VITE_API_URL + "/generate-payment",
        { amout },

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await res.data;
      return data.data;
    } catch (error) {
      return toast.error(
        <span className="text-red-600 font-semibold">
          {error.response.data.message}
        </span>,
        {
          description: "Please try again later.",
          duration: 4000, // 4 seconds
          position: "top-center",
        }
      );
    }
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const verifyPayment = async () => {};
  return { generatePayment, loadScript };
};

export default useRazorpay;
