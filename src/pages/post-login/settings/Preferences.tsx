
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Settings, Bell, Globe, Monitor } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const PreferencesSettings = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState({
    email: true,
    browser: true,
    content: true,
    social: false,
    system: true,
  });
  
  return (
    <div className="space-y-6 animate-fade-in pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">Preferences</h1>
        <p className="text-muted-foreground">
          Customize your app experience and notification settings
        </p>
      </div>

      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Monitor className="mr-2 h-5 w-5 text-primary" />
            Appearance
          </CardTitle>
          <CardDescription>
            Customize the look and feel of the application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Dark Mode</h4>
                <p className="text-sm text-muted-foreground">Enable dark theme for the application</p>
              </div>
              <Switch 
                checked={darkMode} 
                onCheckedChange={setDarkMode} 
                aria-label="Toggle dark mode"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">High Contrast</h4>
                <p className="text-sm text-muted-foreground">Increase contrast for better visibility</p>
              </div>
              <Switch aria-label="Toggle high contrast mode" />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Animations</h4>
                <p className="text-sm text-muted-foreground">Enable UI animations and transitions</p>
              </div>
              <Switch defaultChecked aria-label="Toggle animations" />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Compact Mode</h4>
                <p className="text-sm text-muted-foreground">Display more content with less spacing</p>
              </div>
              <Switch aria-label="Toggle compact mode" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-white/10 pt-6 flex justify-between">
          <Button variant="outline" onClick={() => {
            toast({
              title: "Preferences reset",
              description: "Appearance settings have been reset to defaults.",
            });
          }}>Reset to Default</Button>
          <Button onClick={() => {
            toast({
              title: "Settings saved",
              description: "Your appearance preferences have been updated.",
            });
          }}>Save Changes</Button>
        </CardFooter>
      </Card>

      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bell className="mr-2 h-5 w-5 text-primary" />
            Notifications
          </CardTitle>
          <CardDescription>
            Configure how and when you receive notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Notification Channels</h4>
              <div className="grid gap-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email_notifications" className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Email Notifications
                  </Label>
                  <Switch 
                    id="email_notifications" 
                    checked={notifications.email} 
                    onCheckedChange={(checked) => setNotifications({...notifications, email: checked})} 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="browser_notifications" className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                    Browser Notifications
                  </Label>
                  <Switch 
                    id="browser_notifications" 
                    checked={notifications.browser} 
                    onCheckedChange={(checked) => setNotifications({...notifications, browser: checked})} 
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Notification Types</h4>
              <div className="grid gap-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="content_notifications" className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Content Approvals
                  </Label>
                  <Switch 
                    id="content_notifications" 
                    checked={notifications.content} 
                    onCheckedChange={(checked) => setNotifications({...notifications, content: checked})} 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="social_notifications" className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      <line x1="6" y1="1" x2="6" y2="4"></line>
                      <line x1="10" y1="1" x2="10" y2="4"></line>
                      <line x1="14" y1="1" x2="14" y2="4"></line>
                    </svg>
                    Social Media Alerts
                  </Label>
                  <Switch 
                    id="social_notifications" 
                    checked={notifications.social} 
                    onCheckedChange={(checked) => setNotifications({...notifications, social: checked})} 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="system_notifications" className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    System Notifications
                  </Label>
                  <Switch 
                    id="system_notifications" 
                    checked={notifications.system} 
                    onCheckedChange={(checked) => setNotifications({...notifications, system: checked})} 
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Notification Schedule</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="quiet_hours" className="mr-2" />
                  <Label htmlFor="quiet_hours" className="text-sm">Enable quiet hours</Label>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="from_time" className="text-xs">From</Label>
                    <input 
                      id="from_time" 
                      type="time" 
                      className="glass-button border w-full rounded-md px-3 py-1 mt-1 bg-transparent"
                      defaultValue="22:00"
                    />
                  </div>
                  <div>
                    <Label htmlFor="to_time" className="text-xs">To</Label>
                    <input 
                      id="to_time" 
                      type="time" 
                      className="glass-button border w-full rounded-md px-3 py-1 mt-1 bg-transparent"
                      defaultValue="07:00"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-white/10 pt-6 flex justify-between">
          <Button variant="outline" onClick={() => {
            toast({
              title: "Preferences reset",
              description: "Notification settings have been reset to defaults.",
            });
          }}>Reset to Default</Button>
          <Button onClick={() => {
            toast({
              title: "Settings saved",
              description: "Your notification preferences have been updated.",
            });
          }}>Save Changes</Button>
        </CardFooter>
      </Card>

      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Globe className="mr-2 h-5 w-5 text-primary" />
            Language & Region
          </CardTitle>
          <CardDescription>
            Configure language preferences and regional settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <select 
                id="language" 
                className="glass-button border w-full rounded-md px-3 py-2 bg-transparent"
              >
                <option value="en-US">English (US)</option>
                <option value="en-GB">English (UK)</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="ar">العربية</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <select 
                id="timezone" 
                className="glass-button border w-full rounded-md px-3 py-2 bg-transparent"
              >
                <option value="UTC-8">Pacific Time (UTC-8)</option>
                <option value="UTC-5">Eastern Time (UTC-5)</option>
                <option value="UTC+0">Greenwich Mean Time (UTC+0)</option>
                <option value="UTC+1">Central European Time (UTC+1)</option>
                <option value="UTC+8">China Standard Time (UTC+8)</option>
                <option value="UTC+9">Japan Standard Time (UTC+9)</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="date_format">Date Format</Label>
              <select 
                id="date_format" 
                className="glass-button border w-full rounded-md px-3 py-2 bg-transparent"
              >
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="time_format">Time Format</Label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="12hour" 
                    name="time_format" 
                    value="12hour"
                    className="mr-2" 
                    defaultChecked
                  />
                  <Label htmlFor="12hour" className="text-sm">12-hour (AM/PM)</Label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="24hour" 
                    name="time_format" 
                    value="24hour"
                    className="mr-2"
                  />
                  <Label htmlFor="24hour" className="text-sm">24-hour</Label>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-white/10 pt-6 flex justify-between">
          <Button variant="outline" onClick={() => {
            toast({
              title: "Preferences reset",
              description: "Language and regional settings have been reset to defaults.",
            });
          }}>Reset to Default</Button>
          <Button onClick={() => {
            toast({
              title: "Settings saved",
              description: "Your language and regional preferences have been updated.",
            });
          }}>Save Changes</Button>
        </CardFooter>
      </Card>
      
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="mr-2 h-5 w-5 text-primary" />
            Advanced Settings
          </CardTitle>
          <CardDescription>
            Configure additional application preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Enable Keyboard Shortcuts</h4>
                <p className="text-sm text-muted-foreground">Use keyboard shortcuts for faster navigation</p>
              </div>
              <Switch defaultChecked aria-label="Toggle keyboard shortcuts" />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Auto-save Content</h4>
                <p className="text-sm text-muted-foreground">Automatically save content while editing</p>
              </div>
              <Switch defaultChecked aria-label="Toggle auto-save" />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Analytics Tracking</h4>
                <p className="text-sm text-muted-foreground">Allow anonymous usage data collection</p>
              </div>
              <Switch defaultChecked aria-label="Toggle analytics tracking" />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Debug Mode</h4>
                <p className="text-sm text-muted-foreground">Show detailed error messages</p>
              </div>
              <Switch aria-label="Toggle debug mode" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-white/10 pt-6 flex justify-between">
          <Button variant="outline" onClick={() => {
            toast({
              title: "Preferences reset",
              description: "Advanced settings have been reset to defaults.",
            });
          }}>Reset to Default</Button>
          <Button onClick={() => {
            toast({
              title: "Settings saved",
              description: "Your advanced preferences have been updated.",
            });
          }}>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PreferencesSettings;
