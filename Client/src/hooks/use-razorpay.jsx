import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useRazorpay = () => {
  const navigate = useNavigate();
  const generatePayment = async (amount) => {
    try {
      const res = await axios.post(
        import.meta.env.VITE_API_URL + "/generate-payment",
        { amount },

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

  const verifyPayment = async (options, productArray, address) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      return toast.error(
        <span className="text-red-600 font-semibold">
          Failed To Load Razorpay
        </span>,
        {
          description: "Please try again later.",
          duration: 4000, // 4 seconds
          position: "top-center",
        }
      );
    }

    const paymentObject = new window.Razorpay({
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      ...options,
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg",
      handler: async (response) => {
        try {
          const res = await axios.post(
            import.meta.env.VITE_API_URL + "/verify-payment",
            {
              razorpay_order_id: options.id,
              razorpay_payment_id: response.razorpay_payment_id,
              amount: options.amount,
              address,
              productArray,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );

          const { data } = await res.data;
          toast.success(
            <span className="text-green-600 font-semibold">
              {data.message}
            </span>,
            {
              duration: 4000, // 4 seconds
              position: "top-center",
            }
          );
          navigate("/success");
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
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    });
    paymentObject.open();
  };
  return { generatePayment,  verifyPayment };
};

export default useRazorpay;
