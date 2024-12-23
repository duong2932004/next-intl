import * as React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import { TbClover } from "react-icons/tb";
import { RiMenuFold4Line } from "react-icons/ri";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ThemeToggle } from "@/components/dark-mode/theme-toggle";
import LanguageSwitch from "@/components/language-switch";
import createLocalePath from "@/utils/createLocalePath";

function Header() {
  const t = useTranslations("Navigation");
  const localActive = useLocale();

  return (
    <div>
      <div className="w-full px-5 py-4 flex justify-between items-center">
        <div className="left-header flex items-center space-x-4">
          <div className="flex">
            <div className="md:hidden sm:block">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <RiMenuFold4Line size={35} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>{t("menu-small.title")}</SheetTitle>
                    <SheetDescription>
                      {t("menu-small.description")}
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-2 py-4 grid-cols-2">
                    <Button>{t("menu-small.logged-in.item-1")}</Button>
                    <Button>{t("menu-small.logged-in.item-2")}</Button>
                    <Button>{t("menu-small.logged-in.item-3")}</Button>
                  </div>
                  <SheetFooter>
                    <Button>{t("menu-small.logged-in.item-4")}</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {" "}
              {/* Ensures logo is vertically aligned */}
              <div className="logo flex items-center">
                <TbClover size="1.5rem" />
              </div>
              <ul className="flex space-x-4">
                <Link href="/">{t("menu-small.logged-in.item-1")}</Link>
                <Link href="/">{t("menu-small.logged-in.item-2")}</Link>
                <Link href="/">{t("menu-small.logged-in.item-3")}</Link>
                <Link href="/">{t("menu-small.logged-in.item-4")}</Link>
                <Link href={createLocalePath("/login", localActive)}>
                  {t("menu-small.not-logged-in.item-2")}
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="right-header flex items-center space-x-3">
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;
