
import React from "react";
import { Link } from "react-router-dom";

const PrivacyPage = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">1. Introduction</h2>
            <p>
              At MartechEngine.ai, we take your privacy seriously. This Privacy Policy describes how we collect, use, and disclose your personal information when you use our website, products, and services.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">2. Information We Collect</h2>
            <p className="mb-4">
              We collect several types of information from and about users of our Service, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Personal Data: This includes information by which you may be personally identified, such as name, email address, postal address, billing information, and any other identifier by which you may be contacted online or offline.
              </li>
              <li>
                Usage Data: Information about how you access and use our Service, including your browser type, IP address, time spent on pages, pages visited, and other diagnostic data.
              </li>
              <li>
                Marketing Data: Your preferences in receiving marketing from us and our third parties and your communication preferences.
              </li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">3. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect about you for various purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our Service</li>
              <li>To process transactions and payments</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To provide you with news, special offers and general information about other goods, services and events which we offer</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">4. Disclosure of Your Information</h2>
            <p className="mb-4">
              We may disclose personal information that we collect or you provide:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To our subsidiaries and affiliates</li>
              <li>To contractors, service providers, and other third parties we use to support our business</li>
              <li>To fulfill the purpose for which you provide it</li>
              <li>For any other purpose disclosed by us when you provide the information</li>
              <li>With your consent</li>
              <li>To comply with any court order, law, or legal process</li>
              <li>To enforce our Terms of Service and other agreements</li>
              <li>If we believe disclosure is necessary to protect the rights, property, or safety of MartechEngine.ai, our customers, or others</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">5. Data Security</h2>
            <p>
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure. We cannot guarantee the security of your personal information transmitted to our Service.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">6. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service. For more information about the cookies we use, please see our <Link to="/cookies" className="text-primary hover:underline">Cookie Policy</Link>.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">7. Your Data Protection Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction of inaccurate personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at privacy@martechengine.ai.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">8. Children's Privacy</h2>
            <p>
              Our Service is not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">9. Changes to Our Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@martechengine.ai.
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

export default PrivacyPage;
