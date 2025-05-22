import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
});

const otpSchema = z.object({
  otp: z.string().length(6, { message: "OTP must be 6 digits" }),
});

type FormValues = z.infer<typeof formSchema>;
type OtpValues = z.infer<typeof otpSchema>;

interface DemoCallFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoCallForm({ isOpen, onClose }: DemoCallFormProps) {
  const [step, setStep] = useState<"form" | "otp" | "success">("form");
  const { toast } = useToast();

  // Form for contact details
  const contactForm = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  // Form for OTP
  const otpForm = useForm<OtpValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  // Handle initial form submission
  const onSubmitContactForm = (data: FormValues) => {
    // In a real app, this would call an API to send an OTP
    console.log("Form data:", data);
    
    // For demo purposes, generate a random OTP
    setStep("otp");
    
    toast({
      title: "OTP Sent",
      description: "A verification code has been sent to your phone",
    });
  };

  // Handle OTP verification
  const onSubmitOtp = (data: OtpValues) => {
    // In a real app, this would validate the OTP with an API
    console.log("OTP:", data.otp);
    
    setStep("success");
    
    toast({
      title: "Success!",
      description: "Your demo call has been scheduled",
    });
    
    // Reset and close after 2 seconds
    setTimeout(() => {
      resetAndClose();
    }, 2000);
  };

  // Reset all forms and close modal
  const resetAndClose = () => {
    contactForm.reset();
    otpForm.reset();
    setStep("form");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        {step === "form" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-secondary">Book a Demo Call</DialogTitle>
              <DialogDescription>
                Enter your details below and we'll set up a personalized demo.
              </DialogDescription>
            </DialogHeader>
            
            <Form {...contactForm}>
              <form onSubmit={contactForm.handleSubmit(onSubmitContactForm)} className="space-y-4 py-4">
                <FormField
                  control={contactForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={contactForm.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (555) 123-4567" type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <DialogFooter className="mt-6">
                  <Button type="button" variant="outline" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-primary text-white">
                    Next
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </>
        )}
        
        {step === "otp" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-secondary">Verify Phone Number</DialogTitle>
              <DialogDescription>
                We've sent a verification code to your phone. Please enter it below.
              </DialogDescription>
            </DialogHeader>
            
            <Form {...otpForm}>
              <form onSubmit={otpForm.handleSubmit(onSubmitOtp)} className="space-y-4 py-4">
                <FormField
                  control={otpForm.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>6-Digit Code</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="123456" 
                          maxLength={6} 
                          className="text-center text-lg tracking-widest"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="text-center mt-2">
                  <button 
                    type="button" 
                    className="text-primary hover:underline text-sm"
                    onClick={() => {
                      toast({
                        title: "OTP Resent",
                        description: "A new verification code has been sent",
                      });
                    }}
                  >
                    Resend Code
                  </button>
                </div>
                
                <DialogFooter className="mt-6">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setStep("form")}
                  >
                    Back
                  </Button>
                  <Button type="submit" className="bg-primary text-white">
                    Verify
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </>
        )}
        
        {step === "success" && (
          <div className="py-8 text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <DialogTitle className="text-2xl font-bold text-secondary mb-2">All Set!</DialogTitle>
            <p className="text-gray-600 mb-6">
              Your demo call has been scheduled. Our team will contact you shortly.
            </p>
            <Button 
              onClick={resetAndClose}
              className="bg-primary text-white"
            >
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}