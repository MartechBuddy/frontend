
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CookiesPage = () => {
  const { toast } = useToast();
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always enabled
    analytics: true,
    marketing: false
  });

  const handleCookieChange = (type: 'analytics' | 'marketing') => {
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleSavePreferences = () => {
    // In a real app, we would save these preferences to local storage or backend
    toast({
      title: "Cookie preferences saved",
      description: "Your cookie preferences have been updated.",
    });
  };

  const handleAcceptAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: true,
      marketing: true
    });

    // In a real app, we would save these preferences to local storage or backend
    toast({
      title: "All cookies accepted",
      description: "You have accepted all cookies.",
    });
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">1. What are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit websites. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies enhance your browsing experience by allowing websites to remember your preferences, understand how you use their site, and even show you relevant advertising.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">2. How We Use Cookies</h2>
            <p className="mb-4">
              MartechEngine.ai uses cookies for various purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
              </li>
              <li>
                <strong className="text-foreground">Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and your experience.
              </li>
              <li>
                <strong className="text-foreground">Marketing Cookies:</strong> These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
              </li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">3. Types of Cookies We Use</h2>
            <div className="space-y-6">
              <div className="glass-card border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-medium mb-2 text-foreground">Essential Cookies</h3>
                <p className="mb-4">
                  These cookies are strictly necessary for the website to function properly. They include:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Session cookies that remember your login status</li>
                  <li>Security cookies that help protect our website from abuse</li>
                  <li>Cookies that remember your cookie preferences</li>
                </ul>
                <div className="mt-4 flex items-center">
                  <input
                    type="checkbox"
                    id="essential-cookies"
                    checked={true}
                    disabled
                    className="h-4 w-4 rounded border-white/20 bg-transparent"
                  />
                  <label htmlFor="essential-cookies" className="ml-2 text-sm">
                    Always enabled (required for website functionality)
                  </label>
                </div>
              </div>
              
              <div className="glass-card border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-medium mb-2 text-foreground">Analytics Cookies</h3>
                <p className="mb-4">
                  These cookies collect information that helps us understand how you use our website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Google Analytics cookies</li>
                  <li>Performance monitoring cookies</li>
                  <li>User behavior tracking cookies</li>
                </ul>
                <div className="mt-4 flex items-center">
                  <input
                    type="checkbox"
                    id="analytics-cookies"
                    checked={cookiePreferences.analytics}
                    onChange={() => handleCookieChange('analytics')}
                    className="h-4 w-4 rounded border-white/20 bg-transparent"
                  />
                  <label htmlFor="analytics-cookies" className="ml-2 text-sm">
                    Enable analytics cookies
                  </label>
                </div>
              </div>
              
              <div className="glass-card border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-medium mb-2 text-foreground">Marketing Cookies</h3>
                <p className="mb-4">
                  These cookies are used to track your browsing habits and activity on our website. We and our third-party partners may use this information to show you relevant content and advertisements based on your interests.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Social media integration cookies</li>
                  <li>Advertising cookies from our partners</li>
                  <li>Retargeting cookies</li>
                </ul>
                <div className="mt-4 flex items-center">
                  <input
                    type="checkbox"
                    id="marketing-cookies"
                    checked={cookiePreferences.marketing}
                    onChange={() => handleCookieChange('marketing')}
                    className="h-4 w-4 rounded border-white/20 bg-transparent"
                  />
                  <label htmlFor="marketing-cookies" className="ml-2 text-sm">
                    Enable marketing cookies
                  </label>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">4. How to Control Cookies</h2>
            <p className="mb-4">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
            </p>
            <p>
              You can learn more about cookies and how to manage them in your browser at <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">allaboutcookies.org</a>.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">5. Your Cookie Preferences</h2>
            <p className="mb-6">
              You can customize your cookie preferences below. Essential cookies cannot be disabled as they are necessary for the proper functioning of the website.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                onClick={handleAcceptAll}
              >
                Accept All Cookies
              </Button>
              <Button 
                variant="outline" 
                className="glass-button" 
                onClick={handleSavePreferences}
              >
                Save Preferences
              </Button>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">6. Changes to Our Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">7. Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at privacy@martechengine.ai.
            </p>
          </section>
          
          <div className="text-sm">
            <p>Last updated: May 1, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;
