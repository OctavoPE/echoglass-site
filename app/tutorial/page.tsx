import Link from "next/link"
import { Smartphone, Layout, Mic } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TutorialPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
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
            <Link href="/tutorial" className="transition-colors hover:text-foreground/80 text-foreground">
              Tutorial
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            {/* Introduction */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  EchoGlass Interaction Tutorials
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Learn how to interact with your EchoGlass smart mirror using voice, touch, and casting.
                </p>
              </div>
            </div>

            {/* Tutorial Sections */}
            <div className="mx-auto max-w-5xl py-12 space-y-16">
              
              {/* Voice Tutorial */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold flex items-center">
                  <Mic className="mr-2 h-6 w-6 text-primary" />
                  Voice Commands
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <video
                      className="w-full rounded-lg border"
                      controls
                      src="/tut_voice.mp4"
                      aria-label="Tutorial video for voice commands with EchoGlass"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Controlling with Voice</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Use voice commands to interact with EchoGlass hands-free. Activate it with "Hey EchoGlass" and
                        try these commands:
                      </p>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                        <li>"Hey EchoGlass, show me the weather."</li>
                        <li>"Hey EchoGlass, what's on my calendar?"</li>
                        <li>"Hey EchoGlass, How long is my commute?"</li>
                        <li>"Hey EchoGlass, What continent is France in?"</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
              {/* Casting Tutorial */}
                <div className="space-y-6">
                <h2 className="text-2xl font-bold flex items-center">
                  <Smartphone className="mr-2 h-6 w-6 text-primary" />
                  Casting to EchoGlass
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <video
                      className="w-full rounded-lg border"
                      controls
                      src="/tut_cast.mp4"
                      aria-label="Tutorial video for casting to EchoGlass"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <Card>
                    <CardHeader>
                      <CardTitle>How to Cast Media</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        When on the same network, you can effortlessly cast media from your other devices, such as a smartphone, tablet, or computer, to EchoGlass.:
                      </p>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                        <li>Ensure your device and EchoGlass are on the same Wi-Fi network.</li>
                        <li>Open a compatible app (e.g., YouTube, Netflix) on your device.</li>
                        <li>Tap the cast icon and select your EchoGlass from the list.</li>
                        <li>Control playback directly from your device.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
              {/* Touch Tutorial */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold flex items-center">
                  <Layout className="mr-2 h-6 w-6 text-primary" />
                  Interacting with Touch
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <video
                      className="w-full rounded-lg border"
                      controls
                      src="/tut_touch.mp4"
                      aria-label="Tutorial video for touch interaction with EchoGlass"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Using the Touch Interface</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        The EchoGlass touch interface allows you to navigate the smart mirror by
                        pressing on the page indicators:
                      </p>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                        <li>Tap a page indicator to immediately jump to it.</li>
                        <li>If casting media, you can pause it by touching the screen.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

            </div>

            {/* Support Links */}
            <div className="mx-auto max-w-5xl mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Want to see more? Come check us out on Demo day, we're excited to show you our passion project.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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