"use client";

import * as React from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

function LoginUser() {
  const { toast } = useToast();

  const t = useTranslations("login-user");

  return (
    <div className="w-full min-h-[80vh] flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
          <CardDescription>{t("description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">{t("Label")}</Label>
                <Input id="name" placeholder={t("placeholder")} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="w-full">
          <Button
            className="w-full"
            onClick={() => {
              toast({
                description: t("login-success"),
              });
            }}
          >
            {t("btn-submit")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LoginUser;
