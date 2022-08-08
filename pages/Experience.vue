<script setup lang="ts">
const resume = reactive({
  professionalExperience: [
    {
      company: 'Blue Streak Docs, LLC',
      location: 'Clearwater, FL',
      positions: [
        {
          title: 'VP of Information Technology',
          start: 'June 2018',
          end: 'Present',
        },
         {
          title: 'IT Manager',
          start: 'September 2013',
          end: 'June 2018',
        }
      ],
      start: 'September 2013',
      end: 'Present',
      description: "During my time at Blue Streak Docs, we have transitioned from being a run of the mill company in our industry to a modernized technology focused company delivering better products and services to our clients via technological innovation. Within the first few years, I completely transitioned our on-premise legacy systems to a hybrid-cloud virtualized environment with high-availability. Allowing for both simpler management and reduced downtime. I then shifted my focus to developing software solutions that have allowed us to achieve year-over-year growth with minimal increase in operating expenses. I was eventually promoted to VP of Information Technology where I was part of the team that decided the direction of the company.",
      highlights: [
        "Utilized machine learning workflows for document classification, splitting, and data extraction of real estate documents using AWS (Amazon Web Services) Textract and Comprehend.",
        "Created an Electron desktop application to integrate with our machine learning workflow to quality control the results and ensure the results are correct.",
        "Developed a feature-rich company intranet with in-depth reporting and business intelligence functionality written in Django with a Vue frontend. Dockerized with a full continuous integration pipeline.",
        "Implemented micro-services in multiple languages to support integration with various 3rd party applications.",
        "Launched a custom e-commerce website integrated with Stripe for payment processing for individuals and smaller companies to order our services outside of our traditional workflow written in Django and Vue.",

      ]
    },
    {
      company: 'Pinellas Computers',
      location: 'Largo, FL',
      positions: [
        {
          title: 'Computer Technician',
          start: 'August 2012',
          end: 'September 2013',
        }
      ],
      start: 'August 2012',
      end: 'September 2013',
      description: 'As a computer service technician, I provided support and repair services to both small businesses and end users. For small businesses this Included network and server setup, Office365 migrations, setting up comprehensive backup solutions for our  customers  and more. My end user support responsibilities ranged from simple troubleshooting to in-depth hardware repair including laptop screen repairs, motherboard replacement, DC jack repairs, and other various hardware related issues.',
      highlights: [
        "Aided in the development and implementation of a ticking system for end user progress tracking.",
        "Helped grow our small business division with expert advice and great service to our customers.",
        "Automated our various in-house diagnostic tasks to simplify our workflow and increase productivity."
      ]
    },
    {
      company: 'Peter Wittwer',
      location: 'Largo, FL',
      positions: [
         {
          title: 'Junior Systems Administrator',
          start: 'June 2010',
          end: 'August 2012',
        }
      ],
      start: 'June 2010',
      end: 'August 2012',
      description: "At Peter Wittwer I handled the upkeep and maintenance of multiple physical windows servers including a Domain Controller, Microsoft SQL Server database, IIS web server, and an Exchange server. I was also responsible for all end user technical support across multiple offices located around the globe.",
      highlights: [
        "Zero downtime migration from locally hosted Exchange Server to Microsoft Online Services.",
        "Oversaw a physical office relocation and simultaneous upgrade from Windows XP to Windows 7."
      ]
    }
  ],
  independentExperience: [
    {
      company: "Tampa Esports",
      location: 'Largo, FL',
      positions: [{
        title: "Event Coordinator, Network Admin, Server Admin",
        start: "July 2013",
        end: "Present",
      }],
      start: "July 2013",
      end: "Present",
      description: "At Tampa Esports I was the primary person responsible for running our entire local network and server infrastructure for our multiple 200+ attendee events a year. I am also an integral part of the event planning team leading up to our events.",
      highlights: []
    },
    {
      company: "Esports Arena",
      location: 'Santa Ana, CA',
      positions: [{
        title: "Game Server Administrator",
        start: "June 2016",
        end: "February 2017",
      }],
      start: "June 2016",
      end: "February 2017",
      description: 'As an expert at running Counter Strike game servers and tournaments, from my experience working with Tampa Esports, I was brought in multiple times to assist their in-house staff in setting up their servers, and running their tournaments both on site and remotely once their initial server configuration had been completed.',
      highlights: []
    },
    {
      company: "Dreamhack",
      location: 'Austin, TX',
      positions: [{
        title: "Network Admin",
        start: "May 2016",
        end: null,
      }],
      start: "May 2016",
      end: null,
      description: "As a volunteer on the network team at Dreamhack Austin 2016, Dreamhack's first event in North America, I was partly responsible for the initial setup, and subsequent maintenance and monitoring of a temporary large scale network supporting various high bandwidth requirement livestreams and online tournament productions. In addition  to over 1000 in person attendees.",
      highlights: []
    },
  ],
  
})
</script>

<template>
<div class="flex justify-center">
  <div class="max-w-7xl">
    <h1
      class="text-4xl text-center my-10 tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl"
    >
      Professional Experience
    </h1>
    <JobCard v-for="job in resume.professionalExperience" :job="job" :key="job.company" />
    <h1
      class="text-4xl text-center my-10 tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl"
    >
      Independent Experience
    </h1>
    <JobCard v-for="job in resume.independentExperience" :job="job" :key="job.company" />
  </div>
</div>
</template>