'use client';

import Dialog from "@repo/ui/dashboard/material/dialog";
import Form from "./form";

export default function FormDialog() {
    return (
      
        <Dialog>
            <Dialog.Trigger>
                <button>Filter</button>
            </Dialog.Trigger>
            <Dialog.Title>Filter</Dialog.Title>
            <Dialog.Description>
                <Form />
            </Dialog.Description>
            <Dialog.Actions>
                <button>Close</button></Dialog.Actions>
        </Dialog>
    );
}