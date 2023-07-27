import { FC, createContext } from "react";
import { ITerm } from "./Terms/add/types";
import { useQuery } from "@tanstack/react-query";
import api from "src/services";
import { Outlet } from "react-router-dom";
import { IApiTerm } from "./Terms/[id]/types";

interface IAdminContext {
  terms: {
    count: number;
    values: Array<IApiTerm>;
  };
}

const initialValues: IAdminContext = {
  terms: {
    count: 0,
    values: [],
  },
};

const TERM_URL = "courses";

export const AdminContext = createContext<IAdminContext>(initialValues);

const AdminContextProvider: FC = () => {
  const termData = useQuery({
    queryKey: ["admin-context", "term", "term-list"],
    queryFn: api.get<IAdminContext>(TERM_URL),
  });

  return (
    <AdminContext.Provider value={termData.data ?? initialValues}>
      <Outlet />
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
