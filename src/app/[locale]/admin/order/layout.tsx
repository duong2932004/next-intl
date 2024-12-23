"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { FaPlusCircle } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ThemeToggle } from "@/components/dark-mode/theme-toggle";
import LanguageSwitch from "@/components/language-switch";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { DataTableDemo } from "@/components/order/table";

function DashboardsLayout() {
  const [date1, setDate1] = React.useState<Date>();
  const [date2, setDate2] = React.useState<Date>();

  const handleResetDate = () => {
    setDate1(new Date());
    setDate2(new Date());
  };

  return (
    <SidebarInset>
      <header className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 h-4 hidden md:block"
          />
          <Breadcrumb className="hidden md:block">
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Cửa hàng 1</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Đơn hàng</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </header>
      <div className="flex flex-1 flex-col sm:p-0 md:p-4 gap-4 pt-0">
        <div className="flex justify-between p-2">
          <h1 className="text-2xl font-semibold mb-4">Đơn hàng</h1>
          <Button className="flex items-center">
            <FaPlusCircle className="" />
            <span>Tạo mới</span>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex items-center space-x-2">
              <span>Từ</span>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-[200px] justify-start text-left font-normal",
                      !date1 && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon />
                    {date1 ? format(date1, "PPP") : <span>Chọn ngày</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date1}
                    onSelect={setDate1}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex items-center space-x-2">
              <span>Đến</span>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-[200px] justify-start text-left font-normal",
                      !date2 && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon />
                    {date2 ? format(date2, "PPP") : <span>Chọn ngày</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date2}
                    onSelect={setDate2}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="inline-flex">
              <Button variant="secondary" onClick={handleResetDate}>
                Đặt lại
              </Button>
            </div>
          </div>
        </div>
        <DataTableDemo />
      </div>
    </SidebarInset>
  );
}

export default DashboardsLayout;
