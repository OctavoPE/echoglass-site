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
                        src="/jeanmarco.jpg"
                        alt="Photo of Jeanmarco"
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
                        src="/hosoo.jpg"
                        alt="Photo of Hosoo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <h2 className="text-2xl font-bold mb-2">Hosoo</h2>
                      <p className="text-sm text-muted-foreground mb-4">Completing a B.S. in Computer Science with a Fintech Minor</p>
                      <div className="prose prose-sm max-w-none text-muted-foreground">
                        <p>
                        I am a senior Computer Science student at the University of Utah, with a strong focus on artificial intelligence, machine learning, and fintech applications. I enjoy building functional and secure tools that blend AI with everyday life. My work spans full-stack development, API integrations, and deep learning, and I’m especially drawn to problems that require both creative and technical thinking. Outside of school, I enjoy exploring new tech trends, developing personal projects, and refining innovative workflows.
                        </p>
                        <p>
                        For the EchoGlass project, I focused on integrating multiple Google services to enable real-time, voice-activated interactions. I set secure OAuth authentication to connect Google Calendar and Workspace accounts, allowing users to retrieve personalized schedules, tasks, and reminders directly on the smart mirror. I also implemented a real-time commute module using Google Maps APIs, which lets users ask for traffic updates and estimated travel times to frequently visited locations. These integrations were combined with the ChatGPT API to support natural voice queries, enabling a seamless user experience. My contributions ensured that EchoGlass remains responsive, secure, and deeply connected to users’ everyday digital lives.
                        </p>
                      </div>
                      <div className="flex items-center mt-6 space-x-4">
                        <Button variant="outline" size="icon" asChild>
                          <Link href="mailto:michaelhlee00@gmail.com">
                            <Mail className="h-4 w-4" />
                            <span className="sr-only">Email</span>
                          </Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                          <Link href="https://linkedin.com/in/hosoo" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                          </Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                          <Link href="https://github.com/DazzlerByte" target="_blank" rel="noopener noreferrer">
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
                      <h2 className="text-2xl font-bold mb-2">Leonardo</h2>
                      <p className="text-sm text-muted-foreground mb-4">Completing a B.S. in Computer Science</p>
                      <div className="prose prose-sm max-w-none text-muted-foreground">
                        <p>
                        I'm a senior Computer Science student at the University of Utah. My interests and experience include security, deep learning, reinforcement learning, and cyber-physical systems. I'm currently working on projects from each of those areas. I love working in teams that solve complex and challenging problems. 
                        </p>
                        <p>
                        For our project, my responsibility was touch capability via IR frame, having multiple views/pages, and the construction of the physical frame that ties all of the components together. I set up and made sure that the IR frame gave the user the capability to interact with EchoGlass via touch. After listening to user feedback, I implemented the ability to have multiple pages of modules to avoid clutter and have access to more information that is important to the user. Since EchoGlass is a mirror, it needed a home that showed it off in the best way for the user. I constructed the frame to give EchoGlass a sleek look that still allows users to interact with it by touch and voice. EchoGlass has been an amazing project to be part of.
                        </p>
                      </div>
                      <div className="flex items-center mt-6 space-x-4">
                        <Button variant="outline" size="icon" asChild>
                          <Link href="mailto:leoleano00@gmail.com">
                            <Mail className="h-4 w-4" />
                            <span className="sr-only">Email</span>
                          </Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                          <Link href="https://linkedin.com/in/leonardo-leano/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                          </Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                          <Link href="https://github.com/leoleano" target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="bg-muted h-full min-h-[300px] relative">
                      <Image
                        src="/leo.png"
                        alt="Photo of Leonardo"
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
