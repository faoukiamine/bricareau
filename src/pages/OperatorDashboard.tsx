import React, { useState } from "react";
import { MessageSquare, Users, Settings, Search, Send, User, BadgeCheck, Clock, CheckCircle2, MoreVertical, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ChatSession {
    id: string;
    name: string;
    lastMessage: string;
    time: string;
    unread: number;
    status: "online" | "offline" | "away";
    avatar?: string;
}

interface Message {
    id: string;
    sender: "operator" | "client";
    text: string;
    time: string;
}

const OperatorDashboard = () => {
    const [activeSession, setActiveSession] = useState<string | null>("1");
    const [sessions] = useState<ChatSession[]>([
        { id: "1", name: "Jean Dupont", lastMessage: "Quel est le prix pour un adoucisseur ?", time: "2 min", unread: 2, status: "online" },
        { id: "2", name: "Marie Lavoie", lastMessage: "Merci pour les informations.", time: "15 min", unread: 0, status: "away" },
        { id: "3", name: "Anonyme #4521", lastMessage: "J'aimerais tester mon eau.", time: "1h", unread: 0, status: "offline" },
        { id: "4", name: "Luc Tremblay", lastMessage: "Le système UV ne fonctionne plus.", time: "3h", unread: 0, status: "offline" },
    ]);

    const [messages, setMessages] = useState<Message[]>([
        { id: "1", sender: "client", text: "Bonjour, j'habite à Laval et mon eau est très calcaire.", time: "10:30" },
        { id: "2", sender: "operator", text: "Bonjour Jean ! Nous avons plusieurs solutions pour Laval. Souhaitez-vous une analyse d'eau gratuite ?", time: "10:32" },
        { id: "3", sender: "client", text: "Oui, ce serait parfait. Quel est le prix pour un adoucisseur résidentiel standard ?", time: "10:35" },
    ]);

    const [inputValue, setInputValue] = useState("");

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            sender: "operator",
            text: inputValue,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages([...messages, newMessage]);
        setInputValue("");
    };

    const currentSession = sessions.find(s => s.id === activeSession);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Header />

            <main className="flex-grow pt-[104px] flex">
                <div className="container mx-auto px-4 py-8 flex gap-6 h-[calc(100vh-104px)]">

                    {/* Sidebar: Chat List */}
                    <div className="w-full md:w-[350px] bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col overflow-hidden">
                        <div className="p-6 border-b border-gray-50">
                            <div className="flex items-center justify-between mb-6">
                                <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                    <MessageSquare className="text-blue-600" />
                                    Conversations
                                </h1>
                                <Button variant="ghost" size="icon" className="rounded-xl">
                                    <Settings className="w-5 h-5 text-gray-400" />
                                </Button>
                            </div>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <Input
                                    placeholder="Rechercher un client..."
                                    className="pl-10 h-11 bg-gray-50 border-none rounded-xl"
                                />
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto">
                            {sessions.map((session) => (
                                <button
                                    key={session.id}
                                    onClick={() => setActiveSession(session.id)}
                                    className={cn(
                                        "w-full p-4 flex items-center gap-4 transition-all hover:bg-slate-50 border-l-4",
                                        activeSession === session.id ? "bg-blue-50/50 border-blue-600" : "border-transparent"
                                    )}
                                >
                                    <div className="relative shrink-0">
                                        <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
                                            <User className="w-6 h-6 text-slate-400" />
                                        </div>
                                        <div className={cn(
                                            "absolute -bottom-1 -right-1 w-4 h-4 border-2 border-white rounded-full",
                                            session.status === "online" ? "bg-green-500" :
                                                session.status === "away" ? "bg-amber-500" : "bg-gray-300"
                                        )} />
                                    </div>
                                    <div className="flex-1 text-left overflow-hidden">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold text-gray-900 truncate">{session.name}</span>
                                            <span className="text-[10px] text-gray-400 uppercase font-bold">{session.time}</span>
                                        </div>
                                        <p className="text-sm text-gray-500 truncate">{session.lastMessage}</p>
                                    </div>
                                    {session.unread > 0 && (
                                        <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-[10px] text-white font-bold shrink-0">
                                            {session.unread}
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Content: Active Chat */}
                    <div className="flex-1 bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col overflow-hidden">
                        {activeSession ? (
                            <>
                                {/* Chat Header */}
                                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                                            <User className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h2 className="text-lg text-gray-900 flex items-center gap-2">
                                                {currentSession?.name}
                                                <BadgeCheck className="w-4 h-4 text-blue-500" />
                                            </h2>
                                            <p className="text-xs text-green-500 font-bold flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                                Client en ligne sur : Filtre Toute la Maison
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="outline" className="rounded-xl gap-2 text-blue-600 border-blue-100 hover:bg-blue-50">
                                            <Phone className="w-4 h-4" /> Appeler
                                        </Button>
                                        <Button variant="ghost" size="icon" className="rounded-xl">
                                            <MoreVertical className="w-5 h-5 text-gray-400" />
                                        </Button>
                                    </div>
                                </div>

                                {/* Messages Area */}
                                <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/30">
                                    <div className="flex justify-center">
                                        <span className="bg-white border border-gray-100 px-4 py-1 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                            Aujourd'hui
                                        </span>
                                    </div>

                                    {messages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={cn(
                                                "flex flex-col max-w-[70%] animate-in fade-in duration-300",
                                                msg.sender === "operator" ? "ml-auto items-end" : "items-start"
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    "p-4 rounded-2xl text-sm shadow-sm leading-snug",
                                                    msg.sender === "operator"
                                                        ? "bg-blue-600 text-white rounded-tr-none"
                                                        : "bg-white text-gray-800 rounded-tl-none border border-gray-100"
                                                )}
                                            >
                                                {msg.text}
                                            </div>
                                            <span className="text-[10px] text-gray-400 mt-1 font-medium italic">
                                                {msg.time} {msg.sender === "operator" && "• Lu"}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Input Area */}
                                <div className="p-6 bg-white border-t border-gray-100">
                                    <form onSubmit={handleSendMessage} className="flex gap-4">
                                        <div className="flex-1 relative">
                                            <Input
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                                placeholder="Répondre à Jean Dupont..."
                                                className="h-14 bg-gray-50 border-none rounded-2xl px-6 text-gray-700 shadow-inner focus:ring-1 focus:ring-blue-500"
                                            />
                                        </div>
                                        <Button type="submit" className="h-14 w-14 rounded-2xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 shrink-0">
                                            <Send className="w-6 h-6" />
                                        </Button>
                                    </form>
                                </div>
                            </>
                        ) : (
                            <div className="flex-1 flex flex-col items-center justify-center text-center p-12">
                                <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                                    <MessageSquare className="w-12 h-12 text-blue-200" />
                                </div>
                                <h2 className="text-gray-900 mb-2">Bienvenue dans l'espace opérateur</h2>
                                <p className="text-gray-500 max-w-sm">
                                    Sélectionnez une conversation dans la liste de gauche pour commencer à clavarder avec un client.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Right Sidebar: Client Info (Desktop Only) */}
                    <div className="hidden lg:flex w-[300px] flex-col gap-6">
                        <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                            <h3 className="text-gray-900 mb-6 flex items-center gap-2">
                                <User className="w-5 h-5 text-blue-600" />
                                Profil Client
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                                        <Mail className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-[10px] text-gray-400 font-bold uppercase">Email</p>
                                        <p className="text-sm font-medium text-gray-900 truncate">j.dupont@email.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                                        <Phone className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase">Téléphone</p>
                                        <p className="text-sm font-medium text-gray-900">(450) 555-0123</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                                        <MapPin className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase">Localisation</p>
                                        <p className="text-sm font-medium text-gray-900">Laval, QC</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-gray-50">
                                <h4 className="text-xs text-gray-900 mb-4 uppercase tracking-wider">Historique des actions</h4>
                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                        <p className="text-xs text-gray-600">A consulté la page Osmose Inverse</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <Clock className="w-4 h-4 text-slate-300 shrink-0" />
                                        <p className="text-xs text-gray-600">Analyse d'eau gratuite demandée il y a 2 jours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#0052ff] rounded-3xl p-6 shadow-xl shadow-blue-200 text-white">
                            <h3 className="mb-4 flex items-center gap-2">
                                <BadgeCheck className="w-5 h-5" />
                                Notes Expert
                            </h3>
                            <p className="text-xs text-blue-100 italic mb-6">
                                "Client potentiel pour un système complet. Intéressé par la filtration du calcaire pour toute la maison."
                            </p>
                            <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-none rounded-xl">
                                Ajouter une note
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default OperatorDashboard;
