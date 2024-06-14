import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { buyCoffee } from "@/api/mpesa/route";
import { Loader } from "lucide-react";

type FormData = {
  phone: string;
  amount: string;
};

const BuyMeCoffee = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");

  const { register, handleSubmit } = useForm<FormData>();

  const onBuyCoffee = async (data: FormData) => {
    setIsLoading(true);
    try {
      await buyCoffee(data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button>Buy Me Coffee</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Buy me coffee</DialogTitle>
          <DialogDescription>
            Show appreciation and support for the work I am doing here. Thank
            You.
            <ul className="mt-2 list-decimal list-inside space-y-2">
              <li>
                Enter your Phone Number to show the Mpesa Prompt on your Phone
              </li>
              <li>Amount you want to send</li>
            </ul>
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onBuyCoffee)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                {...register("phone", { required: true })}
                value={phoneNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPhoneNumber(e.target.value)
                }
                id="phone"
                placeholder="KE 254-712345678"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount
              </Label>
              <Input
                {...register("amount", { required: true })}
                value={amount}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAmount(e.target.value)
                }
                id="amount"
                placeholder="Amount in Ksh"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading} >
              {isLoading ? 
              (
                <span className="gap-2 flex items-center">
                    <Loader size={16} className="animate-spin"/>{" "}processing...
                </span>
                )
               : "Send"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BuyMeCoffee;
