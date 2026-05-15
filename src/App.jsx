import { BrowserRouter } from "react-router-dom";
import RootLayout from "@/components/layout/Layout.jsx";

// App is intentionally thin: it mounts the router and hands off to the
// RootLayout, which owns the chrome (Navbar/Footer), the smooth-scroll
// lifecycle, and the animated <Routes>.
export default function App() {
  return (
    <BrowserRouter>
      <RootLayout />
    </BrowserRouter>
  );
}
