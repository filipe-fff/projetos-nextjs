import Image from "next/image";

export default function Header() {

    return (
        <header>
            <div className="relative w-full h-[380px] overflow-hidden">
                <Image
                    src="/hotel-beach.jpg"
                    alt="Hotel Beach"
                    fill
                    className="object-cover"
                />
            </div>
        </header>
    );
}