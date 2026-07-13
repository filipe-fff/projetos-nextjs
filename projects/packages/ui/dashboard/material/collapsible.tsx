'use client';

import * as React from "react";
import { twMerge } from "tailwind-merge";
import * as C from "@radix-ui/react-collapsible";
import { CollapsibleTypeChildEnum } from "@repo/enums/collapsible-type-child.enum";
import { ICollapsibleTypeChild } from "@repo/interfaces/collapsible-type-child.interface";
import { createPassthroughComponent } from "@repo/ui/primitives/passthrough-component";
import { clsx } from "clsx";
import "@repo/lib/styles/collapsible.css";

const { Trigger, Content }: ICollapsibleTypeChild = {
    [CollapsibleTypeChildEnum.TRIGGER]: createPassthroughComponent(CollapsibleTypeChildEnum.TRIGGER),
    [CollapsibleTypeChildEnum.CONTENT]: createPassthroughComponent(CollapsibleTypeChildEnum.CONTENT)
};

export default function Collapsible({ children, className }: { children: React.ReactNode; className?: string; }) {
    
    const [ open, setOpen ] = React.useState(false);
    
    const childMap: Record<CollapsibleTypeChildEnum, React.ReactElement | null> = {
        [CollapsibleTypeChildEnum.TRIGGER]: null,
        [CollapsibleTypeChildEnum.CONTENT]: null
    };

    React.Children.forEach(children, (child) => {
        if (!React.isValidElement(child)) return;

        const childName = (child.type as any)?.displayName;
        if (childName) childMap[childName as CollapsibleTypeChildEnum] = child;
    });
    
    return (
        <C.Root className={clsx("collapsible", open && "collapsible--open")} open={open} onOpenChange={setOpen}>
            <C.Trigger className="collapsible__trigger" asChild>
                { childMap && childMap[CollapsibleTypeChildEnum.TRIGGER] || <button>Open</button> }
            </C.Trigger>
            <C.Content className={twMerge("collapsible__content", className)} asChild>
                { childMap && childMap[CollapsibleTypeChildEnum.CONTENT] || <div /> }
            </C.Content>
        </C.Root>
    );
}

Collapsible.Trigger = Trigger;
Collapsible.Content = Content;