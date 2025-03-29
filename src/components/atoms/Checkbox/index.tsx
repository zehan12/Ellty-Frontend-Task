import { FC } from "react";

interface CheckboxProps {
    isSelected: boolean;
    onChange: () => void;
}

export const Checkbox: FC<CheckboxProps> = ({ isSelected, onChange }) => {
    return (
        <div
            onClick={onChange}
            className={`w-[24px] h-[24px] group flex justify-center items-center cursor-pointer rounded-md border border-checkbox-border
            hover:ring-0 active:ring active:ring-offset-2 active:ring-offset-blue-100/95 active:ring-blue-100/95
            ${isSelected ? "bg-action-primary border-action-primary hover:bg-action-hover hover:border-action-hover" : ""}
        `}
        >
            <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={isSelected ? "block stroke-checkbox-tick" : "hidden group-hover:block stroke-checkbox-disabled"}
            >
                <path
                    d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
}
