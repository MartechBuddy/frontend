import React from 'react';
import { Card } from "@/components/ui/card";

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-muted-foreground">
          Last updated: January 1, 2025
        </p>
      </div>

      <div className="prose prose-invert max-w-none">
        <Card className="glass-card border-white/10 p-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Analytics Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Functional Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings. They may be set by us or by third-party providers whose services we have added to our pages.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Marketing Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Managing Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Browser settings: Most browsers allow you to refuse cookies or delete specific cookies</li>
                <li>Cookie consent banner: Use our cookie preferences center when you first visit our site</li>
                <li>Opt-out links: Some third-party services provide direct opt-out mechanisms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Some cookies are placed by third-party services that appear on our pages. We have no control over these cookies and recommend you check the third-party websites for more information about their cookies and how to manage them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at privacy@martechengine.com.
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
