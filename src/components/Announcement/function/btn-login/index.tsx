"use client"; // Đảm bảo đây là Client Component

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

export default function BtnLogin() {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      description: "Your message has been sent.",
    });
  };

  return (
    <Button variant="outline" onClick={handleClick}>
      Show Toast
    </Button>
  );
}
