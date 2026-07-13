import * as React from "react";
import { twMerge } from "tailwind-merge";

// export const createPassthroughComponent = (displayName: string) => {
//     const Component = React.forwardRef<HTMLElement, { children: React.ReactNode }>(
//         ({ children, ...props }, ref) => {
//             if (React.isValidElement(children))
//                 return React.cloneElement(
//                     children, {
//                         ...props,
//                         ref,
//                         className: twMerge((props as any).className, (children as any).props.className) } as any
//                 );

//             return <>{children}</>;
//         }
//     );
//     Component.displayName = displayName;
//     return Component;
// };

export const createPassthroughComponent = (displayName: string) => {
    const Component = ({ children, ref, ...props }: {
            children: React.ReactNode;
            ref?: React.Ref<unknown>;
            [key: string]: unknown;
        }) => {

        if (React.isValidElement(children))
            return React.cloneElement<any>(children, {
                ...props,
                ref,
                className: twMerge((props as any).className, (children.props as any).className)
            });

        return <>{children}</>;
    };

    Component.displayName = displayName;
    return Component;
};