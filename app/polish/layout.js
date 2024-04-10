// layout.js

import Header from "@/components/header";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            {/* add margin  */}
            <div className="mt-16">
                {children}
            </div>
        </>
    )
}