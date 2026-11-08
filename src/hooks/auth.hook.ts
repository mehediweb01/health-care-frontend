import { userLogin } from "@/api";
import { useMutation } from "@tanstack/react-query";

const useLogin = async () => {
  return useMutation({
    mutationFn: userLogin,
  });
};

export default useLogin;
