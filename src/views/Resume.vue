<script setup lang="ts">
import { reactive } from 'vue';

const resume = reactive({
  name: 'jacob lindelof',
  title: 'full stack software engineer',
  email: 'jacob@lindelof.co',
  about: 'I am a full stack software engineer with over 5 years experience developing production ready applications in multiple programing languages and frameworks. As well as more than a decade of experience working with both Unix and Windows servers. My varied experience and high aptitude for picking up new skills and technologies quickly allow me to jump between projects and environments with ease.',
  skills: [
    "Strong Communication",
    "High Aptitude",
    "Creative Thinking",
    "Problem Solving",
    "Multi Tasking",
  ],
  technologies: [
    "Python (Django, Flask, FastAPI)",
    "Javascript/Typescript (Node, Vue, Electron)",
    "C# (ASP.NET Core, Entity Framework, WFP/UWP)",
    "SQL (MSSQL, PostgreSQL)",
    "Docker",
    "AWS",
    "VMWare ",
    "Unix",
    "Windows Server",
  ],
  professionalExperience: [
    {
      company: 'Blue Streak Docs, LLC',
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
      name: "Tampa Esports",
      position: "Event Coordinator, Network Admin, Server Admin",
      start: "July 2013",
      end: "Present",
      description: "At Tampa Esports I was the primary person responsible for running our entire local network and server infrastructure for our multiple 200+ attendee events a year. I am also an integral part of the event planning team leading up to our events.",
    },
    {
      name: "Esports Arena",
      position: "Game Server Administrator",
      start: "June 2016",
      end: "February 2017",
      description: 'As an expert at running Counter Strike game servers and tournaments, from my experience working with Tampa Esports, I was brought in multiple times to assist their in-house staff in setting up their servers, and running their tournaments both on site and remotely once their initial server configuration had been completed.',
    },
    {
      name: "Dreamhack Austin",
      position: "Network Admin",
      date: "May 2016",
      description: "As a volunteer on the network team at Dreamhack Austin 2016, Dreamhack's first event in North America, I was partly responsible for the initial setup, and subsequent maintenance and monitoring of a temporary large scale network supporting various high bandwidth requirement livestreams and online tournament productions. In addition  to over 1000 in person attendees."
    },
  ],
  
})
</script>

<template>
<div class="resume">
  <div class="resume-sidebar">
    <div class="sidebar-content">
      <p>{{ resume.name }}</p>
      <p>{{ resume.title }}</p>
      <p>safety harbor, fl</p>
      <p><a href="mailto:jacob@lindelof.co">{{ resume.email }}</a></p>
      <h5>Skills</h5>
      <ul>
        <li v-for="skill in resume.skills">{{ skill }}</li>
      </ul>
      <h5>Technologies</h5>
      <ul>
        <li v-for="tech in resume.technologies">{{ tech }}</li>
      </ul>
    </div>
  </div>
  <div class="resume-content">
    <div class="resume-section">
      <h1>About</h1>
      <p>{{resume.about}}</p>
    </div>  
    <div class="resume-section">
      <h1>Professional Experience</h1>
      <div v-for="job in resume.professionalExperience" class="resume-job">
        <div class="resume-job-header">
          <h2>{{ job.company }}</h2>
          <h3>{{ job.start }} - {{ job.end }}</h3>
        </div>
        <div class="resume-job-titles">
          <h4 v-for="position in job.positions">- {{ position.title }}  • {{position.start}} - {{position.end}}</h4>
        </div>
        <div class="resume-job-body">
          <p>{{ job.description }}</p>
          <h5>Highlights</h5>
          <ul>
            <li v-for="highlight in job.highlights">{{ highlight }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="resume-section">
      <h1>Independent Experience</h1>
      <div v-for="job in resume.independentExperience" class="resume-job">
        <div class="resume-job-header">
          <h2>{{ job.name }}</h2>
          <h4 v-if="job.date">- {{ job.position }} • {{job.date}}</h4>
          <h4 v-else>- {{ job.position }} • {{job.start}} - {{job.end}}</h4>
        </div>
        <div class="resume-job-body">
          <p>{{ job.description }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.resume {
  display: flex;
}

.resume-sidebar {
  width: 20rem;
  border-right: 1px solid #ccc;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
}
.sidebar-content {
  padding: 1rem;
}

.resume-content {
  flex: 1;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
}

.resume-section {
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}

@media screen and (max-width: 1024px){
  .resume {
    display: flex;
    flex-direction: column;
  }
  .resume-sidebar {
    width: auto;
    border-right: none;
    border-bottom: 1px solid #ccc;
    max-height: auto;
    overflow-y: auto;
  }
  .sidebar-content {
    padding: 1rem;
  }

  .resume-content {
    max-height: 100%;
    overflow-y: auto;
  }
}
</style>