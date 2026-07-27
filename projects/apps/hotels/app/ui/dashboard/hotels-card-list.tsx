import * as React from "react";
import { CardsWrapper, CardsWrapperContext } from "@repo/ui/dashboard/material/card/cards-wrapper";
import { Card } from "@repo/ui/dashboard/material/card/card";
import Image from "next/image";

const data = [
    { title: "card1", src: "/quarto.jpeg", content: { msg: "Hello, World 1!" } },
    { title: "card2", src: "/quarto.jpeg", content: { msg: "Hello, World 2!" } },
    { title: "card3", src: "/quarto.jpeg", content: { msg: "Hello, World 3!" } }
];

function useHotelData() {
    return React.useContext(CardsWrapperContext) as { title: string; src: string; content: { msg: string; } };
}

function HotelCardTitle() {
    const { title } = useHotelData();

    return <h3 className="text-red-500">{title}</h3>;
}

function HotelCardImage() {
    const { src } = useHotelData();

    return (
        <div className="w-full bg-green-600 flex justify-center items-center h-[305px] rounded-sm">
            <div className="flex m-auto w-[350px] h-[300px] overflow-hidden">
                <Image
                    src={src}
                    alt="hotel"
                    width={350}
                    height={300}
                    className="object-cover"
                    />
            </div>
        </div>
        );
}

function HotelCardContent() {
    const { msg } = useHotelData().content;

    return (
        <div className="text-purple-800">{msg}</div>
    );
}

export default function HotelsCardList() {
    return (
        <CardsWrapper data={data} >
            <CardsWrapper.Title>Hoteis</CardsWrapper.Title>
            <CardsWrapper.Card>
                <Card>
                    {/* <Card.Title>
                        <HotelCardTitle />
                    </Card.Title>
                    <Card.Image>
                        <HotelCardImage />
                    </Card.Image>
                    <Card.Content>
                        <HotelCardContent />
                    </Card.Content> */}
                </Card>
            </CardsWrapper.Card>
        </CardsWrapper>
    );
}