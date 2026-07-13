'use client';

import Header from "./ui/dashboard/header";
import Form from "./ui/dashboard/form";
import FormDialog from "./ui/dashboard/form-dialog";
import Sidebar from "@repo/ui/dashboard/sidebar";
import { CardsWrapper } from "@repo/ui/dashboard/material/cards";

export default function Page() {
  return (
    <>
      <Header />
      <main className="p-2">
        <div className="md:hidden">
          <FormDialog />
        </div>
        <div className="w-full flex flex-col gap-8 sm:flex-row">
          <Sidebar className="w-full max-w-[25%] md:max-w-[280px] h-full max-h-[calc(100vh-280px)] hidden md:block">
            <Form />
          </Sidebar>
          <div className="m-auto w-full">
            <CardsWrapper title="My Hotel">
              <p>Test</p>
            </CardsWrapper>
          </div>
        </div>
      </main>
    </>
  );
}