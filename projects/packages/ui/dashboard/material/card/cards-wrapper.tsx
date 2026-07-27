import * as React from "react";
import { Primitive } from "@radix-ui/react-primitive";
import { twMerge } from "tailwind-merge";
import { CardsWrapperTypeChildEnum } from "@repo/enums/cards-wrapper-type-child.enum";
import { ICardsWrapperTypeChild } from "@repo/interfaces/cards-wrapper-type-child.interface";
import { createPassthroughComponent } from "@repo/ui/primitives/passthrough-component";

export const CardsWrapperContext = React.createContext<unknown>(null);

const { Title: Title, Card: Card }: ICardsWrapperTypeChild = {
    [CardsWrapperTypeChildEnum.TITLE]: createPassthroughComponent(CardsWrapperTypeChildEnum.TITLE),
    [CardsWrapperTypeChildEnum.CARD]: createPassthroughComponent(CardsWrapperTypeChildEnum.CARD)
}

export function CardsWrapper<T>({ children, data, className }: {
    children: React.ReactNode;
    data: T[];
    className?: string;
}) {
    const childMap: Record<CardsWrapperTypeChildEnum, React.ReactElement | null> = {
        [CardsWrapperTypeChildEnum.TITLE]: null,
        [CardsWrapperTypeChildEnum.CARD]: null
    };

    React.Children.forEach(children, (child) => {
        if (!React.isValidElement(child)) return;

        const childName = (child.type as any)?.displayName;
        if (childName) childMap[childName as CardsWrapperTypeChildEnum] = child;
    });

    return (
        <section className={twMerge("m-auto max-w-[1500px]", className)}>
            <Primitive.h2 asChild>
                {childMap && childMap[CardsWrapperTypeChildEnum.TITLE]}
            </Primitive.h2>
            <Primitive.div className="grid gap-x-8 gap-y-16 lg:grid-cols-2 2xl:grid-cols-3">
                {childMap[CardsWrapperTypeChildEnum.CARD] && data.map((item, i) => (
                    <CardsWrapperContext.Provider key={i} value={item}>
                        {React.cloneElement(childMap[CardsWrapperTypeChildEnum.CARD]!, item as Record<string, unknown>)}
                    </CardsWrapperContext.Provider>
                ))}
            </Primitive.div>
        </section>
    );
}

CardsWrapper.Title = Title;
CardsWrapper.Card = Card;