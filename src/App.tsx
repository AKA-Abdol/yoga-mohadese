import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Reserve from "./pages/Reserve";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import BodyLayout from "./components/layout/BodyLayout";
import Admin from "./pages/Admin";
import PageNotFound from "./pages/PageNotFound";
import TermById from "./pages/Admin/Terms/[id]";
import AddTerm from "./pages/Admin/Terms/add";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import User from "./pages/User";
import AdminContextProvider from "./pages/Admin/ContextProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BodyLayout />}>
            <Route path="auth" element={<Auth />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="terms" element={<Terms />} />
            <Route path="reserve" element={<Reserve />} />

            <Route path="user" element={<User />} />

            <Route path="admin/" element={<AdminContextProvider />}>
              <Route path="" element={<Navigate to={"/admin/users"} />} />

              <Route path="users/">
                <Route path="" element={<Admin />} />
              </Route>

              <Route path="terms/">
                <Route path="" element={<Admin />} />
                <Route path=":id" element={<TermById />} />
                <Route path="add" element={<AddTerm />} />
              </Route>
            </Route>

            <Route path="404" element={<PageNotFound />} />

            <Route path="" element={<Navigate to={"/auth"} />} />
            <Route path="*" element={<Navigate to={"/404"} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
