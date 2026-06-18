import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface Message {
    id: string;
    type: "bot" | "user";
    text: string;
    options?: string[];
}

const ChatWidget = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            type: "bot",
            text: "Bonjour ! Je suis l'assistant Bricareau. Comment puis-je vous aider aujourd'hui ?",
            options: ["Analyse d'eau gratuite", "Nos produits", "Parler à un expert", "Urgence technique"] },
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = (text: string) => {
        if (!text.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            type: "user",
            text: text };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");

        // Simulate bot thinking
        setTimeout(() => {
            const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                type: "bot",
                text: "Merci pour votre message. Un de nos experts en traitement d'eau va vous répondre dans quelques instants. En attendant, saviez-vous que nous offrons des analyses d'eau gratuites ?" };

            if (text === "Analyse d'eau gratuite") {
                navigate("/Analyses-et-Tests-d-eau");
                setIsOpen(false);
                return;
            }

            if (text === "Nos produits") {
                navigate("/");
                setIsOpen(false);
                return;
            }

            if (text === "Urgence technique") {
                botResponse.text = "Pour une urgence technique, nous vous recommandons de nous appeler directement au 1-855-264-9328. Nos techniciens sont disponibles 24/7 pour les situations critiques.";
            } else if (text.toLowerCase().includes("prix") || text.toLowerCase().includes("combien")) {
                botResponse.text = "Nos prix varient selon vos besoins spécifiques et la qualité de votre eau. Souhaitez-vous planifier une consultation gratuite pour obtenir un devis précis ?";
            } else if (text.toLowerCase().includes("test") || text.toLowerCase().includes("analyse")) {
                botResponse.text = "C'est une excellente idée ! L'analyse d'eau est la première étape. Vous pouvez la commander directement sur notre site ou nous appeler au 1-855-264-9328.";
            }

            setMessages((prev) => [...prev, botResponse]);
        }, 1000);
    };

    const handleOptionClick = (option: string) => {
        handleSend(option);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
                    {/* Header */}
                    <div className="bg-[#0052ff] p-4 flex items-center justify-between text-white">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <User className="w-6 h-6" />
                                </div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-primary rounded-full" />
                            </div>
                            <div>
                                <h3 className="text-sm">Équipe Bricareau</h3>
                                <p className="text-[10px] text-blue-100 opacity-80">En ligne • Répond en quelques minutes</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={cn(
                                    "flex flex-col max-w-[85%] animate-in fade-in duration-300",
                                    msg.type === "user" ? "ml-auto items-end" : "mr-auto items-start"
                                )}
                            >
                                <div
                                    className={cn(
                                        "p-3 rounded-2xl text-sm shadow-sm",
                                        msg.type === "user"
                                            ? "bg-[#0052ff] text-white rounded-tr-none"
                                            : "bg-white text-gray-800 rounded-tl-none border border-gray-100"
                                    )}
                                >
                                    {msg.text}
                                </div>

                                {msg.options && (
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {msg.options.map((opt) => (
                                            <button
                                                key={opt}
                                                onClick={() => handleOptionClick(opt)}
                                                className="text-xs bg-white border border-blue-200 text-blue-600 px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors shadow-sm"
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-gray-100">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSend(inputValue);
                            }}
                            className="flex gap-2"
                        >
                            <Input
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Écrivez votre message..."
                                className="bg-gray-50 border-none rounded-xl focus:ring-1 focus:ring-blue-500"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                className="bg-[#0052ff] hover:bg-[#0052ff]/90 shrink-0 rounded-xl"
                            >
                                <Send className="w-4 h-4" />
                            </Button>
                        </form>
                        <p className="text-[10px] text-gray-400 text-center mt-2 italic">
                            Propulsé par Bricareau Support
                        </p>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group",
                    isOpen ? "bg-white text-gray-400 rotate-90 scale-90" : "bg-[#0052ff] text-white hover:scale-105"
                )}
            >
                {isOpen ? (
                    <X className="w-8 h-8" />
                ) : (
                    <div className="relative">
                        <MessageCircle className="w-8 h-8" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-[#0052ff] rounded-full animate-pulse" />
                    </div>
                )}
            </button>

            {/* Tooltip (only when closed) */}
            {!isOpen && (
                <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-xl shadow-xl border border-gray-100 text-sm font-semibold text-gray-900 whitespace-nowrap hidden md:block animate-in fade-in slide-in-from-right-4">
                    Besoin d'aide ? <span className="text-[#0052ff]">Clavardez avec nous</span>
                </div>
            )}
        </div>
    );
};

export default ChatWidget;
