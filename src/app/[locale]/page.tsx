import Footer from "@/components/footer";
import Header from "@/components/header";
import { DataTableDemo } from "@/components/order/table";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("IndexPage");

  return (
    <div className="container mx-auto px-0 max-w-full">
      <Header />
      <h1 className="text-4xl mb-4 font-semibold">{t("title")}</h1>
      <p>{t("description")}</p>
      <DataTableDemo />
      <Footer />
    </div>
  );
}
