import { Page } from "../../../hooks";
import { PageSelectionItem } from "../PageSelectionItem";

interface Props {
    pages: Page[];
    onTogglePage: (id: string) => void;
}

export const PageSelectionList = ({ pages, onTogglePage }: Props) => {
    return (
        <>
            {pages.map((page) => (
                <PageSelectionItem
                    key={page.id}
                    label={page.title}
                    isSelected={page.isChecked}
                    onChange={() => onTogglePage(page.id)}
                />
            ))}
        </>
    );
};
