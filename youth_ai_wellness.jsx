import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function YouthAIWellnessChatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "🌱 Hi! I’m your AI wellness companion. How are you feeling today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: "user", text: input }];

    // Simple rule-based responses (placeholder for real AI integration)
    let botReply = "I hear you. Tell me more.";
    if (input.toLowerCase().includes("sad")) botReply = "💙 I’m sorry you’re feeling sad. Do you want to try a calming breathing exercise?";
    if (input.toLowerCase().includes("happy")) botReply = "✨ That’s wonderful! What made you feel happy today?";
    if (input.toLowerCase().includes("stress")) botReply = "😌 Stress is tough. Can I suggest a quick mindfulness tip?";

    setMessages([...newMessages, { sender: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white text-gray-800">
      <header className="text-center py-6 px-4 border-b border-blue-100">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-blue-700"
        >
          Youth Wellness Chatbot
        </motion.h1>
        <p className="text-gray-600">An empathetic AI companion for mental wellness</p>
      </header>

      <main className="flex-grow p-6 max-w-2xl mx-auto w-full">
        <Card className="shadow-lg rounded-2xl h-[70vh] flex flex-col">
          <CardContent className="flex flex-col justify-between h-full p-4">
            <div className="overflow-y-auto space-y-3 mb-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-[70%] text-sm ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-grow px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <Button onClick={handleSend}>Send</Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="text-center py-4 bg-blue-50">
        <p className="text-gray-600 text-sm">Built with 💙 for youth empowerment</p>
      </footer>
    </div>
  );
}
