'use client'
import { useRef, useState, useEffect } from 'react'
import React from 'react'
import Image from 'next/image'

interface SectionRef {
  name: string;
  ref: React.RefObject<HTMLDivElement>;
}

interface Project {
  id: number;
  title: string;
  description: string;
  details?: string;
  citation?: string;
  image: string;
  technologies: string[];
  link?: string;
}

export default function Sunshine() {
  const educationRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const [showAllAwards, setShowAllAwards] = useState(false)
  const [showAllClasses, setShowAllClasses] = useState(false)
  const [showAllCerts, setShowAllCerts] = useState(false)
  const [showAllOrgs, setShowAllOrgs] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('Experience');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better trigger point

      const sectionPositions = sections.map(section => ({
        name: section.name,
        position: section.ref.current?.offsetTop || 0
      }));

      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionPositions[i].position) {
          setActiveSection(sectionPositions[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const sections: SectionRef[] = [
    { name: 'Experience', ref: experienceRef },
    { name: 'Projects', ref: projectsRef },
    { name: 'Education', ref: educationRef },
  ]

  const projects: Project[] = [
    {
      id: 1,
      title: "zainashaik.com",
      description: "Personal Website",
      image: "/projects/zlogo2.png",
      technologies: ["React", "TypeScript", "Tailwind", "Next.js"],
      link: "https://github.com/zainashaik/zainashaik.github.io"
    },
    // Add more projects...
    {
        id: 2,
        title: "Evaluation of AI Model [BAIR/Google]",
        description: "Comparing Natural Language Generation Model’s Ability to Evaluate Humorous Captions",
        citation: "Shaik, Zaina. “Exploring Humor in HCI and AI Research,” Google Computer Science Research Mentorship Program 2023b, Talk.",
        image: "/projects/IMG_5776.jpg",
        technologies: ["Python", "JSON", "PyTorch", "OpenAI API"],
        link: "https://drive.google.com/file/d/1oFj8biFiYlrqiEsJtt_WRa9bTwToN_0w/view?usp=sharing"
      },
      {
        id: 3,
        title: "SoulSpeak",
        description: "Therapy Chatbot LLM with Emotional AI",
        details: "Integrated domain expertise and long-term memory into chatbot to provide emotional responses. Optimized 4 prompts to improve accuracy and relevance. Model reached validation accuracies of 90% preference and 70% relevance.",
        image: "/projects/soulspeak.png",
        technologies: ["Python", "React", "OpenAI API"],
        link: "https://drive.google.com/file/d/1eKwHJ7mIt5fHZPDLHmJTHNumdxLxoSqb/view?usp=sharing"
      },
      {
        id: 4,
        title: "n-tuitive:)",
        description: "Journaling Website with Sentiment Analysis and AI Generated Journal Prompts",
        image: "/projects/ntuitive1.png",
        technologies: ["HTML", "CSS", "Javascript", "Python", "Flask", "OpenAI API"],
        link: "https://tinyurl.com/ntuitiveapp"
      },
      {
        id: 5,
        title: "Seasons",
        description: "Sustainable Fashion Brand LLM for a Quarterly Clothing Subscription Service",
        details: "Built a morally aligned chatbot to classify brand sustainability based on 3 factors and pitched to 3 investors as CEO.",
        image: "/projects/SeasonsPitch1.png",
        technologies: ["Python", "Canva"],
      },
      {
        id: 6,
        title: "Analyzing Race and Citizenship Bias in Wikidata [USC NSF REU] [Published at IEEE MASS 2021] ",
        description: "Poster Abstract Paper about AI Ethics and Representation in Wikidata",
        details: "Abstract: Since there are limited full-time contributors to Wikidata, the current information might have a bias. In this paper, we examine the race and citizenship bias in general and in regards to STEM representation for scientists, software developers, and engineers. By comparing Wikidata queries to real-world datasets, we discovered that there is an overrepresentation of white individuals and those with citizenship in Europe and North America; the rest are generally underrepresented. We plan to create and implement a bot using a table-linking software to take missing information from the external datasets and insert it into Wikidata to increase minority race representation.",
        citation: "Z. Shaik, F. Ilievski and F. Morstatter, \"Analyzing Race and Citizenship Bias in Wikidata,\" 2021 IEEE 18th International Conference on Mobile Ad Hoc and Smart Systems (MASS), 2021, pp. 665-666, doi: 10.1109/MASS52906.2021.00099. (Paper Cited 11x).",
        image: "/projects/WikidataPoster1.png",
        technologies: ["Python", "SPARQL", "KGTK"],
        link: "https://ieeexplore.ieee.org/abstract/document/9637775"
      },
  ];

  return (
    <main className="min-h-screen h-full pt-20 px-4 md:px-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 bg-fixed pb-16">      
    {/* Sub Navigation Bar */}
      <div className="sticky top-16 bg-purple-900/100 backdrop-blur-sm shadow-md z-10 py-3 mb-8">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
          {sections.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                scrollToSection(item.ref);
                setActiveSection(item.name);
              }}
              className={`
                px-4 py-2 
                text-white 
                rounded-md 
                transition duration-300
                border border-white
                ${activeSection === item.name 
                  ? 'bg-white/20 font-semibold' 
                  : 'hover:bg-white/10'
                }
              `}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-8 text-left text-white">
          Sunshine - What I'm Up to During the Day
        </h1>
      </div>

      

      {/* Work Experience Section */}
      <div ref={experienceRef} className="max-w-6xl mx-auto mb-16 scroll-mt-32">
        <h2 className="text-3xl font-bold mb-6 text-white">Work Experience</h2>
        <div className="space-y-6">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-white">Center for AI Safety<br/><i className="text-lg">Research Software Engineer Intern</i></h3>
                  <p className="text-white text-right">October 2024 - present<br/>San Francisco, CA</p>
                </div>
                <ul className="text-white list-disc list-inside ml-4">
                  <li>Building a website with real-time updates on comparisons from a database of 200 examples [React, Next.js, Typescript, Tailwind CSS, API calls].</li>
                  <li>Developed, fine-tuned, and evaluated LLM models with control vectors and representation engineering methods [Python, Llama].</li>
                </ul>
              </div>
              <div className="md:w-1/4 flex items-center justify-center">
                <Image
                  src="/exp/IMG_8745.jpg"
                  alt="Center for AI Safety Logo"
                  width={150}
                  height={150}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-white">DayDream Ventures<br/><i className="text-lg">Venture Fellow</i></h3>
                <p className="text-white text-right">October 2024 - December 2024<br/>San Francisco, CA</p>
            </div>
            <ul className="text-white list-disc list-inside ml-4">
              <li>Sourcing and writing company memos for startups in AI, Consumer, and Community.</li>
              <li>Attending weekly workshops on topics like venture capital, startups, and entrepreneurship.</li>
            </ul>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-white">Berkeley Artificial Intelligence Research<br/><i className="text-lg">Generative AI Researcher and PM</i></h3>
                  <p className="text-white text-right">May 2023 - December 2023<br/>Berkeley, CA</p>
                </div>
                <p className="text-white italic">Berkeley Natural Language Processing Group Undergraduate Researcher (Advisors: Professor Daniel Klein, PhD Student Eve Fleisig)</p>
                <ul className="text-white list-disc list-inside ml-4">
                  <li>Scoped research goal to evaluate subjective NLG tasks and prepared dataset (141,000 data points) into training and test files [Python, JSON].</li>
                  <li>Fine-tuned supervised learning model to evaluate its ability to determine humor (70% accuracy) [Python, PyTorch, OpenAI API].</li>
                  <li>Conducted literature review and presented on effects of measuring annotator responses to evaluate natural language generation models.</li>
                </ul>
              </div>
              <div className="md:w-1/4 flex items-center justify-center">
                <Image
                  src="/exp/IMG_3812.jpg"
                  alt="BAIR Logo"
                  width={150}
                  height={150}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-white">Google<br/><i className="text-lg">Computer Science Research Mentorship Program Scholar</i></h3>
              <p className="text-white text-right">September 2023 - December 2023<br/>Berkeley, CA</p>
            </div>
            <ul className="text-white list-disc list-inside ml-4">
              <li>Cohort 2023b. Received AI/ML & HCI research mentorship from Software Engineers. Presented talk on humor in natural language generation models.</li>
            </ul>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-white">UnitedHealth Group<br/><i className="text-lg">Experience Design Intern</i></h3>
              <p className="text-white text-right">June 2022 - August 2022<br/>Irvine, CA</p>
            </div>
            <ul className="text-white list-disc list-inside ml-4">
              <li>Designed Onboarding Platform (saved annual $19.2 million, 38,000 users) based on business model and user feedback [Figma, Miro].</li>
              <li>1 of 5 selected to organize a 2-day Human-Centered Design Workshop (1200+ members) with C-level Executives & conduct user research.</li>
              <li>Facilitated enterprise-wide design system transition and analyzed human-centered AI applications in healthcare [HTML, CSS, Javascript].</li>
            </ul>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-white">University of Southern California<br/><i className="text-lg">Artificial Intelligence Research Intern</i></h3>
              <p className="text-white text-right">June 2021 - October 2021<br/>Los Angeles, CA</p>
            </div>
            <ul className="text-white list-disc list-inside ml-4">
              <li>Published peer-reviewed NSF research paper of STEM Minority Wikidata bot and optimized categorization process for 6 databases [SPARQL].</li>
              <li>Identified 2 real-time algorithm matching errors of Table Linking Software and increased representation by 50% [Python, KGTK].</li>
            </ul>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-white">ExoAnalytic Solutions<br/><i className="text-lg">Software Engineering Intern</i></h3>
              <p className="text-white text-right">June 2020 - August 2020<br/>Irvine, CA</p>
            </div>
            <ul className="text-white list-disc list-inside ml-4">
              <li>Remodeled 2 algorithms and extracted vital satellite data from a database for clients and improved user experience [JSON, Python].</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div ref={projectsRef} className="max-w-6xl mx-auto mb-16 scroll-mt-32">
        <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="relative cursor-pointer group w-full inline-block mb-6"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={225}
                  className="rounded-lg w-full"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <h3 className="text-xl font-semibold text-white text-center mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white text-center">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for expanded view */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            {/* Left Arrow */}
            <button 
              onClick={() => {
                const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
                const prevProject = projects[currentIndex - 1] || projects[projects.length - 1];
                setSelectedProject(prevProject);
              }}
              className="text-white hover:text-gray-300 p-4"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="bg-black rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-white hover:text-gray-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      width={400}
                      height={300}
                      className="rounded-lg w-full object-contain"
                    />
                  </div>

                  <div className="md:w-2/3">
                    <p className="text-white mb-4">{selectedProject.description}</p>
                    
                    {selectedProject.details && (
                      <div className="mb-4">
                        <p className="text-white">{selectedProject.details}</p>
                      </div>
                    )}

                    {selectedProject.citation && (
                        <div className="mb-4">
                        <p className="text-white">{selectedProject.citation}</p>
                        </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedProject.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-purple-900 text-white rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline hover:text-gray-300"
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button 
              onClick={() => {
                const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
                const nextProject = projects[currentIndex + 1] || projects[0];
                setSelectedProject(nextProject);
              }}
              className="text-white hover:text-gray-300 p-4"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>


      {/* Education Section */}
      <div ref={educationRef} className="max-w-6xl mx-auto mb-16 scroll-mt-32">
        <h2 className="text-3xl font-bold mb-6 text-white">Education</h2>
        
        {/* Main Education Bubble */}
        <div className="bg-black/30 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 mb-6">
          {/* Main Education Info */}
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold text-white">University of California, Berkeley</h3>
              <p className="text-lg text-white">Bachelor of Arts in <strong>Computer Science</strong></p>
              <p className="text-white italic">Berkeley Certificate in Design Innovation</p>
              <p className="text-white italic">SCET Certificate in Entrepreneurship & Technology</p>
            </div>
            <div className="text-white md:w-1/4 text-right">
              June 2020 - May 2024
            </div>
          </div>

          {/* New Education Info */}
          <div className="text-white">

            

          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 mt-6">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowAllAwards(!showAllAwards)}>
              <h4 className="text-lg font-semibold mt-0 text-white">Awards:</h4>
              <svg 
                className={`w-6 h-6 transform transition-transform ${showAllAwards ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="white" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul className="list-disc list-inside space-y-1 text-white">
              {!showAllAwards ? (
                // Featured awards
                <>
                  <li>UC Berkeley:</li>
                  <ul className="list-disc list-inside ml-4">
                    <li>Regents' and Chancellor's Scholar (RCSA) (Top 1% of Incoming Students) [March 2020]</li>
                    <li>STEM Excellence through Equity & Diversity (SEED) Honors Research Scholar ($80k Stipend for AI Research) [March 2020]</li>
                  </ul>
                  <li>Other:</li>
                  <ul className="list-disc list-inside ml-4">
                    <li>Google CS Research Mentorship Program 2023b [Sept. 2023]</li>
                  </ul>
                </>
              ) : (
                // All awards
                <>
                  <li>UC Berkeley:</li>
                  <ul className="list-disc list-inside ml-4">
                    <li>Regents' and Chancellor's Scholar (RCSA) (Top 1% of Incoming Students) [March 2020]</li>
                    <ul className="list-disc list-inside ml-8">
                      <li>Regents' Research Fellowship [Oct. 2023]</li>
                      <li>Chancellor's New Scholar Welcome Ceremony Speaker [Aug. 2023]</li>
                    </ul>
                    <li>STEM Excellence through Equity & Diversity (SEED) Honors Research Scholar ($80k Stipend for AI Research) [March 2020]</li>
                    <ul className="list-disc list-inside ml-8">
                      <li>SEED High Achievement Award [May 2024]</li>
                      <li>SEED Commencement Speaker [May 2024]</li>
                    </ul>
                    <li>Cal Alumni Association Leadership Scholar [Sept. 2020, 2021, 2022]</li>
                    <li>Cal PlexHacks (5th place) [Aug. 2020]</li>
                    <li>SCET Innovation Fellow Bronze Award [Jan. 2024]</li>
                  </ul>
                  <li>Other:</li>
                  <ul className="list-disc list-inside ml-4">
                    <li>Google CS Research Mentorship Program 2023b [Sept. 2023]</li>
                    <li>Kleiner Perkins Semi-finalist [May 2023]</li>
                    <li>Y Combinator Startup School (Top 10%) [March 2023], Y Combinator Summer Conference [May 2023]</li>
                    <li>Figma Config23 Student Scholarship [June 2023]</li>
                    <li>C-STEM Robotics Competition (Top 10) [April 2019]</li>
                    <li>National Merit Finalist [Feb. 2019]</li>
                  </ul>
                </>
              )}
            </ul>
        </div>

        <div className="bg-black/30 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 mt-6">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowAllClasses(!showAllClasses)}>
              <h4 className="text-lg font-semibold mt-0 text-white">Classes:</h4>
              <svg 
                className={`w-6 h-6 transform transition-transform ${showAllClasses ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="white" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {!showAllClasses ? (
              // Featured classes
              <p className="text-white"><strong>Computer Science Major:</strong> CS194-196: Responsible Generative AI, CS160: User Interfaces, CS169a: Cloud Computing...</p>
            ) : (
              // All classes
              <>
              <div className="text-white">
                <strong>Computer Science Major:</strong>
                <ul className="list-disc ml-6 mt-1">
                  <li>CS194-196: Responsible Generative AI & Decentralized Intelligence & Large Language Models (LLMs)</li>
                  <li>CS160: User Interfaces</li>
                  <li>CS169a: Cloud Computing & Software Engineering</li>
                  <li>CS195: AI Ethics</li>
                  <li>CS188: Artificial Intelligence</li>
                  <li>CS61b: Data Structures</li>
                  <li>CS170: Advanced Algorithms</li>
                  <li>CS70: Discrete Math</li>
                  <li>CS61a: Object Oriented Programming</li>
                  <li>CS61c: Computer Architecture</li>
                  <li>STAT 24: Data Visualizations</li>
                  <li>EECS16a/b: Machine Learning, Multivariable Calculus, Linear Algebra, Differential Equations</li>
                </ul>
              </div>
              <div className="text-white mt-4">
                <strong>Berkeley Certificate in Design Innovation:</strong>
                <ul className="list-disc ml-6 mt-1">
                  <li>ENVDES4a: Design & Activism</li>
                  <li>DESINV21: Visual Communications</li>
                  <li>INTEGBIC32: Bioinspired Design</li>
                </ul>
              </div>
              <div className="text-white mt-4">
                <strong>SCET Certificate in Entrepreneurship & Technology:</strong>
                <ul className="list-disc ml-6 mt-1">
                  <li>Engin183: Product Management</li>
                  <li>UGBA194: Business Entrepreneurship</li>
                </ul>
              </div>
            </>
            )}
        </div>

        <div className="bg-black/30 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 mt-6">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowAllCerts(!showAllCerts)}>
              <h4 className="text-lg font-semibold mt-0 text-white">Certifications:</h4>
              <svg 
                className={`w-6 h-6 transform transition-transform ${showAllCerts ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="white" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {!showAllCerts ? (
              // Featured certifications
              <ul className="list-disc list-inside space-y-1 text-white">
                <li>Amazon Web Services:</li>
                <ul className="list-disc list-inside ml-4">
                  <li><a href="https://www.credly.com/badges/2cd8d3fe-fc79-4bcb-8ee8-fd4277498e8e/public_url" className="text-white underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">Certified Cloud Practitioner</a></li>
                </ul>
                <li>Google Cloud:</li>
                <ul className="list-disc list-inside ml-4">
                  <li><a href="https://www.cloudskillsboost.google/public_profiles/f280d41d-4f67-440c-8b43-b46fbddc3e22/badges/3900020" className="text-white underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">Intro to Generative AI</a></li>
                </ul>
              </ul>
            ) : (
              // All certifications
              <ul className="list-disc list-inside space-y-1 text-white">
                <li>Amazon Web Services:</li>
                <ul className="list-disc list-inside ml-4">
                  <li><a href="https://www.credly.com/badges/2cd8d3fe-fc79-4bcb-8ee8-fd4277498e8e/public_url" className="text-white underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">Certified Cloud Practitioner</a></li>
                  <li><a href="https://drive.google.com/file/d/1rs4lqo3AhGMYj6_AMI-tNkZuRXbA77cQ/view?usp=sharing" className="text-white underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">Fundamentals of Machine Learning and Artificial Intelligence</a></li>
                </ul>
                <li>Google Cloud:</li>
                <ul className="list-disc list-inside ml-4">
                  <li><a href="https://www.cloudskillsboost.google/public_profiles/f280d41d-4f67-440c-8b43-b46fbddc3e22/badges/3900020" className="text-white underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">Intro to Generative AI</a></li>
                </ul>
                <li>LinkedIn:</li>
                <ul className="list-disc list-inside ml-4">
                  <li><a href="https://drive.google.com/file/d/1z76vqQApLzlpmyt54cDWSEZXMfGpJe8S/view?usp=sharing" className="text-white underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">Technical Product Management</a></li>
                  <li><a href="https://drive.google.com/file/d/1p2C1Fuij850KWSCLCQCekFlgmS7gQuEQ/view?usp=sharing" className="text-white underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">Natural Language Processing with PyTorch</a></li>
                  <li><a href="https://drive.google.com/file/d/1vahj0gxpZKIaMARTVeYY7zap6Rjaek-T/view?usp=sharing" className="text-white underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">LLaMa for Developers</a></li>
                </ul>
              </ul>
            )}
        </div>

        
        {/* Organizations - New separate bubble */}
        <div className="bg-black/30 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 mt-6">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowAllOrgs(!showAllOrgs)}>
            <h4 className="text-lg font-semibold text-white">Organizations:</h4>
            <svg 
                className={`w-6 h-6 transform transition-transform ${showAllOrgs ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="white" 
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            </div>
            {!showAllOrgs ? (
            // Featured organizations
            <ul className="list-disc list-inside space-y-1 text-white">
                <li>FEMTech Berkeley - President [2020-2024]</li>
                <li>Regents' and Chancellor's Scholars Association - Chair of Operations [2020-2024]</li>
                <li>SEED Scholars Honors Program - Research Scholar and Mentor [2020-2024]</li>
                <li>Girls Who Code - Member [2016-present]</li>
                <li>Rewriting the Code - Member [2024-present]</li>
            </ul>
            ) : (
            // All organizations
            <ul className="list-disc list-inside space-y-1 text-white">
                <li>FEMTech Berkeley - President [2020-2024]</li>
                <ul className="list-disc list-inside ml-4">
                <li>Managed organization of 1000+ members to advocate for gender minorities in tech by hosting professional development events and mentorship opportunities.</li>
                </ul>
                <li>Regents' and Chancellor's Scholars Association - Chair of Operations [2020-2024]</li>
                <ul className="list-disc list-inside ml-4">
                <li>Managed organization of 700+ members by operating social media channels, communicated news on newsletters and website, and hosting professional development events.</li>
                </ul>
                <li>SEED Scholars Honors Program - Research Scholar and Mentor [2020-2024]</li>
                <ul className="list-disc list-inside ml-4">
                <li>Mentored 50+ students by hosting meetings and providing resources for research and internships.</li>
                </ul>
                <li>Girls Who Code - Member [2016-present]</li>
                <li>Rewriting the Code - Member [2024-present]</li>
            </ul>
            )}
        </div>
        </div>

      

    </main>
  )
}
