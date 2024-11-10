import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, MessageSquare, Zap, Clock, Shield } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export default function Home() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle email submission here
        console.log('Email submitted:', email)
        setEmail('')
    }

    return (
        <div className="min-h-screen flex flex-col">
            <header className="container mx-auto px-4 py-6 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <MessageSquare className="h-8 w-8 text-primary" />
                    {/* <span className="text-2xl font-bold">SpeedyAI</span> */}
                    <span className="text-2xl font-bold">LivePrompter AI</span>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#features" className="text-sm hover:text-primary transition-colors">Features</a></li>
                        <li><a href="#demo" className="text-sm hover:text-primary transition-colors">Demo</a></li>
                        <li><a href="#pricing" className="text-sm hover:text-primary transition-colors">Pricing</a></li>
                        <li><a href="/chat" className="text-sm hover:text-primary transition-colors">Chat</a></li>
                    </ul>
                </nav>
            </header>

            <main className="flex-grow">
                <section className="container mx-auto px-4 py-20 text-center flex flex-col items-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                        Lightning-Fast AI Responses
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in animation-delay-200">
                        Experience the power of AI even at incredibly low internet speeds
                    </p>
                    {/* <Button size="lg" className="animate-fade-in animation-delay-400" onClick={() => { return new URL("/chat", "https://") }}> */}
                    {/* <Button size="lg" className="animate-fade-in animation-delay-400" onClick={() => { return new URL("/chat", "https://") }}>
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button> */}
                    <a href='/chat' className=" bg-black text-white flex items-center p-2 px-4 rounded-md max-w-fit animate-fade-in animation-delay-400" >
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </section>

                <section id="features" className="bg-muted py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Why Choose LivePrompter AI?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <FeatureCard
                                icon={<Zap className="h-10 w-10 text-primary" />}
                                title="Lightning Fast"
                                description="Get responses in milliseconds, not seconds."
                            />
                            <FeatureCard
                                icon={<Clock className="h-10 w-10 text-primary" />}
                                title="24/7 Availability"
                                description="Our AI is always ready to assist, day or night."
                            />
                            <FeatureCard
                                icon={<Shield className="h-10 w-10 text-primary" />}
                                title="Secure & Private"
                                description="Your conversations are encrypted and never stored."
                            />
                        </div>
                    </div>
                </section>

                <section id="demo" className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">See LivePrompter AI in Action</h2>
                        <div className="bg-muted p-4 rounded-lg shadow-lg max-w-2xl mx-auto">
                            <div className="bg-background rounded-lg p-4 space-y-4">
                                <ChatMessage user="You" message="How quickly can you respond?" />
                                <ChatMessage user="AI" message="I can respond almost instantly! My low-latency design allows me to process and generate responses in milliseconds." />
                                <ChatMessage user="You" message="That's impressive! How do you achieve such speed?" />
                                <ChatMessage user="AI" message="Through optimized algorithms, efficient hardware utilization, and advanced caching techniques, I'm able to provide near-instantaneous responses while maintaining high-quality output." />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-primary text-primary-foreground py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to Experience Lightning-Fast AI?</h2>
                        <p className="text-xl mb-8">Sign up for our beta and be among the first to try LivePrompter AI</p>
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="max-w-xs bg-primary-foreground text-primary"
                                required
                            />
                            <Button type="submit" variant="secondary">
                                Join the Waitlist
                            </Button>
                        </form>
                    </div>
                </section>
            </main>

            <footer className="bg-muted py-6">
                <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                    © 2024 LivePrompter AI. All rights reserved.
                </div>
            </footer>
            <Outlet />
        </div>
    )
}

function FeatureCard({ icon, title, description }: { icon: JSX.Element, title: string, description: string }) {
    return (
        <div className="bg-background p-6 rounded-lg shadow-md text-center">
            {/* <Icon className='className="mb-4 inline-block"' /> */}
            <div className="mb-4 inline-block">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    )
}

function ChatMessage({ user, message }: { user: string, message: string }) {
    return (
        <div className={`flex ${user === 'You' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg ${user === 'You' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                <p className="font-semibold mb-1">{user}</p>
                <p>{message}</p>
            </div>
        </div>
    )
}