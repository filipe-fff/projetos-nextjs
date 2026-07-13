import { DialogTypeChildEnum } from "@repo/enums/dialog-type-child.enum";
import { createPassthroughComponent } from "@repo/ui/primitives/passthrough-component";

export interface IDialogTypeChild extends Record<DialogTypeChildEnum, ReturnType<typeof createPassthroughComponent>> {};