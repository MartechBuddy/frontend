
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Target, Plus, Save, Calendar, BarChart3, TrendingUp } from 'lucide-react';

interface KeywordGroup {
  id: string;
  name: string;
  keywords: string[];
  priority: 'high' | 'medium' | 'low';
  targetDate: string;
}

const mockKeywordGroups: KeywordGroup[] = [
  {
    id: '1',
    name: 'AI Marketing Core',
    keywords: ['AI marketing', 'artificial intelligence marketing', 'AI powered marketing'],
    priority: 'high',
    targetDate: '2024-02-15'
  },
  {
    id: '2',
    name: 'Content Automation',
    keywords: ['content automation', 'automated content creation', 'AI content tools'],
    priority: 'medium',
    targetDate: '2024-03-01'
  }
];

const KeywordPlannerPage: React.FC = () => {
  const [keywordGroups, setKeywordGroups] = useState<KeywordGroup[]>(mockKeywordGroups);
  const [newGroupName, setNewGroupName] = useState('');
  const [newKeyword, setNewKeyword] = useState('');
  const [selectedGroupId, setSelectedGroupId] = useState<string>('');

  const addKeywordGroup = () => {
    if (!newGroupName.trim()) return;
    
    const newGroup: KeywordGroup = {
      id: Date.now().toString(),
      name: newGroupName,
      keywords: [],
      priority: 'medium',
      targetDate: new Date().toISOString().split('T')[0]
    };
    
    setKeywordGroups([...keywordGroups, newGroup]);
    setNewGroupName('');
  };

  const addKeywordToGroup = (groupId: string) => {
    if (!newKeyword.trim()) return;
    
    setKeywordGroups(prev => 
      prev.map(group => 
        group.id === groupId 
          ? { ...group, keywords: [...group.keywords, newKeyword] }
          : group
      )
    );
    setNewKeyword('');
  };

  const removeKeyword = (groupId: string, keywordIndex: number) => {
    setKeywordGroups(prev =>
      prev.map(group =>
        group.id === groupId
          ? { ...group, keywords: group.keywords.filter((_, index) => index !== keywordIndex) }
          : group
      )
    );
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Keyword Planner</h1>
          <p className="text-muted-foreground">
            Organize keywords into strategic groups for your content campaigns
          </p>
        </div>
        <Button className="glass-button">
          <Save className="h-4 w-4 mr-2" />
          Save Plan
        </Button>
      </div>

      {/* Add New Group */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Create Keyword Group
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              placeholder="Enter group name (e.g., Blog Keywords)"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              className="flex-1"
            />
            <Button onClick={addKeywordGroup} className="glass-button">
              <Plus className="h-4 w-4 mr-2" />
              Add Group
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Keyword Groups */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {keywordGroups.map((group) => (
          <Card key={group.id} className="glass-card border-white/10">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{group.name}</CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge className={`${getPriorityColor(group.priority)} text-white`}>
                      {group.priority} priority
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {group.targetDate}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {group.keywords.length} keywords
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Keywords List */}
              <div className="space-y-2">
                {group.keywords.map((keyword, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded border border-white/10">
                    <span className="text-sm">{keyword}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeKeyword(group.id, index)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      ×
                    </Button>
                  </div>
                ))}
              </div>

              <Separator />

              {/* Add Keyword */}
              <div className="flex gap-2">
                <Input
                  placeholder="Add keyword..."
                  value={selectedGroupId === group.id ? newKeyword : ''}
                  onChange={(e) => {
                    setNewKeyword(e.target.value);
                    setSelectedGroupId(group.id);
                  }}
                  className="flex-1"
                />
                <Button 
                  size="sm" 
                  onClick={() => addKeywordToGroup(group.id)}
                  className="glass-button"
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>

              {/* Group Stats */}
              <div className="flex justify-between text-xs text-muted-foreground pt-2 border-t border-white/10">
                <div className="flex items-center gap-1">
                  <BarChart3 className="h-3 w-3" />
                  Avg Volume: 1.2K
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  Difficulty: 65%
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default KeywordPlannerPage;
