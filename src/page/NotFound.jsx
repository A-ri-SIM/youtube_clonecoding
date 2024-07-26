import React from "react";
import { TbFaceIdError } from "react-icons/tb";

export default function NotFound() {
    return <div className="w-full h-screen flex flex-col items-center justify-center  dark:bg-zinc-900">
        <TbFaceIdError className="text-8xl"/>
        <p className="text-6xl my-4 font-semibold">ERROR</p>
        <p>PAGE NOT FOUND</p>
    </div>;
}
