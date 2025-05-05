
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Check, Mail, MapPin, PhoneCall } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });

    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitting(false);
  };

  return (
    <div className="py-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have questions or need help? Get in touch with our team and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          <Card className="glass-card border-white/10 p-6 col-span-1 lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">
                  We'd love to hear from you. Our team is always ready to help with any questions you may have.
                </p>
              </div>

              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">support@martechengine.ai</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <PhoneCall className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold">Office</h3>
                    <p className="text-muted-foreground">
                      123 AI Boulevard<br />
                      San Francisco, CA 94107<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="glass-card border-white/10 p-6 col-span-1 lg:col-span-3">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="glass-button border-white/10"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="glass-button border-white/10"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help you?"
                  className="glass-button border-white/10 min-h-32"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  id="marketing"
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-transparent"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                />
                <Label htmlFor="marketing" className="text-sm font-normal">
                  I agree to receive marketing communications from MartechEngine.ai
                </Label>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </form>

            <div className="mt-8">
              <h3 className="font-semibold mb-3">Looking for a demo?</h3>
              <Button 
                variant="outline" 
                className="glass-button w-full"
                onClick={() => {
                  toast({
                    title: "Demo Request",
                    description: "We've received your demo request. A team member will contact you shortly."
                  });
                }}
              >
                Book a Demo
              </Button>
            </div>
          </Card>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="glass-card border-white/5 rounded-xl p-5">
              <h3 className="font-semibold mb-2">What is your typical response time?</h3>
              <p className="text-muted-foreground text-sm">We aim to respond to all inquiries within 24 hours during business days.</p>
            </div>
            <div className="glass-card border-white/5 rounded-xl p-5">
              <h3 className="font-semibold mb-2">Do you offer technical support?</h3>
              <p className="text-muted-foreground text-sm">Yes, our technical support team is available 24/7 for Pro and Enterprise plans.</p>
            </div>
            <div className="glass-card border-white/5 rounded-xl p-5">
              <h3 className="font-semibold mb-2">How can I request a custom feature?</h3>
              <p className="text-muted-foreground text-sm">Enterprise customers can request custom features through their account manager or via the contact form.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
