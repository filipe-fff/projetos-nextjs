import { CollapsibleTypeChildEnum } from "@repo/enums/collapsible-type-child.enum";
import { createPassthroughComponent } from "@repo/ui/primitives/passthrough-component";

export interface ICollapsibleTypeChild extends Record<CollapsibleTypeChildEnum, ReturnType<typeof createPassthroughComponent>> {};