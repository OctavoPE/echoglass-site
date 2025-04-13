import Link from "next/link"
import { ArrowRight, CheckCircle2, Clock, Cloud, Cog, Layout, Mic, Power, Smartphone, Thermometer } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TutorialPage() {
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
            <Link href="/tutorial" className="transition-colors hover:text-foreground/80 text-foreground">
              Tutorial
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">User Tutorial</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Learn how to set up and use your EchoGlass smart mirror
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12">
              <Tabs defaultValue="setup" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="setup">Initial Setup</TabsTrigger>
                  <TabsTrigger value="daily">Daily Use</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced Features</TabsTrigger>
                </TabsList>

                {/* Initial Setup Tab */}
                <TabsContent value="setup" className="mt-6 space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Getting Started with EchoGlass</h2>
                    <p className="text-muted-foreground">
                      Follow these steps to set up your EchoGlass smart mirror for the first time.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-lg">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground mr-2">
                            1
                          </span>
                          Hardware Assembly
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Mount your display and two-way mirror in the frame. Connect the Raspberry Pi, power supply,
                          and peripherals according to the included hardware guide.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-lg">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground mr-2">
                            2
                          </span>
                          Software Installation
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Flash the EchoGlass system image to your microSD card using the Raspberry Pi Imager or similar
                          tool. Insert the card into your Raspberry Pi.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-lg">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground mr-2">
                            3
                          </span>
                          Power On
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Connect the power supply to your EchoGlass. The system will boot automatically and display the
                          setup wizard on screen.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-lg">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground mr-2">
                            4
                          </span>
                          Wi-Fi Connection
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Follow the on-screen instructions to connect your EchoGlass to your home Wi-Fi network. You
                          can use the mobile app to simplify this process.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-lg">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground mr-2">
                            5
                          </span>
                          Account Creation
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Create your EchoGlass account and link any third-party services you wish to use, such as
                          calendar, weather, or smart home platforms.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center text-lg">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground mr-2">
                            6
                          </span>
                          Widget Configuration
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Use the mobile app or on-screen controls to select and arrange the widgets you want displayed
                          on your EchoGlass.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="rounded-lg border p-6">
                    <h3 className="text-lg font-medium mb-4">Setup Troubleshooting</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          If your mirror doesn't power on, check all power connections and ensure the outlet is working.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          For Wi-Fi connection issues, try moving your mirror closer to your router or use an Ethernet
                          connection.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          If the display appears but software doesn't load, try re-flashing the system image to your
                          microSD card.
                        </span>
                      </li>
                    </ul>
                  </div>
                </TabsContent>

                {/* Daily Use Tab */}
                <TabsContent value="daily" className="mt-6 space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Using Your EchoGlass Daily</h2>
                    <p className="text-muted-foreground">
                      Learn how to interact with your smart mirror and make the most of its features.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Mic className="mr-2 h-5 w-5" />
                          Voice Commands
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Activate your mirror by saying "Hey Glass" followed by your command. Here are some examples:
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>"Hey Glass, show me the weather forecast"</li>
                          <li>"Hey Glass, what's on my calendar today?"</li>
                          <li>"Hey Glass, turn on the living room lights"</li>
                          <li>"Hey Glass, play my morning playlist"</li>
                          <li>"Hey Glass, set a timer for 10 minutes"</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Layout className="mr-2 h-5 w-5" />
                          Widget Interaction
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Your EchoGlass displays widgets with useful information. Here's how to interact with them:
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>Wave your hand in front of the mirror to activate gesture controls</li>
                          <li>Swipe left or right to navigate between widget pages</li>
                          <li>Use voice commands to expand widgets for more information</li>
                          <li>Say "Hey Glass, hide widgets" when you want a normal mirror</li>
                          <li>Use the mobile app to rearrange or customize widgets</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="md:col-span-2">
                      <CardHeader>
                        <CardTitle>Common Daily Features</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4 md:grid-cols-3">
                          <div className="flex flex-col items-center text-center p-4 rounded-lg border">
                            <Clock className="h-8 w-8 mb-2 text-primary" />
                            <h3 className="font-medium mb-1">Time & Calendar</h3>
                            <p className="text-xs text-muted-foreground">
                              View the time, date, and upcoming calendar events at a glance.
                            </p>
                          </div>

                          <div className="flex flex-col items-center text-center p-4 rounded-lg border">
                            <Thermometer className="h-8 w-8 mb-2 text-primary" />
                            <h3 className="font-medium mb-1">Weather</h3>
                            <p className="text-xs text-muted-foreground">
                              Check current conditions and forecasts for your location.
                            </p>
                          </div>

                          <div className="flex flex-col items-center text-center p-4 rounded-lg border">
                            <Smartphone className="h-8 w-8 mb-2 text-primary" />
                            <h3 className="font-medium mb-1">Notifications</h3>
                            <p className="text-xs text-muted-foreground">
                              See messages and alerts from your connected devices.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="rounded-lg border overflow-hidden">
                    <div className="bg-muted px-6 py-4">
                      <h3 className="text-lg font-medium">Quick Reference: Voice Commands</h3>
                    </div>
                    <div className="p-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h4 className="font-medium mb-2">Information</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>"Hey Glass, what's the weather like?"</li>
                            <li>"Hey Glass, what's on my calendar?"</li>
                            <li>"Hey Glass, what's the time?"</li>
                            <li>"Hey Glass, show me the news"</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Smart Home</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>"Hey Glass, turn on/off [device]"</li>
                            <li>"Hey Glass, set thermostat to 72 degrees"</li>
                            <li>"Hey Glass, lock the front door"</li>
                            <li>"Hey Glass, show me the front door camera"</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Advanced Features Tab */}
                <TabsContent value="advanced" className="mt-6 space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Advanced Features & Customization</h2>
                    <p className="text-muted-foreground">
                      Discover how to customize your EchoGlass and use its more advanced capabilities.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Cog className="mr-2 h-5 w-5" />
                          Custom Widgets
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Create your own custom widgets using the EchoGlass Developer Portal:
                        </p>
                        <ol className="space-y-2 text-sm text-muted-foreground list-decimal pl-5">
                          <li>Log in to the Developer Portal at developer.echoglass.edu</li>
                          <li>Select "Create New Widget" from the dashboard</li>
                          <li>Use our widget templates or start from scratch with HTML/CSS/JavaScript</li>
                          <li>Test your widget in the simulator</li>
                          <li>Deploy to your EchoGlass when ready</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Cloud className="mr-2 h-5 w-5" />
                          Third-Party Integrations
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          EchoGlass works with many popular services and smart home platforms:
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>
                            <strong>Smart Home:</strong> HomeKit, Google Home, Alexa, SmartThings
                          </li>
                          <li>
                            <strong>Calendar:</strong> Google Calendar, Outlook, Apple Calendar
                          </li>
                          <li>
                            <strong>Music:</strong> Spotify, Apple Music, YouTube Music
                          </li>
                          <li>
                            <strong>Productivity:</strong> Todoist, Trello, Google Tasks
                          </li>
                          <li>
                            <strong>News:</strong> AP, Reuters, BBC, customizable RSS feeds
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="md:col-span-2">
                      <CardHeader>
                        <CardTitle>Power User Settings</CardTitle>
                        <CardDescription>Access these settings through the mobile app or web portal</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4 md:grid-cols-3">
                          <div className="space-y-2">
                            <h3 className="font-medium">Display Settings</h3>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              <li>Adjust brightness based on ambient light</li>
                              <li>Set sleep schedule for display</li>
                              <li>Configure motion activation sensitivity</li>
                              <li>Customize widget layout grid</li>
                            </ul>
                          </div>

                          <div className="space-y-2">
                            <h3 className="font-medium">Voice & Privacy</h3>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              <li>Adjust microphone sensitivity</li>
                              <li>Manage voice recognition profiles</li>
                              <li>Configure privacy modes and data retention</li>
                              <li>Set up voice authentication for sensitive actions</li>
                            </ul>
                          </div>

                          <div className="space-y-2">
                            <h3 className="font-medium">System</h3>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              <li>Schedule automatic updates</li>
                              <li>Configure network settings</li>
                              <li>Set up multi-user profiles</li>
                              <li>Access developer mode</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="rounded-lg border p-6">
                    <div className="flex items-center mb-4">
                      <Power className="h-5 w-5 mr-2 text-primary" />
                      <h3 className="text-lg font-medium">Advanced Tips & Tricks</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm text-muted-foreground">
                          <strong>Custom Wake Word:</strong> Change "Hey Glass" to a custom phrase in the Voice Settings
                          menu.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm text-muted-foreground">
                          <strong>Routines:</strong> Create morning and evening routines that trigger multiple actions
                          with a single command.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm text-muted-foreground">
                          <strong>API Access:</strong> Use our REST API to integrate EchoGlass with your own
                          applications and services.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm text-muted-foreground">
                          <strong>SSH Access:</strong> Enable developer mode to access your EchoGlass via SSH for
                          advanced customization.
                        </span>
                      </li>
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="mx-auto max-w-5xl mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Need more help? Check out our comprehensive documentation or contact our support team.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="#" className="text-sm font-medium hover:underline">
                  Full Documentation
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline">
                  Video Tutorials
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline">
                  Contact Support
                </Link>
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
