import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "../ui/MagicButton";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

const Header = () => {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <div className="flex justify-center relative my-5 sm:my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">

                    <TextGenerateEffect
                        words="Crafting UI Components & Tailored Web Solutions"
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    />

                    <p className="text-center md:tracking-wider mb-10 sm:mb-5 text-sm md:mt-5 md:text-base lg:text-xl">
                        Welcome to DreamUi! Discover custom websites tailored to your needs and contribute to our growing open-source UI library.
                    </p>

                    <div className="flex flex-col justify-center pb-10 items-center gap-10 sm:flex-row">
                        <a href="#about">
                            <MagicButton
                                title="Get A Website"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </a>

                        <a href="#about" className="">
                            <MagicButton
                                title="Contribute to DreamUi"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </a>
                    </div>

                </div>
            </div>
            <span className="mb-10 block h-1 w-[95%] bg-gradient-to-r from-blue-500 to-green-500 mt-3 rounded-full"></span>
        </div>
    );
};

export default Header;