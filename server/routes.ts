import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Contact form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real application, this would be stored in a database
      // or sent to an email service
      console.log("Contact form submission:", validatedData);
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: "Contact form submission received successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Validation error
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        // Server error
        console.error("Error processing contact form:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to process contact form submission" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
