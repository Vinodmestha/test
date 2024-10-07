// import NewsletterFooter from '@/components/NewsletterFooter';

// import { AuthProvider } from "@/Context/AuthContext";
// import Navbar from "@/components/Containers/Navbar";

export default function CustomLayout({ children }) {
    return (
        <>
            {/* <Navbar/> */}
                <div className="flex flex-col min-h-screen mx-auto max-w-2xl px-4 pt-8 pb-16">
                    <div className="flex-grow">
                        <main className="my-0 py-16">{children}</main>
                    </div>
                </div>
                <div>new letter</div>
        </>
    );
}