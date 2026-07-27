import { createPassthroughComponent } from "@repo/ui/primitives/passthrough-component";
import { CardsWrapperTypeChildEnum } from "@repo/enums/cards-wrapper-type-child.enum";

export interface ICardsWrapperTypeChild extends Record<CardsWrapperTypeChildEnum, ReturnType<typeof createPassthroughComponent>> {
    [CardsWrapperTypeChildEnum.TITLE]: ReturnType<typeof createPassthroughComponent>;
    [CardsWrapperTypeChildEnum.CARD]: ReturnType<typeof createPassthroughComponent>;
};