"use client";

import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

export const ReactQueryProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
};
