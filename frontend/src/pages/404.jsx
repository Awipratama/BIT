import React from "react";

export default function NotFoundPage() {
    const handleHomeBtn = () => {
        window.location.href = "/";
    }

    return (
        <>
            <div className="notfound h-screen flex flex-col justify-center items-center px-4">
                <h1 className="text-center text-[50px] md:text-[100px] font-bold font-tomorrow">404</h1>
                <h2 className="text-center text-[24px] md:text-[36px] font-tomorrow">Page Not Found</h2>
                <p className="text-center text-[16px] md:text-[20px] mt-4 font-inter">
                    Oops! The page you are looking for does not exist.
                </p>
                <button onClick={handleHomeBtn} className="font-inter mt-4 bg-[#012D70] px-6 hover:bg-blue-900 text-white font-semibold py-3 rounded-lg transition cursor-pointer">
                    Go to Homepage
                </button>
            </div>
        </>
    )
}