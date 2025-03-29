import { Toaster } from "react-hot-toast";
import { PageSelectionModal } from "./components/organisms/PageSelectionModal";

const pages = [
  { id: "1", title: "Page 1", isChecked: false },
  { id: "2", title: "Page 2", isChecked: false },
  { id: "3", title: "Page 3", isChecked: false },
  { id: "4", title: "Page 4", isChecked: false },
];

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <PageSelectionModal initialPages={pages} />
      <Toaster />
    </main>
  );
}
