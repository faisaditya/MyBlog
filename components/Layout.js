import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function Layout({ children }) {
    return (
        <div className='bg-[#170C24] text-white min-h-screen'>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}