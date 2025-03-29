import { useState } from "react";

export interface Page {
    id: string;
    title: string;
    isChecked: boolean;
}

export const usePageSelection = (initialPages: Page[]) => {
    const [pages, setPages] = useState<Page[]>(initialPages);

    const allChecked = pages.length > 0 && pages.every((page) => page.isChecked);

    const togglePage = (id: string) => {
        setPages((prev) =>
            prev.map((page) =>
                page.id === id ? { ...page, isChecked: !page.isChecked } : page
            )
        );
    };

    const toggleAllPages = () => {
        setPages((prev) => prev.map((page) => ({ ...page, isChecked: !allChecked })));
    };

    return {
        pages,
        allChecked,
        togglePage,
        toggleAllPages,
    };
};
