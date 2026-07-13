'use client';

import { twMerge } from "tailwind-merge";
import { Input, Select, Option, Checkbox } from "@repo/ui/dashboard/material/fields";

export default function Form({ className }: { className?: string }) {

    return (
        /**
         * hotel name
         * price
         * rating
         * accommodation type
         * location country
         * location state
         * location city
         * amenities:
         *      - wi-fi
         *      - breakfast included
         *      - pool
         *      - air conditioning
         *      - parking
         *      - pet friendly
         *      - gym / fitness center
         *      - spa
         *      - restaurant
         *      - kitchen
         *      - beach access
         *      - elevator
         *      - 24h reception
         * policies / rules (checkbox ou toggles)
         *      - free cancellation
         *      - pay at property
         *      - no prepayment
         *      - adults only
         *      - pet allowed
         *      - smonking allowed
         */
        <search className="flex flex-1 min-h-0">
            <form className={twMerge("w-full min-h-0 flex-1 grid gap-4 @container", className)}>
                <div className="grid gap-4 @md:grid-cols-3">
                    <div className="border">A</div>
                    <div className="border">B</div>
                </div>
                <div className="grid gap-4 @md:grid-cols-3">
                    <div className="border">C</div>
                    <div className="border">D</div>
                </div>
                <div className="grid gap-4 @md:grid-cols-3">
                    <div className="border">E</div>
                    <div className="border">F</div>
                    <div className="border">G</div>
                </div>
                <div>
                    <h2>Amenities</h2>
                    <div className="grid @sm:grid-cols-2 gap-4 @md:grid-cols-3">
                        <div className="border">H</div>
                        <div className="border">I</div>
                        <div className="border">J</div>
                        <div className="border">K</div>
                        <div className="border">L</div>
                        <div className="border">M</div>
                        <div className="border">N</div>
                        <div className="border">O</div>
                        <div className="border">P</div>
                        <div className="border">Q</div>
                        <div className="border">R</div>
                        <div className="border">S</div>
                        <div className="border">T</div>
                    </div>
                </div>
                <div>
                    <h2>Policies / Rules</h2>
                    <div className="grid @sm:grid-cols-2 gap-4 @md:grid-cols-3">
                        <div className="border">U</div>
                        <div className="border">V</div>
                        <div className="border">W</div>
                        <div className="border">X</div>
                        <div className="border">Y</div>
                        <div className="border">Z</div>
                    </div>
                </div>
                {/* <Input label="Name" name="name" placeholder="hotel name"/>
                <Input label="Price" name="price" placeholder="100"/> */}
                {/* <Select label="Rating" name="rating">
                    <Option value={1}>1</Option>
                    <Option value={2}>2</Option>
                </Select>
                <Select label="Accommodation Type" name="accommodation-type">
                    <Option value="A">A</Option>
                    <Option value="B">B</Option>
                    <Option value="C">C</Option>
                </Select> */}
                {/* <Select label="Country" name="country">
                    <Option value="EUA">EUA</Option>
                    <Option value="Brazil">Brazil</Option>
                    <Option value="Argentina">Argentina</Option>
                </Select>
                <Select label="State" name="state">
                    <Option value="Brasilia">Brasilia</Option>
                    <Option value="Rio Grande do Sul">Rio Grande do Sul</Option>
                    <Option value="São Paulo">São Paulo</Option>
                </Select>
                <Select label="City" name="city">
                    <Option value="Salvador">Salvador</Option>
                    <Option value="Feira de Santana">Feira de Santana</Option>
                    <Option value="Juazeiro">Juazeira</Option>
                </Select> */}
                {/* <h3>Amenities</h3> */}
                {/* <Checkbox label="wi-fi" name="wi-fi" />
                <Checkbox label="breakfast included" name="breakfast-included" />
                <Checkbox label="pool" name="pool" />
                <Checkbox label="air conditioning" name="air-conditioning" />
                <Checkbox label="parking" name="parking" />
                <Checkbox label="pet friendly" name="pet-friendly" />
                <Checkbox label="gym / fitness center" name="gym-fitness-center" />
                <Checkbox label="spa" name="spa" />
                <Checkbox label="restaurant" name="restaurant" />
                <Checkbox label="kitchen" name="kitchen" />
                <Checkbox label="beach access" name="beach-access" />
                <Checkbox label="elevator" name="elevator" />
                <Checkbox label="24h reception" name="24h-reception" /> */}
                {/* <h3>Policies / Rules</h3> */}
                {/* <Checkbox label="free cancellation" name="free-cancellation" />
                <Checkbox label="pay at property" name="pay-at-property" />
                <Checkbox label="no prepayment" name="no-prepayment" />
                <Checkbox label="adults only" name="adults-only" />
                <Checkbox label="pet allowed" name="pet-allowed" />
                <Checkbox label="smonking allowed" name="smonking-allowed" /> */}
            </form>
        </search>
    );
}