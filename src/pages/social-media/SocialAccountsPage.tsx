
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Plus, Settings, Unlink, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

interface SocialAccount {
  id: string;
  platform: string;
  username: string;
  followers: number;
  connected: boolean;
  active: boolean;
  icon: React.ReactNode;
  color: string;
}

const SocialAccountsPage: React.FC = () => {
  const [accounts, setAccounts] = useState<SocialAccount[]>([
    {
      id: '1',
      platform: 'Twitter',
      username: '@yourbrand',
      followers: 12500,
      connected: true,
      active: true,
      icon: <Twitter className="h-5 w-5" />,
      color: 'bg-blue-500'
    },
    {
      id: '2',
      platform: 'LinkedIn',
      username: 'Your Company',
      followers: 8900,
      connected: true,
      active: true,
      icon: <Linkedin className="h-5 w-5" />,
      color: 'bg-blue-700'
    },
    {
      id: '3',
      platform: 'Instagram',
      username: '@yourbrand',
      followers: 25600,
      connected: false,
      active: false,
      icon: <Instagram className="h-5 w-5" />,
      color: 'bg-pink-500'
    },
    {
      id: '4',
      platform: 'Facebook',
      username: 'Your Brand Page',
      followers: 15200,
      connected: false,
      active: false,
      icon: <Facebook className="h-5 w-5" />,
      color: 'bg-blue-600'
    },
    {
      id: '5',
      platform: 'YouTube',
      username: 'Your Channel',
      followers: 3400,
      connected: false,
      active: false,
      icon: <Youtube className="h-5 w-5" />,
      color: 'bg-red-500'
    }
  ]);

  const toggleAccountActive = (accountId: string) => {
    setAccounts(prev => 
      prev.map(account => 
        account.id === accountId 
          ? { ...account, active: !account.active }
          : account
      )
    );
  };

  const connectAccount = (accountId: string) => {
    setAccounts(prev => 
      prev.map(account => 
        account.id === accountId 
          ? { ...account, connected: true, active: true }
          : account
      )
    );
  };

  const disconnectAccount = (accountId: string) => {
    setAccounts(prev => 
      prev.map(account => 
        account.id === accountId 
          ? { ...account, connected: false, active: false }
          : account
      )
    );
  };

  const formatFollowers = (count: number) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Social Accounts</h1>
          <p className="text-muted-foreground">
            Connect and manage your social media accounts
          </p>
        </div>
        <Button className="glass-button">
          <Plus className="h-4 w-4 mr-2" />
          Add Account
        </Button>
      </div>

      {/* Connected Accounts */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Connected Accounts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {accounts.filter(account => account.connected).map((account) => (
              <Card key={account.id} className="glass-card border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${account.color} text-white`}>
                        {account.icon}
                      </div>
                      <div>
                        <div className="font-medium">{account.platform}</div>
                        <div className="text-sm text-muted-foreground">{account.username}</div>
                      </div>
                    </div>
                    <Badge variant={account.active ? "default" : "secondary"}>
                      {account.active ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold">{formatFollowers(account.followers)}</div>
                    <div className="text-sm text-muted-foreground">Followers</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Active</span>
                      <Switch 
                        checked={account.active}
                        onCheckedChange={() => toggleAccountActive(account.id)}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="glass-button">
                        <Settings className="h-3 w-3" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="glass-button text-red-500 hover:text-red-600"
                        onClick={() => disconnectAccount(account.id)}
                      >
                        <Unlink className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {accounts.filter(account => account.connected).length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No accounts connected yet. Add your first social media account to get started.
            </div>
          )}
        </CardContent>
      </Card>

      {/* Available Platforms */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle>Available Platforms</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {accounts.filter(account => !account.connected).map((account) => (
              <Card key={account.id} className="glass-card border-white/10 hover:bg-white/5 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${account.color} text-white`}>
                      {account.icon}
                    </div>
                    <div>
                      <div className="font-medium">{account.platform}</div>
                      <div className="text-sm text-muted-foreground">Not connected</div>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full glass-button"
                    onClick={() => connectAccount(account.id)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Connect {account.platform}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SocialAccountsPage;
