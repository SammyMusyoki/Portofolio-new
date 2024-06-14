import { toast } from "@/components/ui/use-toast";
import { fireConfetti } from "@/utils";

export interface IdataProps {
        phone: string,
        amount: string
}

export const buyCoffee = async ( {phone, amount}: IdataProps) => {
    try{
        const res = await fetch('http://localhost:8000/api/mpesa-stk-push', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({phone, amount})
        });
    
        if (res.ok) {
            fireConfetti()
            toast({
                title: 'Success',
                description: 'Your payment is successful.',
                variant: 'default'
            });
        } else {
            toast({
                title: 'Error',
                description: 'There was an error making your payment.',
                variant: 'destructive'
            });
        }
    } catch (error: any) {
        const errorMessage = "There was an error making your payment. Please try again later."
        toast({
            title: 'Error',
            description: errorMessage,
            variant: 'destructive'
        });
    }
}