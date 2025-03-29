import { PageSelectionModal } from "./components/organisms/PageSelectionModal";

const pages = [
  { id: "page1", title: "Page 1", isChecked: false },
  { id: "page2", title: "Page 2", isChecked: false },
  { id: "page3", title: "Page 3", isChecked: false },
  { id: "page4", title: "Page 4", isChecked: false },
];

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <PageSelectionModal initialPages={pages} />
    </main>
  );
}
