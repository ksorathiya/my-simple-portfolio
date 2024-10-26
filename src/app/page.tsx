"use client";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Timeline } from "@/components/ui/timeline";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PulsatingButton from "@/components/magicui/pulsating-button";
import { Button } from "@/components/ui/button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import TextReveal from "@/components/magicui/text-reveal";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
import Lottie from "lottie-react";
import rocket from "/public/lotties/rocket.json";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 self-center space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold inline-block tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
                // animateByCharacter={true}
                wavingHand={true}
              />

              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <Markdown
                  rehypePlugins={[rehypeRaw]}
                  className="pt-4 py-8 prose-stone text-pretty font-sans text-xl dark:prose-invert max-w-[600px] md:text-xl"
                >
                  {DATA.designation}
                </Markdown>
                <div className="flex gap-4">
                  <Link target="_blank" href="https://cal.com/kartik-sorathiya">
                    <PulsatingButton>{"Get in touch"}</PulsatingButton>
                  </Link>
                  <Link
                    target="_blank"
                    href="https://docs.google.com/document/d/1T7Xl2qQHVSGoRYwqaGK23bnGhYISsMAO/edit?usp=sharing&ouid=113641347303871215868&rtpof=true&sd=true"
                  >
                    <Button variant="link">
                      Get my resume{" "}
                      <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </BlurFade>
            </div>

            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <img
                  className="size-full"
                  alt={DATA.name}
                  src={DATA.avatarUrl}
                />
              </BlurFade>
            </div>
          </div>
        </div>
      </section>
      <section id="description">
        <div className="z-10 flex min-h-[100dvh] items-center justify-center bg-white dark:bg-black">
          <TextReveal text={DATA.description} />
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold py-4">About Me</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown
            rehypePlugins={[rehypeRaw]}
            className="prose-stone max-w-full text-pretty font-sans text-md dark:prose-invert"
          >
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold py-4">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold py-4">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section> */}
      {/* <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section> */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm with a connection request and a
                direct question on{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-900 dark:text-blue-500 hover:underline"
                >
                  LinkedIn
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="timeline" className="max-w-4xl m-auto">
        <div className="center inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm mb-10">
          STORY SO FAR
        </div>

        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {DATA.timeline.map((entry, index) => {
            return (
              <li key={index} className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {entry.timestamp}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <Markdown>{entry.title}</Markdown>
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  <Markdown>{entry.description}</Markdown>
                </p>
                {entry.link ? (
                  <a
                    href={entry.link}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    Learn more{" "}
                    <svg
                      className="w-3 h-3 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ol>
      </section>
      <section id="rocket">
        <Lottie
          animationData={rocket}
          className="flex justify-center items-center"
          loop={true}
        />
      </section>
      <section id="skills-and-stickers">
        <section className="relative">
          <div className="w-full py-12 mx-auto max-w-7xl lg:py-12 space-y-32">
            {DATA.skillsections.map((section, index) => {
              return (
                <div
                  key={index}
                  className="list-none grid grid-cols-1 lg:grid-cols-2 gap-2 justify-center items-center lg:gap-8"
                >
                  <div>
                    <div>
                      <span className="bg-yellow border border-white/50 backdrop-blur-2xl rounded-full py-2 w-auto">
                        <span className="center inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                          {section.title}
                        </span>
                      </span>
                      <p className="text-4xl mt-8 lg:text-6xl font-extrabold tracking-tight text-black">
                        {section.heading}
                      </p>
                    </div>
                    <p className="text-lg text-slate-700 max-w-xl mt-8 lg:mx-auto">
                      {section.description}
                    </p>
                    {/* <div className="flex-col flex gap-3 mt-10 sm:flex-row">
                      {section.ctaButtons?.map((button) => {
                        return (
                          <a
                            className="items-center text-white focus:outline-none inline-flex justify-center hover:text-accent-500 duration-200 focus-visible:outline-black focus-visible:ring-black font-medium lg:w-auto px-6 py-3 rounded-xl text-center w-full bg-accent-500 hover:bg-accent-100"
                            href="/"
                          >
                            <img src={button.icon} className="h-6 w-6" />
                            <span className="ml-4 flex items-start flex-col leading-none">
                              <span className="text-xs mb-1">
                                {button.head}
                              </span>
                              <span className="title-font font-medium">
                                {button.text}
                              </span>
                            </span>
                          </a>
                        );
                      })}
                    </div> */}
                  </div>
                  <div
                    className={
                      "h-full lg:mt-0 mt-12 p-4 pb-0 rounded-3xl overflow-hidden " +
                      (index % 2 === 0
                        ? " flex  h-full lg:mt-0 mt-12 p-4 pb-0 rounded-3xl justify-center items-center overflow-hidden lg:order-first"
                        : " flex h-full lg:mt-0 mt-12 p-4 pb-0 rounded-3xl  overflow-hidden")
                    }
                  >
                    <div className="">
                      <div className="grid grid-cols-4 gap-2 place-content-center ">
                        {section.logos.map((logo, index) => {
                          return (
                            <div
                              key={index}
                              className="col-span-1 p-4 flex justify-center items-center sticker"
                            >
                              <img className="" src={logo.src} alt={logo.alt} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>
      <section id="skills">
        <div className="center inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
          and more ...
        </div>
      </section>
      {Object.keys(DATA.skills).map((category, id) => (
        <section id={category} key={id}>
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">{category}</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills[category as keyof typeof DATA.skills].map(
                (skill, skillId) => (
                  <BlurFade
                    key={skillId}
                    delay={BLUR_FADE_DELAY * 10 + skillId * 0.05}
                  >
                    <Badge key={skill}>{skill}</Badge>
                  </BlurFade>
                )
              )}
            </div>
          </div>
        </section>
      ))}

      <section id="macbook-image"></section>
      <img alt="" width="100%" height="100%" src="/laptop.png" />
    </main>
  );
}
