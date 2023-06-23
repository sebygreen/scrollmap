"use client";

import { usePathname } from "next/navigation";

export default function Pathname({ className }) {
    const pathname = usePathname();
    return (
        <h1 className={className}>
            {pathname == "/scrollmaps"
                ? "Scrollmap's"
                : pathname == "/cards"
                ? "Cards"
                : pathname == "/illustrations"
                ? "Illustrations"
                : pathname == "/extra"
                ? "Miscellaneous"
                : "Homepage"}
        </h1>
    );
}
