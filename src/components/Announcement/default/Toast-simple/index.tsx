"use client";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

// Define ToastSimple component that accepts a message as a prop
export function ToastSimple({ message }: { message: string }) {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      description: message,
    });
  }, [message]);

  return null;
}
