import { redirect } from "next/navigation";
import { useLocale } from "next-intl";
import createLocalePath from "@/utils/createLocalePath";
function Admin() {
  const locale = useLocale();

  const redirectUrl = createLocalePath("/admin/order", locale);

  return redirect(redirectUrl);
}

export default Admin;
