import { CardTypeChildEnum } from "@repo/enums/card-type-child.enum";
import { createPassthroughComponent } from "@repo/ui/primitives/passthrough-component";

export interface ICardTypeChild extends Record<CardTypeChildEnum, ReturnType<typeof createPassthroughComponent>> {};