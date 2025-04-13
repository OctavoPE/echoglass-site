import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TeamPage() {
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
            <Link href="/team" className="transition-colors hover:text-foreground/80 text-foreground">
              Team
            </Link>
            <Link href="/tutorial" className="transition-colors hover:text-foreground/80">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  CS students, driven by passion.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12 space-y-16">
              {/* Team Member 1 */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="p-6 md:p-8">
                      <h2 className="text-2xl font-bold mb-2">Jeanmarco</h2>
                      <p className="text-sm text-muted-foreground mb-4">Completing a B.S. in Software Development</p>
                      <div className="prose prose-sm max-w-none text-muted-foreground">
                        <p>
                          I am a senior Software Development student specializing in Python and Desktop Applications. I also love working with LLM systems and automation tools to make the mundane and repetitive, efficient and easy. I love to read, play video games, and make functional applications while experimenting with home Internet of Things. I'm Bilingual in English and Spanish, and I love my two dogs. 
                        </p>
                        <p>
                          For the EchoGlass project, I took on the roles of initializing the MagicMirror setup onto the Raspberry Pi hardware, and expanding its functionalities greatly to make it fulfill our needs. I’ve worked on the on-device wake ward detection engine and implementing OpenAI’s 4o-mini model to act as an intent classifier that could properly direct requests, questions, and messages between AI systems and modules by using a centralized controller.  This approach enabled EchoGlass to be talkative and responsive to user queries relating to modules they care about, while also tapping into the Large Language Model’s swath of knowledge to answer questions.
                        </p>
                      </div>
                      <div className="flex items-center mt-6 space-x-4">
                        <Button variant="outline" size="icon" asChild>
                          <Link href="mailto:Jallain99@outlook.com">
                            <Mail className="h-4 w-4" />
                            <span className="sr-only">Email</span>
                          </Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                          <Link href="https://linkedin.com/in/jeanmarco-allain" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                          </Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                          <Link href="https://github.com/OctavoPE" target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="bg-muted h-full min-h-[300px] relative">
                      <Image
                        src="/placeholder.svg?height=400&width=400&text=Team Member 1"
                        alt="Team Member 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Team Member 2 */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="bg-muted h-full min-h-[300px] relative order-last md:order-first">
                      <Image
                        src="/placeholder.svg?height=400&width=400&text=Team Member 2"
                        alt="Team Member 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <h2 className="text-2xl font-bold mb-2">Team Member 2</h2>
                      <p className="text-sm text-muted-foreground mb-4">Hardware Engineer / System Architect</p>
                      <div className="prose prose-sm max-w-none text-muted-foreground">
                        <p>
                          I'm completing my degree in Electrical Engineering with a focus on embedded systems and IoT
                          devices. My academic background includes extensive work with microcontrollers, sensors, and
                          hardware integration.
                        </p>
                        <p>
                          For EchoGlass, I designed the hardware architecture and integrated the various components into
                          a cohesive system. I'm particularly interested in energy-efficient computing and sensor fusion
                          technologies. Previously, I've worked on several robotics projects and smart home prototypes.
                        </p>
                        <p>
                          Outside of engineering, I enjoy building custom electronics, playing chess, and restoring
                          vintage computers. After graduation, I hope to work in product development for consumer IoT
                          devices.
                        </p>
                      </div>
                      <div className="flex items-center mt-6 space-x-4">
                        <Button variant="outline" size="icon" asChild>
                          <Link href="mailto:team2@echoglass.edu">
                            <Mail className="h-4 w-4" />
                            <span className="sr-only">Email</span>
                          </Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                          </Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Team Member 3 */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="p-6 md:p-8">
                      <h2 className="text-2xl font-bold mb-2">Team Member 3</h2>
                      <p className="text-sm text-muted-foreground mb-4">Backend Developer / Cloud Infrastructure</p>
                      <div className="prose prose-sm max-w-none text-muted-foreground">
                        <p>
                          I am pursuing a dual degree in Computer Science and Data Science, with a focus on cloud
                          computing and distributed systems. My academic research has centered on efficient data
                          processing for IoT applications.
                        </p>
                        <p>
                          For the EchoGlass project, I developed the cloud infrastructure and backend services that
                          power the mirror's smart features. I'm particularly interested in edge computing, real-time
                          data processing, and privacy-preserving technologies. I've previously contributed to
                          open-source projects in the IoT space.
                        </p>
                        <p>
                          In my free time, I enjoy competitive programming, playing basketball, and experimenting with
                          home automation. After graduation, I plan to pursue a career in cloud architecture for
                          connected devices.
                        </p>
                      </div>
                      <div className="flex items-center mt-6 space-x-4">
                        <Button variant="outline" size="icon" asChild>
                          <Link href="mailto:team3@echoglass.edu">
                            <Mail className="h-4 w-4" />
                            <span className="sr-only">Email</span>
                          </Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                          </Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="bg-muted h-full min-h-[300px] relative">
                      <Image
                        src="/placeholder.svg?height=400&width=400&text=Team Member 3"
                        alt="Team Member 3"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
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
