import { toast } from "react-toastify";

toast.configure();

export const notify = (msg) => {
  // Provide toastId to prevent duplicates
  /*     {
      toastId: "custom-id-yes",
    } */

  toast.success(msg, {
    position: toast.POSITION.TOP_RIGHT,
    icon: "🎬",
  });
};
