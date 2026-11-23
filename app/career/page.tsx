import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Career' })

const RESUME_PDF = '/static/Olusanya_Todd_Resume.pdf'

type Entry = {
  title: string
  org?: string
  location?: string
  dates?: string
  points: string[]
  skills?: string
}

const education: Entry[] = [
  {
    title: 'B.Eng. Mechanical Engineering',
    org: 'York University, Lassonde School of Engineering',
    location: 'Toronto, ON',
    dates: 'Expected May 2028',
    points: [
      'GPA: 3.9/4.0. First Class with Distinction, Dean’s Honour Roll',
      'Lassonde Scholar: $15,000 renewable scholarship for academic excellence and leadership',
    ],
  },
  {
    title: 'CSEC and CAPE (Sixth Form)',
    org: 'Queen’s Royal College',
    location: 'Port of Spain, Trinidad and Tobago',
    dates: 'Completed 2023',
    points: [
      'Caribbean Secondary Education Certificate (CSEC) and Caribbean Advanced Proficiency Examination (CAPE)',
    ],
  },
]

const work: Entry[] = [
  {
    title: 'Manufacturing Software Engineering Intern (Co-op)',
    org: 'Tesla Inc., Battery Cell Manufacturing Software',
    location: 'Fremont, CA',
    dates: 'Sep 2026 – Dec 2026',
    points: [
      'Rebuilt a manufacturing quality-data pipeline across 4 Python microservices (Celery task queues, gRPC APIs, time-series data), restoring spec checks on every battery cell at 3 factories',
      'Root-caused a production bug that falsely scrapped about 4,500 battery cells by analyzing test time-series data, then shipped the fix with pytest regression tests through code review',
      'Deployed dedicated Celery workers to Kubernetes with Helm at 3 factories so out-of-memory crashes no longer drop quality data, and migrated service auth to OAuth 2.0 with token caching',
    ],
    skills: 'Python, Celery, gRPC, Kubernetes, Helm, pytest, OAuth 2.0, time-series data analysis',
  },
  {
    title: 'Product and Operations Intern',
    org: 'HeftIQ',
    location: 'Remote',
    dates: 'May 2026 – Jul 2026',
    points: [
      'Ran QA on 3 urgent features before a key stakeholder demo; wrote a product development SOP the founder approved',
    ],
    skills: 'Quality assurance testing, process documentation',
  },
  {
    title: 'Embedded Systems Engineer (Contract)',
    org: 'Juju Festival Tech',
    location: 'Trinidad and Tobago',
    dates: 'Jan 2022 – Dec 2022',
    points: [
      'Sole technical hire; designed all electrical and firmware systems for 2 IoT carnival costumes with RGB LED strips',
      'Built internet remote control and live video streaming for the costumes using ESP32 firmware (C++), React, and Node.js',
    ],
    skills: 'ESP32, C++, React, Node.js, electrical design',
  },
  {
    title: 'Mechatronics Engineer Mentee',
    org: 'Dyer Solutions Caribbean Ltd.',
    location: 'Remote',
    dates: 'Jul 2021 – Aug 2024',
    points: [
      'Rebuilt a telepresence robot’s comms with WebRTC and demoed it to its founder, then–VP of Robotics at NVIDIA',
      'Built a HoloLens AR app and Jetson Nano Python server (drone SDK) to fly a real drone by gaze and hand gestures',
      'Co-authored research on distributed ML across multi-node LoRa mesh networks; presented at the UWI 5i Conference',
    ],
    skills: 'WebRTC, HoloLens AR, Jetson Nano, Python, LoRa mesh networks, machine learning',
  },
]

const community: Entry[] = [
  {
    title: 'Organizer and Presenter, “Shut Up, the Planet’s Burning”',
    org: 'Climate action event',
    location: 'Toronto, ON',
    dates: 'Nov 2026',
    points: [
      'Hosted a climate event and presented what the research says we can actually do about emissions',
      'Five people came, and the group continues to meet to choose its first problem to work on, possibly electrifying industrial heat',
    ],
    skills: 'Research, public speaking, event organizing',
  },
  {
    title: 'Peer Teacher, Mechanics of Materials and Thermodynamics',
    org: 'York University (volunteer)',
    location: 'Toronto, ON',
    dates: 'Second year',
    points: [
      'Taught myself statics, which Mechanics of Materials relied on but did not list as a prerequisite, then started teaching my classmates',
      'Recorded explainer videos, set up a Discord where classmates worked through assignments together, and hosted live sessions, many of them for Thermodynamics',
      'This teaching became the focus of the letter that earned me the Lassonde Scholarship',
    ],
    skills: 'Teaching, mentoring, communication',
  },
  {
    title: 'Team Lead, RC Car',
    org: 'Mini Design Course, York University',
    location: 'Toronto, ON',
    dates: 'Jan 2026 – Apr 2026',
    points: [
      'Led a 6-person RC car team; CADed the first drivetrain, steering, and wheel knuckle designs and debugged electronics',
    ],
    skills: 'Leadership, mechanical and electrical design, CAD',
  },
  {
    title: 'Member, YURS Rover Team',
    org: 'York University Robotics Society',
    location: 'Toronto, ON',
    dates: 'Sep 2025 – Apr 2026',
    points: [
      'Redesigned the top end of an off-the-shelf drill auger in SolidWorks to mount it on the rover’s soil-sampling science module',
      'Ran SolidWorks FEA at hand-calculated drive motor torque to verify the adapter design held a 2x factor of safety',
    ],
    skills: 'SolidWorks, SolidWorks Simulation (FEA), hand calculations',
  },
  {
    title: 'Founder, Kids Robotics Camp',
    points: ['Taught 5 students (ages 12–15) to build 3 robots; 2 went on to study engineering'],
    skills: 'Teaching, robotics',
  },
  {
    title: 'Senior Dragon Boater',
    org: 'Dragon boat racing',
    points: ['Competed nationally for 5+ years (gold medallist) and mentored new members'],
    skills: 'Teamwork, mentoring, discipline',
  },
]

const courses = {
  completed: [
    'CHEM 1100',
    'EECS 1011',
    'EECS 1021',
    'ENG 1101',
    'ENG 1102',
    'ENG 2001',
    'ENG 2003',
    'ENTR 3400',
    'ENTR 3600',
    'ESSE 1012',
    'MATH 1025',
    'MATH 2015',
    'MATH 2271',
    'MATH 2930',
    'MECH 2201',
    'MECH 2202',
    'MECH 2301',
    'MECH 2302',
    'MECH 2401',
    'MECH 2412',
    'MECH 2502',
  ],
  transfer: ['MATH 1013', 'MATH 1014', 'PHYS 1800', 'PHYS 1801'],
  inProgress: [
    'COOP 2100: Professional Development for Co-op',
    'COOP 2109: Lassonde Co-op Work-term',
  ],
}

const awards = [
  '$1,500 BEST Award: 1st Place in BEST StartUp pitch competition',
  'Lassonde Scholar: $15,000 renewable scholarship for academic excellence and leadership',
  'Dean’s Honour Roll, York University',
]

const skills = [
  {
    area: 'Mechanical Design',
    list: 'SolidWorks, Fusion 360, Onshape, 2D Engineering Drawings, GD&T, FEA, Machining, 3D Printing',
  },
  {
    area: 'Electrical and Embedded',
    list: 'Electrical Schematics, Circuit Design, Soldering, ESP32, Arduino, Jetson Nano, Servos, IMUs',
  },
  {
    area: 'Software',
    list: 'Python, C++, MATLAB, JavaScript (React, Node.js), Celery, gRPC, Kubernetes, Helm, pytest, Git',
  },
]

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 pt-10 pb-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-100"
    >
      {children}
    </h2>
  )
}

function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <ul className="space-y-8">
      {entries.map((e) => (
        <li key={e.title + e.org}>
          <div className="flex flex-col justify-between sm:flex-row sm:items-baseline">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{e.title}</h3>
            {e.dates && (
              <span className="text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
                {e.dates}
              </span>
            )}
          </div>
          <p className="text-gray-600 italic dark:text-gray-400">
            {[e.org, e.location].filter(Boolean).join(' · ')}
          </p>
          <ul className="mt-2 ml-5 list-disc space-y-1 text-gray-700 dark:text-gray-300">
            {e.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          {e.skills && (
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold">Skills used:</span> {e.skills}
            </p>
          )}
        </li>
      ))}
    </ul>
  )
}

export default function Career() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Career
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Education, experience, and resume.
        </p>
        <nav aria-label="On this page" className="flex flex-wrap gap-4 pt-2">
          {[
            ['Education', '#education'],
            ['Courses', '#courses'],
            ['Work and co-op experience', '#experience'],
            ['Community and extracurriculars', '#community'],
            ['Awards', '#awards'],
            ['Technical skills', '#skills'],
            ['Resume', '#resume'],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="pb-8">
        <SectionHeading id="education">Education</SectionHeading>
        <EntryList entries={education} />

        <h3
          id="courses"
          className="scroll-mt-24 pt-8 pb-2 text-lg font-bold text-gray-900 dark:text-gray-100"
        >
          Courses completed at York University
        </h3>
        <p className="text-gray-700 dark:text-gray-300">{courses.completed.join(', ')}</p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Transfer credit:</span> {courses.transfer.join(', ')}
        </p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          <span className="font-semibold">In progress (Fall 2026):</span>{' '}
          {courses.inProgress.join('; ')}
        </p>

        <SectionHeading id="experience">Work and co-op experience</SectionHeading>
        <EntryList entries={work} />

        <SectionHeading id="community">Community, volunteer, and extracurriculars</SectionHeading>
        <EntryList entries={community} />

        <SectionHeading id="awards">Awards</SectionHeading>
        <ul className="ml-5 list-disc space-y-1 text-gray-700 dark:text-gray-300">
          {awards.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>

        <SectionHeading id="skills">Technical skills</SectionHeading>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          {skills.map((s) => (
            <li key={s.area}>
              <span className="font-semibold">{s.area}:</span> {s.list}
            </li>
          ))}
        </ul>

        <SectionHeading id="resume">Resume</SectionHeading>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          <Link
            href={RESUME_PDF}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-semibold"
          >
            Download my resume (PDF)
          </Link>
        </p>
        <Link href={RESUME_PDF} aria-label="Open my resume (PDF)">
          <img
            src="/static/images/resume-preview.png"
            alt="Preview of Olusanya Todd's resume, page 1"
            className="w-full max-w-3xl rounded border border-gray-200 shadow-sm transition hover:opacity-90 dark:border-gray-700"
          />
        </Link>
      </div>
    </div>
  )
}
