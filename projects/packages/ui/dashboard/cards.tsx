import Image from "next/image";

export function Card({ title, children }: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="p-2 m-auto w-full border border-black rounded-md">
            <div>
                <div className="w-full flex justify-center items-center h-[380px] bg-gray-800 rounded-md">
                    <div className="flex m-auto w-[350px] h-[300px] rounded-md overflow-hidden">
                        <Image
                            src="/quarto.jpeg"
                            width={350}
                            height={300}
                            alt={title}
                            className="object-cover"
                            />
                    </div>
                </div>
                <h3>{title}</h3>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

export function CardsWrapper(prop: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="p-2 w-full grid gap-8 lg:grid-cols-2 2xl:grid-cols-3">
            {Array
                .from({length: 9})
                .map((_, i) => (
                    <Card {...prop} key={i} />
                ))
            }
        </div>
    );
}