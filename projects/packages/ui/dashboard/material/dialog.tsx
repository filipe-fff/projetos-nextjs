'use client';

import * as React from "react";
import { twMerge } from "tailwind-merge";
import * as D from "@radix-ui/react-dialog";
import { createPassthroughComponent } from "@repo/ui/primitives/passthrough-component";
import { IDialogTypeChild } from "@repo/interfaces/dialog-type-child.interface";
import { DialogTypeChildEnum } from "@repo/enums/dialog-type-child.enum";
import "@repo/lib/styles/dialog.css";

const { Trigger, Title, Description, Actions }: IDialogTypeChild = {
    [DialogTypeChildEnum.TRIGGER]: createPassthroughComponent(DialogTypeChildEnum.TRIGGER),
    [DialogTypeChildEnum.TITLE]: createPassthroughComponent(DialogTypeChildEnum.TITLE),
    [DialogTypeChildEnum.DESCRIPTION]: createPassthroughComponent(DialogTypeChildEnum.DESCRIPTION),
    [DialogTypeChildEnum.ACTIONS]: createPassthroughComponent(DialogTypeChildEnum.ACTIONS)
};

export default function Dialog({ children, className }: { children: React.ReactNode; className?: string; }) {

    const childMap: Record<DialogTypeChildEnum, React.ReactElement | null> = {
        [DialogTypeChildEnum.TRIGGER]: null,
        [DialogTypeChildEnum.TITLE]: null,
        [DialogTypeChildEnum.DESCRIPTION]: null,
        [DialogTypeChildEnum.ACTIONS]: null
    };

    React.Children.forEach(children, (child) => {
        if (!React.isValidElement(child)) return;

        const childName = (child.type as any)?.displayName;
        if (childName) childMap[childName as DialogTypeChildEnum] = child;
    });

    return (
        <D.Root>
            <D.Trigger className="dialog__trigger" asChild>
                {childMap && childMap[DialogTypeChildEnum.TRIGGER] || <button>Open</button>}
            </D.Trigger>
            <D.Portal>
                <D.Overlay className="dialog__overlay" />
                <D.Content className={twMerge("dialog__content", className)}>
                    <D.Title className="dialog__title" asChild>
                        {childMap && childMap[DialogTypeChildEnum.TITLE] || <h2 />}
                    </D.Title>
                    <D.Description className="dialog__description" asChild>
                        {childMap && childMap[DialogTypeChildEnum.DESCRIPTION] || <p />}
                    </D.Description>
                    <D.Close className="dialog__actions" asChild>
                        {childMap && childMap[DialogTypeChildEnum.ACTIONS] || <button>Close</button>}
                    </D.Close>
                </D.Content>
            </D.Portal>
        </D.Root>
    );
}

Dialog.Trigger = Trigger;
Dialog.Title = Title;
Dialog.Description = Description;
Dialog.Actions = Actions;