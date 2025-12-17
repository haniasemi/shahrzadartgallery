'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send } from 'lucide-react';

export default function AdminMessages() {
  const router = useRouter();
  const [conversations, setConversations] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/verify', { credentials: 'include' });
        const data = await res.json();
        
        if (!data.valid || data.user?.role !== 'admin') {
          router.push('/login');
          return;
        }
      } catch (error) {
        router.push('/login');
      }
    };
    checkAuth();
  }, [router]);

  useEffect(() => {
    loadConversations();
  }, []);

  useEffect(() => {
    if (selectedUser) {
      loadMessages(selectedUser);
      const interval = setInterval(() => {
        loadMessages(selectedUser);
      }, 3000); // Refresh every 3 seconds
      return () => clearInterval(interval);
    }
  }, [selectedUser]);

  const loadConversations = async () => {
    try {
      const res = await fetch('/api/admin/messages/conversations', { credentials: 'include' });
      const data = await res.json();
      if (data.success) {
        setConversations(data.conversations || []);
      }
    } catch (error) {
      console.error('Load conversations error:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMessages = async (userId) => {
    try {
      const res = await fetch(`/api/admin/messages/${userId}`, { credentials: 'include' });
      const data = await res.json();
      if (data.success) {
        setMessages(data.messages || []);
      }
    } catch (error) {
      console.error('Load messages error:', error);
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedUser) return;

    try {
      const res = await fetch('/api/admin/messages/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: selectedUser,
          content: newMessage
        }),
        credentials: 'include'
      });
      const data = await res.json();
      
      if (data.success) {
        setNewMessage('');
        loadMessages(selectedUser);
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
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 golden-text">پیام‌های مشتریان</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <Card className="card-elegant">
              <CardContent className="p-4">
                <h2 className="text-lg font-bold mb-4">گفتگوها</h2>
                <div className="space-y-2">
                  {conversations.map((conv) => (
                    <button
                      key={conv.userId}
                      onClick={() => setSelectedUser(conv.userId)}
                      className={`w-full text-right p-3 rounded-lg transition-colors ${
                        selectedUser === conv.userId
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary hover:bg-secondary/80'
                      }`}
                    >
                      <div className="font-medium">{conv.username}</div>
                      {conv.unreadCount > 0 && (
                        <span className="text-xs bg-red-500 text-white rounded-full px-2 py-1">
                          {conv.unreadCount} پیام جدید
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Messages */}
          <div className="lg:col-span-2">
            {selectedUser ? (
              <Card className="card-elegant h-[600px] flex flex-col">
                <CardContent className="p-4 flex-1 flex flex-col">
                  <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                    {messages.map((msg) => (
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
                    ))}
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
            ) : (
              <Card className="card-elegant h-[600px] flex items-center justify-center">
                <CardContent>
                  <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground text-center">
                    یک گفتگو را انتخاب کنید
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

