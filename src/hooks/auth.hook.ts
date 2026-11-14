import { getMe, userLogin, userLogout } from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";

const useLogin = () => {
  return useMutation({
    mutationFn: userLogin,
  });
};

const useLogout = () => {
  return useMutation({
    mutationFn: userLogout,
  });
};

const useGetMe = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getMe,
  });
};

export { useGetMe, useLogin, useLogout };
