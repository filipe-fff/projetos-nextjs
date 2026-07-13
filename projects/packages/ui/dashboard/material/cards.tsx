import { twMerge } from "tailwind-merge";
import Image from "next/image";

export function Card({ children, className, title }: {
    children: React.ReactNode;
    className?: string;
    title: string;
}) {
    return (
        <div className={twMerge("p-2 m-auto w-full bg-white rounded-sm overflow-hidden", className)}>
            <div>
                <div className="w-full bg-black flex justify-center items-center h-[305px] rounded-sm">
                    <div className="flex m-auto w-[350px] h-[300px] overflow-hidden">
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

export function CardsWrapper({ children, className, title }: {
    children: React.ReactNode;
    className?: string;
    title: string;
}) {
    return (
        <section className={twMerge("m-auto max-w-[1500px] grid gap-x-8 gap-y-16 lg:grid-cols-2 2xl:grid-cols-3", className)}>
            {Array
                .from({length: 24})
                .map((_, i) => (
                    <Card key={i} title={title}>
                        {children}
                    </Card>
                ))
            }
        </section>
    );
}