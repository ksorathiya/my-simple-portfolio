import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "January 2023",
      content: (
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Got my PMP certification
        </p>
      ),
    },
    {
      title: "2021 - 2022",
      content: (
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Project Management in IT - Certification Course from Seneca
          Polytechnic, Toronto.
        </p>
      ),
    },
    {
      title: "September 2021",
      content: (
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          AWS Certified Solutions Architect Certification
        </p>
      ),
    },
    {
      title: "April 2021",
      content: (
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Moved to Toronto, Canada
        </p>
      ),
    },
    {
      title: "Oct 2016",
      content: (
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Joined Solvative, back then it was called Quark Studios
        </p>
      ),
    },
    {
      title: "2016",
      content: (
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Graduated Bachelor&apos;s of Engineering - Information Technology
        </p>
      ),
    },
    {
      title: "July 2016 - September 2016",
      content: (
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Practical Project Development Guide at L.D. College of Engineering
        </p>
      ),
    },
    {
      title: "June 2015 - April 2016",
      content: (
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          PHP Developer Intern at Nyusoft Solutions
        </p>
      ),
    },
    {
      title: "2012",
      content: (
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Passed HSC
        </p>
      ),
    },
    {
      title: "2010",
      content: (
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Passed SSC
        </p>
      ),
    },
    {
      title: "1994",
      content: (
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          This is when I was born
        </p>
      ),
    },
  ];

  return <Timeline data={data} />;
}
