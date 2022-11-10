import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="text-black bg-base-100 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
