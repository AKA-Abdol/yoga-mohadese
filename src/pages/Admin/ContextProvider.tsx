import { FC, createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "src/services";
import { Outlet } from "react-router-dom";
import { IApiTerm } from "./Terms/[id]/types";

interface IAdminTerms {
  count: number;
  values: Array<IApiTerm>;
}

interface IAdminContext {
  terms: IAdminTerms | undefined;
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
    queryFn: api.get<IAdminTerms>(TERM_URL),
  });

  // let localTerms = undefined;
  // if (termData.data)
  //   localTerms = termData.data.values.map(apiTerm => {
      
  //   })

  return (
    <AdminContext.Provider value={{ terms: termData.data }}>
      <Outlet />
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
