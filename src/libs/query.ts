import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: true,
      networkMode: "offlineFirst",
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    },
  },
});