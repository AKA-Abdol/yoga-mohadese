import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import BodyLayout from "./components/layout/BodyLayout";
import Admin from "./pages/Admin";
import PageNotFound from "./pages/PageNotFound";
import AddTerm from "./pages/Admin/Terms/add";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import User from "./pages/User";
import AdminContextProvider from "./pages/Admin/ContextProvider";
import TermVideos from "./pages/Admin/Terms/[id]/videos";
import TermEdit from "./pages/Admin/Terms/[id]/edit";
import TicketForm from "./pages/TicketForm";
import Shop from "./pages/Store/Shop";
import Cart from "./pages/Store/Cart";
import Store from "./pages/Store";
import Faq from "./pages/Faq";
import PaymentHistory from "./pages/User/PaymentHistory";
import ActiveTerms from "./pages/User/ActiveTerms";
import PaymentResult from "./pages/User/PaymentResult";
import MyComponent from "./components/MyComponent";

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
            
            {/* <Route path="postcsstest" element={<MyComponent />} /> */}
            <Route path="auth" element={<Auth />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="terms" element={<Terms />} />
            <Route path="ticket" element={<TicketForm />} />

            <Route path="store/" element={<Store />}>
              <Route path="shop" element={<Shop />} />
              <Route path="cart" element={<Cart />} />
            </Route>

            <Route path="faq" element={<Faq />} />
            <Route path="user/" element={<User />}>
              <Route path="" element={<Navigate to={"/user/activeterms"} />} />
              <Route path="paymenthistory" element={<PaymentHistory />} />
              <Route path="activeterms" element={<ActiveTerms />} />
              <Route path="payments/:paymentId" element={<PaymentResult />} />
            </Route>

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
