import { Checkbox } from "../../atoms";

interface PageSelectionItemProps {
    label: string;
    isSelected: boolean;
    onChange: () => void;
}

export const PageSelectionItem = ({
    label,
    isSelected,
    onChange,
}: PageSelectionItemProps) => {
    return (
        <div className="w-full h-[42px] py-2 pr-[15px] pl-[22px] flex justify-between items-center font-montserrat font-normal text-sm text-text-primary">
            <p>{label}</p>
            <Checkbox isSelected={isSelected} onChange={onChange} />
        </div>
    );
};
