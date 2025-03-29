import { FC } from "react";

interface ButtonProps {
    children?: React.ReactNode;
    handleButtonClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
    children,
    handleButtonClick,
}) => {
    return (
        <button
            onClick={handleButtonClick}
            className="w-[340px] h-10 px-5 py-2.5 flex items-center justify-center cursor-pointer bg-button-primary rounded font-montserrat font-normal text-sm text-text-primary hover:bg-button-hover"
        >
            {children}
        </button>
    );
}