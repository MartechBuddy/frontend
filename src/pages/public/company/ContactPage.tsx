
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto mb-16 text-center animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground">
          We'd love to hear from you. Get in touch with our team.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        <div className="lg:w-1/2 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="glass-button w-full px-4 py-2 rounded-md"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="glass-button w-full px-4 py-2 rounded-md"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="How can we help you?"
                className="glass-button w-full px-4 py-2 rounded-md"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Your message"
                className="glass-button w-full px-4 py-2 rounded-md"
                required
              ></textarea>
            </div>
            
            <Button type="submit" className="w-full md:w-auto">
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
        
        <div className="lg:w-1/2 animate-fade-in">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="glass-card rounded-xl p-6 mb-8 border border-white/5">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-muted-foreground">info@martechengine.ai</p>
                  <p className="text-muted-foreground">support@martechengine.ai</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground">Monday-Friday, 9am-5pm EST</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">123 AI Boulevard</p>
                  <p className="text-muted-foreground">San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="glass-card rounded-xl p-6 border border-white/5">
              <h3 className="font-semibold mb-2">What are your support hours?</h3>
              <p className="text-sm text-muted-foreground">
                Our support team is available Monday through Friday, 9am to 5pm EST.
              </p>
            </div>
            <div className="glass-card rounded-xl p-6 border border-white/5">
              <h3 className="font-semibold mb-2">How quickly will I receive a response?</h3>
              <p className="text-sm text-muted-foreground">
                We aim to respond to all inquiries within 24 business hours.
              </p>
            </div>
            <div className="glass-card rounded-xl p-6 border border-white/5">
              <h3 className="font-semibold mb-2">Do you offer phone support?</h3>
              <p className="text-sm text-muted-foreground">
                Phone support is available for paid plan subscribers. Free users can receive support via email.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="glass-card border-white/10 rounded-xl p-8 max-w-4xl mx-auto text-center animate-fade-in">
        <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-muted-foreground mb-6">
          Stay updated with the latest news, features, and AI marketing insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="glass-button rounded-md px-4 py-2 flex-grow"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
