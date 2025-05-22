
import React from 'react';
import { useAuth } from '@/hooks/use-auth';

const ProfileSettingsPage: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-800 rounded-full overflow-hidden mb-4">
                <img 
                  src={`https://via.placeholder.com/128?text=${user?.name?.charAt(0) || 'U'}`} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md">
                Upload New Image
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  defaultValue={user?.name || ""}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  defaultValue={user?.email || ""}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled
                />
                <p className="text-xs text-muted-foreground mt-1">Email address cannot be changed</p>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name</label>
                <input 
                  type="text" 
                  id="company" 
                  placeholder="Enter your company name"
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-medium mb-2">Job Title</label>
                <input 
                  type="text" 
                  id="role" 
                  placeholder="Enter your job title"
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label htmlFor="bio" className="block text-sm font-medium mb-2">Bio</label>
                <textarea 
                  id="bio" 
                  rows={3}
                  placeholder="Tell us about yourself"
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <h2 className="text-xl font-semibold mb-6">Change Password</h2>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="current_password" className="block text-sm font-medium mb-2">Current Password</label>
            <input 
              type="password" 
              id="current_password" 
              className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div>
            <label htmlFor="new_password" className="block text-sm font-medium mb-2">New Password</label>
            <input 
              type="password" 
              id="new_password" 
              className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div>
            <label htmlFor="confirm_password" className="block text-sm font-medium mb-2">Confirm New Password</label>
            <input 
              type="password" 
              id="confirm_password" 
              className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div className="flex justify-end">
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md">
              Update Password
            </button>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Email Notifications</h3>
              <p className="text-sm text-muted-foreground">Receive email updates about your account</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Marketing Communications</h3>
              <p className="text-sm text-muted-foreground">Receive updates about new features and promotions</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Two-Factor Authentication</h3>
              <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
            </div>
            <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md">
              Enable
            </button>
          </div>
          
          <div className="pt-4 border-t border-white/10">
            <button className="text-red-400 hover:text-red-300 text-sm">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingsPage;
