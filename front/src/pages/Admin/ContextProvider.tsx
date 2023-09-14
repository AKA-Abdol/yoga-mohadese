import { FC, createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "src/services";
import { Outlet } from "react-router-dom";
import { TERM_URL } from "./api.data";
import { ApiTermSchema, IAdminContext } from "./types";
import { apiTerm2local } from "./api.converter";

export const AdminContext = createContext<IAdminContext>({ terms: undefined });

const AdminContextProvider: FC = () => {
  const termData = useQuery({
    queryKey: ["admin-context", "term", "term-list"],
    queryFn: api.get<ApiTermSchema>(TERM_URL),
  });

  return (
    <AdminContext.Provider
      value={{
        terms: termData.data
          ? termData.data.values.map(apiTerm2local)
          : undefined,
      }}
    >
      <Outlet />
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
