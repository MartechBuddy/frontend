
import React, { useState } from 'react';
import { MessageCircle, Send, X, Minimize2, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const FloatingAIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI assistant. How can I help you optimize your SEO today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'I understand you need help with that. Let me analyze your current SEO performance and provide some recommendations.',
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-cyan-600 hover:bg-cyan-700 shadow-lg z-50"
        size="icon"
      >
        <Bot size={24} className="text-white" />
      </Button>
    );
  }

  return (
    <Card className={`fixed bottom-6 right-6 w-80 bg-gray-900 border-gray-700 shadow-xl z-50 transition-all duration-300 ${
      isMinimized ? 'h-14' : 'h-96'
    }`}>
      <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-gray-700">
        <CardTitle className="text-sm font-medium text-gray-100 flex items-center">
          <Bot size={18} className="mr-2 text-cyan-400" />
          AI Assistant
        </CardTitle>
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMinimized(!isMinimized)}
            className="h-6 w-6 text-gray-400 hover:text-gray-100"
          >
            <Minimize2 size={14} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-6 w-6 text-gray-400 hover:text-gray-100"
          >
            <X size={14} />
          </Button>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="p-0 flex flex-col h-80">
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.isUser
                      ? 'bg-cyan-600 text-white'
                      : 'bg-gray-800 text-gray-100 border border-gray-700'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask me anything about SEO..."
                className="flex-1 bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-400"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-cyan-600 hover:bg-cyan-700"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default FloatingAIAssistant;
