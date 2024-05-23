import { toast } from "@/components/ui/use-toast";
import { Questions } from "@/types/types"

export const sendEmail = async (questions: Questions[], onClose: () => void) => {
    const res = await fetch('http://localhost:8000/api/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ questions })
    });

    if (res.ok) {
        toast({
            title: 'Success',
            description: 'Your message has been sent!',
            variant: 'default'
        });
        onClose()
    } else {
        toast({
            title: 'Error',
            description: 'There was an error sending your message. Please try again later.',
            variant: 'destructive'
        });
    }
}