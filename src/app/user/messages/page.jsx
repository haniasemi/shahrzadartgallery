'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, MessageSquare } from 'lucide-react';

export default function UserMessages() {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/verify', { credentials: 'include' });
        const data = await res.json();
        
        if (!data.valid) {
          router.push('/login');
          return;
        }
        
        setUserId(data.user.id);
      } catch (error) {
        console.error('Auth check error:', error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, [router]);

  useEffect(() => {
    if (userId) {
      loadMessages();
      const interval = setInterval(() => {
        loadMessages();
      }, 3000); // Refresh every 3 seconds
      return () => clearInterval(interval);
    }
  }, [userId]);

  const loadMessages = async () => {
    if (!userId) return;
    
    try {
      const res = await fetch(`/api/user/messages`, { credentials: 'include' });
      const data = await res.json();
      if (data.success) {
        setMessages(data.messages || []);
      }
    } catch (error) {
      console.error('Load messages error:', error);
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !userId) return;

    try {
      const res = await fetch('/api/user/messages/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: newMessage
        }),
        credentials: 'include'
      });
      const data = await res.json();
      
      if (data.success) {
        setNewMessage('');
        loadMessages();
      } else {
        alert('خطا در ارسال پیام: ' + (data.error || 'خطای ناشناخته'));
      }
    } catch (error) {
      console.error('Send message error:', error);
      alert('خطا در ارسال پیام');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 golden-text">گفتگو با مدیر</h1>

        <Card className="card-elegant h-[600px] flex flex-col">
          <CardContent className="p-4 flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">هنوز پیامی ارسال نشده است</p>
                  </div>
                </div>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg._id}
                    className={`flex ${msg.isFromAdmin ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] p-3 rounded-lg ${
                        msg.isFromAdmin
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary'
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {new Date(msg.createdAt).toLocaleString('fa-IR')}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="flex gap-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="پیام خود را بنویسید..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} className="btn-golden">
                <Send className="w-4 h-4 ml-1" />
                ارسال
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

