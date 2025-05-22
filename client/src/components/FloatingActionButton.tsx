import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Phone, 
  Headphones, 
  X,
  Plus
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const FloatingActionButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [isVapiDemoOpen, setIsVapiDemoOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const { toast } = useToast();

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const openWhatsApp = () => {
    // Replace with your WhatsApp number
    window.open("https://wa.me/1234567890", "_blank");
    setIsExpanded(false);
  };

  const openCallbackDialog = () => {
    setIsCallbackOpen(true);
    setIsExpanded(false);
  };

  const openVapiDemo = () => {
    setIsVapiDemoOpen(true);
    setIsExpanded(false);
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Callback Requested",
      description: `We'll call you back at ${phoneNumber} shortly.`,
    });
    setPhoneNumber("");
    setIsCallbackOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">
        {/* Action buttons that appear when expanded */}
        {isExpanded && (
          <>
            <Button
              onClick={openWhatsApp}
              size="icon"
              className="bg-green-500 hover:bg-green-600 h-12 w-12 rounded-full shadow-lg transition-transform hover:scale-105"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-6 w-6 text-white" />
            </Button>
            
            <Button
              onClick={openCallbackDialog}
              size="icon"
              className="bg-blue-500 hover:bg-blue-600 h-12 w-12 rounded-full shadow-lg transition-transform hover:scale-105"
              aria-label="Request Callback"
            >
              <Phone className="h-6 w-6 text-white" />
            </Button>
            
            <Button
              onClick={openVapiDemo}
              size="icon"
              className="bg-purple-500 hover:bg-purple-600 h-12 w-12 rounded-full shadow-lg transition-transform hover:scale-105"
              aria-label="Vapi Web Demo"
            >
              <Headphones className="h-6 w-6 text-white" />
            </Button>
          </>
        )}
        
        {/* Main button */}
        <Button
          onClick={toggleExpansion}
          size="icon"
          className={cn(
            "h-14 w-14 rounded-full shadow-xl transition-all duration-300",
            isExpanded ? "bg-gray-700 hover:bg-gray-800" : "bg-primary hover:bg-primary/90"
          )}
          aria-label="Help Options"
        >
          {isExpanded ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Plus className="h-6 w-6 text-white" />
          )}
        </Button>
      </div>
      
      {/* Callback Dialog */}
      <Dialog open={isCallbackOpen} onOpenChange={setIsCallbackOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Request a Callback</DialogTitle>
            <DialogDescription>
              Enter your phone number and we'll call you right back.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleCallbackSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            
            <DialogFooter className="mt-6">
              <Button type="button" variant="outline" onClick={() => setIsCallbackOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-primary text-white">
                Request Call
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      
      {/* Vapi Demo Dialog */}
      <Dialog open={isVapiDemoOpen} onOpenChange={setIsVapiDemoOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Vapi Voice Assistant Demo</DialogTitle>
            <DialogDescription>
              Our voice assistant demo is coming soon.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-6 flex flex-col items-center">
            <div className="bg-purple-100 p-6 rounded-full mb-4">
              <Headphones className="h-10 w-10 text-purple-600" />
            </div>
            <p className="text-center text-gray-700 mb-4">
              We're preparing an interactive demo of our voice assistant AI technology. Stay tuned for this exciting feature!
            </p>
            <Button 
              onClick={() => setIsVapiDemoOpen(false)}
              className="bg-primary text-white"
            >
              Got it
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};