"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      const currentPath = window.location.pathname;
      const newPath = currentPath.replace(`/${localActive}`, `/${nextLocale}`);
      router.replace(newPath);
    });
  };

  return (
    <div>
      <label className="sr-only">Change language</label>
      <Select onValueChange={onSelectChange} defaultValue={localActive}>
        <SelectTrigger disabled={isPending}>
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="vi">Việt Nam</SelectItem>
            <SelectItem value="en">English</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
