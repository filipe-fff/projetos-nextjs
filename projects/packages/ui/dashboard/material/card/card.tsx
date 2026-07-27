import * as React from "react";
import Image from "next/image";
import { Primitive } from "@radix-ui/react-primitive";
import { twMerge } from "tailwind-merge";
import { CardTypeChildEnum } from "@repo/enums/card-type-child.enum";
import { ICardTypeChild } from "@repo/interfaces/card-type-child.interface";
import { createPassthroughComponent } from "@repo/ui/primitives/passthrough-component";

const { Title: TitleCard, Image: ImageCard, Content: ContentCard }: ICardTypeChild = {
    [CardTypeChildEnum.TITLE]: createPassthroughComponent(CardTypeChildEnum.TITLE),
    [CardTypeChildEnum.IMAGE]: createPassthroughComponent(CardTypeChildEnum.IMAGE),
    [CardTypeChildEnum.CONTENT]: createPassthroughComponent(CardTypeChildEnum.CONTENT)
};

export function Card({ children, className, title, src, content }: {
    children?: React.ReactNode;
    className?: string;
    title?: string;
    src?: string;
    content?: Object;
}) {

    const childMap: Record<CardTypeChildEnum, React.ReactElement | null> = {
        [CardTypeChildEnum.TITLE]: null,
        [CardTypeChildEnum.IMAGE]: null,
        [CardTypeChildEnum.CONTENT]: null
    };

    React.Children.forEach(children, (child) => {
        if (!React.isValidElement(child)) return;

        const childName = (child.type as any)?.displayName;
        if (childName) childMap[childName as CardTypeChildEnum] = child;
    });

    return (
        <Primitive.div className={twMerge("p-2 m-auto w-full bg-white rounded-sm overflow-hidden", className)}>
            <div>
                {childMap && childMap[CardTypeChildEnum.IMAGE] && <div>
                    <div>
                        {<Primitive.div asChild>
                            {childMap[CardTypeChildEnum.IMAGE]}
                        </Primitive.div>}
                    </div>
                </div> || src && <div className="w-full bg-black flex justify-center items-center h-[305px] rounded-sm">
                    <div className="flex m-auto w-[350px] h-[300px] overflow-hidden">
                        <Image
                            src={src}
                            alt="hotel"
                            width={350}
                            height={300}
                            className="object-cover"
                            />
                    </div>
                </div>}
                <Primitive.h3 asChild>
                    {childMap && childMap[CardTypeChildEnum.TITLE] ||
                    title && <h3>{title}</h3>}
                </Primitive.h3>
            </div>
            <Primitive.div asChild>
                {childMap && childMap[CardTypeChildEnum.CONTENT] ||
                content && <div className="p-2 flex gap-2">{
                    Object.keys(content).map((item, i) => <div key={i}>{item}</div>)
                }</div>}
            </Primitive.div>
        </Primitive.div>
    );
}

Card.Title = TitleCard;
Card.Image = ImageCard;
Card.Content = ContentCard;