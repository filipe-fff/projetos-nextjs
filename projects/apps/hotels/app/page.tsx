import { CardsWrapper } from "../../../packages/ui/dashboard/cards";
import Header from "./ui/header";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <CardsWrapper title="My Hotel">
          <p>Test</p>
        </CardsWrapper>
      </main>
    </>
  );
}