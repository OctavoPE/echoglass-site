import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Cloud, Layout, MessageSquare, Mic, Settings, Thermometer, Blocks, MonitorPlay } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">EchoGlass</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium flex-1 justify-end">
            <Link href="/" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="/team" className="transition-colors hover:text-foreground/80">
              Team
            </Link>
            <Link href="/tutorial" className="transition-colors hover:text-foreground/80">
              Tutorial
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">EchoGlass</h1>
                  <p className="text-xl text-muted-foreground">The smart mirror that transforms your daily routine</p>
                </div>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  EchoGlass is a smart mirror that transforms your morning routine into a personalized, hands-free experience. Stay informed with real-time updates on weather, traffic, appointments, and more—right from your reflection.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[300px] sm:h-[450px] sm:w-[400px] lg:h-[550px] lg:w-[500px] border-8 border-gray-800 rounded-lg shadow-lg overflow-hidden bg-black">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/40 z-10"></div>
                  <div className="absolute top-8 right-8 text-white z-20 flex flex-col items-end">
                    <Clock className="h-8 w-8 mb-2" />
                    <div className="text-2xl font-bold">10:30 AM</div>
                    <div className="text-sm">Monday, April 11</div>
                  </div>
                  <div className="absolute bottom-8 left-8 text-white z-20">
                    <div className="flex items-center mb-4">
                      <Thermometer className="h-6 w-6 mr-2" />
                      <span className="text-xl">72°F</span>
                    </div>
                    <div className="flex items-center">
                      <Cloud className="h-6 w-6 mr-2" />
                      <span className="text-xl">Partly Cloudy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Problem We Solve</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Stop reaching for your phone in the morning. Let us get you the information you need.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <p className="text-muted-foreground">
                  Mornings are busy. The moment you pick up your phone, your focus starts to scatter. What begins as a quick check for the weather or your calendar can quickly spiral into emails, messages, social media, and endless notifications. Instead of starting your day with clarity, you end up scrolling, distracted, and running behind.
                </p>
                <p className="text-muted-foreground">
                  Built ontop of the MagicMirror framework, EchoGlass keeps your phone out of your hands. By turning your mirror into a smart, voice-enabled display, you get real-time updates on the weather, traffic, calendar events, and more, while you get ready. EchoGlass delivers a personalized digest - a quick and streamlined summary of your selected modules like weather, commute updates, sports scores, and more. It's designed to get you up and running fast. All without lifting a finger.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/echoglass-home.jpg"
                  alt="The EchoGlass mirror screen. Showing weather, calendar, the time and rotating news headlines."
                  width={600}
                  height={400}
                  className="rounded-lg border shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technologies</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  What's powering the EchoGlass experience?
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Hardware</h3>
                <ul className="space-y-2 text-center text-muted-foreground">
                  <li>Raspberry Pi 4</li>
                  <li>Infrared Touch Frame</li>
                  <li>Mirror Film & Acrylic</li>
                </ul>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Layout className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Software</h3>
                <ul className="space-y-2 text-center text-muted-foreground">
                  <li>MagicMirror</li>
                  <li>Electron Framework</li>
                  <li>PicoVoice</li>
                </ul>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Blocks className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Systems</h3>
                <ul className="space-y-2 text-center text-muted-foreground">
                  <li>OpenAI LLM Integration</li>
                  <li>Intent Classification</li>
                  <li>Cross Module Communication</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover what EchoGlass can do
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Mic className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Voice Control</h3>
                  <p className="text-muted-foreground">
                    Control your mirror with simple voice commands for a hands-free experience
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <MonitorPlay className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Screen Cast</h3>
                  <p className="text-muted-foreground">
                    Cast media from your device to your mirror. Think tutorials or live news.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Smart Assistant</h3>
                  <p className="text-muted-foreground">
                    Get answers to questions, glance at your calendar, and control your IoT.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            EchoGlass - The University of Utah
          </p>
        </div>
      </footer>
    </div>
  )
}
