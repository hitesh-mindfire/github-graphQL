import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import AppRoutes from "./Routes.js";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${"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"}`,
  },
});

const rootElement = document.getElementById("root") as HTMLElement;
createRoot(rootElement).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <AppRoutes />
    </ApolloProvider>
  </StrictMode>
);
