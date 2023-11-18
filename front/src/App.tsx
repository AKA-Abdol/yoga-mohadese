import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import BodyLayoutFa from "./components/layout/BodyLayoutFa";
import BodyLayoutEn from "./components/layout/BodyLayoutEn";
import Admin from "./pages/Admin";
import PageNotFound from "./pages/PageNotFound";
import AddTerm from "./pages/Admin/Terms/add";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import User from "./pages/User";
import AdminContextProvider from "./pages/Admin/ContextProvider";
import TermVideos from "./pages/Admin/Terms/[id]/videos";
import TermEdit from "./pages/Admin/Terms/[id]/edit";
import TicketForm from "./pages/TicketForm";
import { useTranslation } from "react-i18next";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BodyLayoutFa />} >
            <Route path="auth" element={<Auth />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="terms" element={<Terms />} />
            <Route path="ticket" element={<TicketForm />} />
            <Route path="user" element={<User />} />
            <Route path="admin/" element={<AdminContextProvider />}>
              <Route path="" element={<Navigate to={"/admin/users"} />} />
              <Route path="users/">
                <Route path="" element={<Admin />} />
              </Route>
              <Route path="terms/">
                <Route path="" element={<Admin />} />
                <Route path=":id/videos" element={<TermVideos />} />
                <Route path=":id/edit" element={<TermEdit />} />
                <Route path="add" element={<AddTerm />} />
              </Route>
              <Route path="tickets/">
                <Route path="" element={<Admin />} />
              </Route>
            </Route>
            <Route path="" element={<Navigate to={"/home"} />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>

          <Route path="/en" element={<BodyLayoutEn />}>
            <Route path="auth" element={<Auth />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="terms" element={<Terms />} />
            <Route path="ticket" element={<TicketForm />} />
            <Route path="user" element={<User />} />
            <Route path="admin/" element={<AdminContextProvider />}>
              <Route path="" element={<Navigate to={"/admin/users"} />} />
              <Route path="users/">
                <Route path="" element={<Admin />} />
              </Route>
              <Route path="terms/">
                <Route path="" element={<Admin />} />
                <Route path=":id/videos" element={<TermVideos />} />
                <Route path=":id/edit" element={<TermEdit />} />
                <Route path="add" element={<AddTerm />} />
              </Route>
              <Route path="tickets/">
                <Route path="" element={<Admin />} />
              </Route>
            </Route>
            <Route path="" element={<Navigate to={"/home"} />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
