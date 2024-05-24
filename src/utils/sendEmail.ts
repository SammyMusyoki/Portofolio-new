import { toast } from "@/components/ui/use-toast";
import { Questions } from "@/types/types"

export const sendEmail = async (questions: Questions[], onClose: () => void) => {
    try {
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
    } catch (error: any) {
        let errorMessage = "There was an error sending your message. Please try again later."

        if (error instanceof TypeError && error.message === "Failed to fetch") {
            errorMessage = "Internet connection error. Please check your network and try again."
        } else if (error instanceof TypeError && error.message.includes("NetworkError")) {
            errorMessage = "Network error. Please check your internet connetion and try again."
        } else if (error instanceof Error) {
            errorMessage = `Server connection error: ${error.message}`
        }
        toast({
            title: 'Error',
            description: errorMessage,
            variant: 'destructive'
        });
    }
}