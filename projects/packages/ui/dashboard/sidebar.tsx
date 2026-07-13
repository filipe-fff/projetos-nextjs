import { twMerge } from "tailwind-merge";

export default function Sidebar({ children, className }: { children: React.ReactNode; className?: string; }) {
    return (
        <nav className={twMerge("sticky top-0 p-2 w-full bg-white border shadow-black/50 shadow-md rounded-sm overflow-auto", className)}>
            {children}
        </nav>
    );
}