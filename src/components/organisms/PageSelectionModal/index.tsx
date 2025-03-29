import { Button, Divider } from "../../atoms";
import { PageSelectionItem } from "../../molecules/PageSelectionItem";
import { PageSelectionList } from "../../molecules/PageSelectionList";
import { usePageSelection, Page } from "../../../hooks";
import toast from "react-hot-toast";

interface Props {
    initialPages: Page[];
}

export const PageSelectionModal = ({ initialPages }: Props) => {
    const { pages, allChecked, toggleAllPages, togglePage } = usePageSelection(initialPages);

    const handleDone = () => {
        const selected = pages.filter((page) => page.isChecked).map((p) => p.title);
        if ( selected.length === 0 ) return toast.error("Page not selected")
        toast.success(`Selected pages: ${selected.join(", ")}`);
    };

    return (
        <div
            className="w-[370px] flex flex-col gap-1 rounded-md p-5 bg-white"
            style={{
                boxShadow: "0px 1px 10px -1px rgba(120,120,120,0.5)",
            }}
        >
            <PageSelectionItem
                label="All Pages"
                isSelected={allChecked}
                onChange={toggleAllPages}
            />
            <Divider />
            <PageSelectionList pages={pages} onTogglePage={togglePage} />
            <Divider />
            <Button handleButtonClick={handleDone}>Done</Button>
        </div>
    );
};
