import { userLogin } from "@/api";
import { useMutation } from "@tanstack/react-query";

const useLogin = () => {
  return useMutation({
    mutationFn: userLogin,
  });
};

export default useLogin;
