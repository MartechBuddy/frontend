
import React from "react";
import { Check, CreditCard, Key, Lock, Save, User, UserCog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const Settings = () => {
  return (
    <div className="space-y-8">
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your account, subscription, and API settings
        </p>
      </div>
      
      <Tabs defaultValue="profile" className="animate-fade-in">
        <TabsList className="glass-card p-1 rounded-xl border-white/10">
          <TabsTrigger value="profile" className="data-[state=active]:glass-button data-[state=active]:shadow-sm rounded-lg">
            <User size={16} className="mr-2" /> Profile
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:glass-button data-[state=active]:shadow-sm rounded-lg">
            <Lock size={16} className="mr-2" /> Security
          </TabsTrigger>
          <TabsTrigger value="billing" className="data-[state=active]:glass-button data-[state=active]:shadow-sm rounded-lg">
            <CreditCard size={16} className="mr-2" /> Billing
          </TabsTrigger>
          <TabsTrigger value="api" className="data-[state=active]:glass-button data-[state=active]:shadow-sm rounded-lg">
            <Key size={16} className="mr-2" /> API
          </TabsTrigger>
          <TabsTrigger value="team" className="data-[state=active]:glass-button data-[state=active]:shadow-sm rounded-lg">
            <UserCog size={16} className="mr-2" /> Team
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="pt-4">
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="John Doe" className="glass-button" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="john@example.com" className="glass-button" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" defaultValue="AI Solutions Ltd" className="glass-button" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input id="role" defaultValue="Marketing Director" className="glass-button" />
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Campaign Completion</p>
                    <p className="text-sm text-muted-foreground">Get notified when a campaign completes</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Weekly Reports</p>
                    <p className="text-sm text-muted-foreground">Receive weekly performance reports</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Product Updates</p>
                    <p className="text-sm text-muted-foreground">Learn about new features and improvements</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Save size={16} className="mr-2" /> Save Changes
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="billing" className="pt-4">
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Subscription Plan</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              {["Basic", "Pro", "Enterprise"].map((plan, i) => {
                const isActive = plan === "Pro";
                return (
                  <div 
                    key={i} 
                    className={cn(
                      "glass-card p-5 rounded-xl relative",
                      isActive ? "border-primary/30 ring-1 ring-primary/30" : ""
                    )}
                  >
                    {isActive && (
                      <div className="absolute -top-2 -right-2 bg-primary text-xs rounded-full px-2 py-0.5">
                        CURRENT
                      </div>
                    )}
                    <h3 className="text-lg font-medium">{plan}</h3>
                    <div className="mt-2 mb-4">
                      <span className="text-2xl font-semibold">
                        ${plan === "Basic" ? "49" : plan === "Pro" ? "99" : "249"}
                      </span>
                      <span className="text-muted-foreground text-sm">/month</span>
                    </div>
                    
                    <div className="space-y-2 mb-5">
                      {[
                        plan === "Basic" ? "5 active campaigns" : plan === "Pro" ? "20 active campaigns" : "Unlimited campaigns",
                        plan === "Basic" ? "10 AI agents" : plan === "Pro" ? "All AI agents" : "All AI agents + custom",
                        plan === "Basic" ? "5,000 leads/mo" : plan === "Pro" ? "25,000 leads/mo" : "Unlimited leads",
                        plan === "Enterprise" && "Priority support",
                        plan === "Enterprise" && "Custom integration",
                      ].filter(Boolean).map((feature, j) => (
                        <div key={j} className="flex items-center text-sm">
                          <Check size={14} className="mr-2 text-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className={cn(
                        "w-full",
                        isActive 
                          ? "glass-button border border-primary/20 text-primary-foreground" 
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      )}
                    >
                      {isActive ? "Current Plan" : plan === "Enterprise" ? "Contact Sales" : "Upgrade"}
                    </Button>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-10">
              <h3 className="text-lg font-medium mb-4">Payment Method</h3>
              <div className="glass-card rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-10 w-16 rounded bg-gradient-to-r from-blue-600 to-blue-400 mr-4" />
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-sm text-muted-foreground">Expires 12/25</p>
                  </div>
                </div>
                <Button variant="outline" className="glass-button border-0">
                  Update
                </Button>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Billing History</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-muted-foreground text-sm border-b border-white/5">
                      <th className="text-left pb-3">Date</th>
                      <th className="text-left pb-3">Amount</th>
                      <th className="text-left pb-3">Status</th>
                      <th className="text-right pb-3">Invoice</th>
                    </tr>
                  </thead>
                  <tbody>
                    {["May 1, 2023", "Apr 1, 2023", "Mar 1, 2023"].map((date, i) => (
                      <tr key={i} className="border-b border-white/5">
                        <td className="py-3">{date}</td>
                        <td className="py-3">$99.00</td>
                        <td className="py-3">
                          <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30">
                            Paid
                          </Badge>
                        </td>
                        <td className="py-3 text-right">
                          <Button variant="ghost" size="sm" className="h-8 glass-button">
                            Download
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="security" className="animate-fade-in pt-4">
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Password & Security</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" className="glass-button" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" className="glass-button" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" className="glass-button" />
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Enable 2FA</p>
                  <p className="text-sm text-muted-foreground">Secure your account with two-factor authentication</p>
                </div>
                <Switch />
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Save size={16} className="mr-2" /> Save Changes
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
