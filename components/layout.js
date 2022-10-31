import Navbar from './navbar'
// import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="text-neutral bg-base-100">{children}</main>
      {/* <Footer /> */}
    </>
  )
}