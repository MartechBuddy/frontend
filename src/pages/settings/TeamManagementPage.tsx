
import React from 'react';

const TeamManagementPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Team Management</h1>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h2 className="text-xl font-semibold">Team Members</h2>
            <p className="text-sm text-muted-foreground">Manage your team members and their access</p>
          </div>
          
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Invite New Member
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10">
              <tr>
                <th className="text-left py-3 px-4 font-medium">Name</th>
                <th className="text-left py-3 px-4 font-medium">Email</th>
                <th className="text-left py-3 px-4 font-medium">Role</th>
                <th className="text-left py-3 px-4 font-medium">Status</th>
                <th className="text-left py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-800 rounded-full overflow-hidden mr-3">
                      <img src="https://via.placeholder.com/32?text=T" alt="" className="w-full h-full object-cover" />
                    </div>
                    <span>Test User (You)</span>
                  </div>
                </td>
                <td className="py-3 px-4">test@example.com</td>
                <td className="py-3 px-4">Owner</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">Active</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-sm text-primary hover:text-primary/80">Edit</button>
                </td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-800 rounded-full overflow-hidden mr-3">
                      <img src="https://via.placeholder.com/32?text=S" alt="" className="w-full h-full object-cover" />
                    </div>
                    <span>Sarah Johnson</span>
                  </div>
                </td>
                <td className="py-3 px-4">sarah@example.com</td>
                <td className="py-3 px-4">Admin</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">Active</span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="text-sm text-primary hover:text-primary/80">Edit</button>
                    <button className="text-sm text-red-400 hover:text-red-300">Remove</button>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-800 rounded-full overflow-hidden mr-3">
                      <img src="https://via.placeholder.com/32?text=M" alt="" className="w-full h-full object-cover" />
                    </div>
                    <span>Michael Chen</span>
                  </div>
                </td>
                <td className="py-3 px-4">michael@example.com</td>
                <td className="py-3 px-4">Member</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">Active</span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="text-sm text-primary hover:text-primary/80">Edit</button>
                    <button className="text-sm text-red-400 hover:text-red-300">Remove</button>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-800 rounded-full overflow-hidden mr-3">
                      <img src="https://via.placeholder.com/32?text=E" alt="" className="w-full h-full object-cover" />
                    </div>
                    <span>Emily Williams</span>
                  </div>
                </td>
                <td className="py-3 px-4">emily@example.com</td>
                <td className="py-3 px-4">Member</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full">Pending</span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="text-sm text-primary hover:text-primary/80">Resend</button>
                    <button className="text-sm text-red-400 hover:text-red-300">Cancel</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mt-6 text-sm text-muted-foreground">
          Your Team Plan includes 5 licensed users. You are currently using 4 seats.
        </p>
      </div>
      
      <div className="glass-card p-6 rounded-xl mb-8">
        <h2 className="text-xl font-semibold mb-6">Pending Invitations</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10">
              <tr>
                <th className="text-left py-3 px-4 font-medium">Email</th>
                <th className="text-left py-3 px-4 font-medium">Role</th>
                <th className="text-left py-3 px-4 font-medium">Invited On</th>
                <th className="text-left py-3 px-4 font-medium">Expires</th>
                <th className="text-left py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/5">
                <td className="py-3 px-4">emily@example.com</td>
                <td className="py-3 px-4">Member</td>
                <td className="py-3 px-4">May 21, 2025</td>
                <td className="py-3 px-4">May 28, 2025</td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="text-sm text-primary hover:text-primary/80">Resend</button>
                    <button className="text-sm text-red-400 hover:text-red-300">Cancel</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-6">Team Settings</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Team Information</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="team_name" className="block text-sm font-medium mb-2">Team Name</label>
                <input 
                  type="text" 
                  id="team_name" 
                  defaultValue="MartechEngine Team"
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label htmlFor="team_description" className="block text-sm font-medium mb-2">Team Description</label>
                <textarea 
                  id="team_description" 
                  rows={3}
                  placeholder="Describe your team's purpose"
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                ></textarea>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Team Permissions</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Allow Members to Invite Others</h4>
                  <p className="text-sm text-muted-foreground">Team members can send invitations to new users</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Restrict Project Creation</h4>
                  <p className="text-sm text-muted-foreground">Only Admins and Owners can create new projects</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Enforce Two-Factor Authentication</h4>
                  <p className="text-sm text-muted-foreground">Require 2FA for all team members</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md">
              Save Team Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamManagementPage;
