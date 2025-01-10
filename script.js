const resumeData = {
  name: "Tanya Sharma",
  contact: "Flat No. 302, Sunrise Apartments, Sector 15, Gurgaon, Haryana 122001, India | +91 9876543210 | tanya.sharma@example.com",
  
    website: "www.interestingsite.com",
    objective: "My primary objective is to provide a safe and nurturing learning environment...",
    skills: [
      "Communication",
      "Problem-solving",
      "Critical thinking",
      "Time management",
      "Lesson planning",
      "Leadership",
      "Creative writing"
    ],
    // experience: [
      // Example experience objects (commented out for now)
      // {
      //   title: "Teacher",
      //   company: "Balsam Elementary School",
      //   location: "Santa Fe, NM",
      //   duration: "Jan 2018 – Aug 2023",
      //   details: [
      //     "Designed and implemented engaging lesson plans aligned with state standards, resulting in a 15% increase in student test scores.",
      //     "Mentored new teachers, leading to a smoother onboarding process and increased retention rates.",
      //     "Led after-school programs, including a robotics club and art workshops, fostering student creativity and teamwork."
      //   ]
      // },
      // {
      //   title: "Teacher’s Aide",
      //   company: "Balsam Elementary School",
      //   location: "Santa Fe, NM",
      //   duration: "Oct 2015 – May 2017",
      //   details: [
      //     "Assisted lead teachers in classroom management and lesson preparation, improving daily operations.",
      //     "Provided one-on-one tutoring for students needing extra support, improving their academic performance.",
      //     "Organized and maintained classroom materials, ensuring a clean and conducive learning environment."
      //   ]
      // }
    // ],
    
    education: [
      {
        degree: "Bachelor’s Degree in Elementary Education",
        institution: "Bellows College",
        location: "Santa Fe, NM",
        graduationYear: "2015"
      },

      {
        degree: "High School Diploma",
        institution: "Santa Fe High School",
        location: "Santa Fe, NM",
        graduationYear: "2011"
      }
    ],
    
  achievements: [
    "Awarded 'Teacher of the Year' at Balsam Elementary School (2021).",
    "Implemented a literacy program, improving reading scores by 20%.",
    "Organized an annual science fair with 200+ participants.",
    "Recognized for excellence during college teaching assignments.",
    
  ],
    communication: [
      "Regularly held parent-teacher conferences, effectively addressing student progress and concerns.",
      "Developed weekly newsletters for parents to keep them informed about classroom activities and important updates.",
      
    ],
    leadership: [
      "Established a peer mentoring program that paired experienced students with new students to ease transitions.",
      "Chaired the school's curriculum committee, leading the implementation of new teaching strategies and technologies.",
     
    ],
    references: [
      "Dr. Emily Carter, Principal, Balsam Elementary School, (555) 123-4567, ecarter@balsamelem.edu",
      "John Doe, District Supervisor, Santa Fe Public Schools, (555) 987-6543, jdoe@sfps.edu"
    ]
  };
  
  // Populate data dynamically
  document.getElementById("name").textContent = resumeData.name;
  document.getElementById("contact").textContent = resumeData.contact.replace(/\|/g, "<br>");
  document.getElementById("website").textContent = resumeData.website;
  document.getElementById("objective").querySelector("p").textContent = resumeData.objective;
  
  // Skills
  const skillsSection = document.getElementById("skills").querySelector("ul");
  resumeData.skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsSection.appendChild(li);
  });
  
  // Experience
  const experienceSection = document.getElementById("experience");
  resumeData.experience.forEach(exp => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${exp.title}</strong> • ${exp.company} • ${exp.location}<br>${exp.duration}`;
    experienceSection.appendChild(p);
  });
  
  // Education
  document.getElementById("education").querySelector("p").textContent = resumeData.education;
  document.getElementById("communication").querySelector("p").textContent = resumeData.communication;
  document.getElementById("leadership").querySelector("p").textContent = resumeData.leadership;
  document.getElementById("references").querySelector("p").textContent = resumeData.references;
  
  // Download resume as PDF
  function downloadResume() {
    const element = document.querySelector('.resume'); 
    
    // Use html2canvas to capture the styled content
    html2canvas(element, {
      scale: 2, 
      useCORS: true 
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png'); 
      const { jsPDF } = window.jspdf; 
      const pdf = new jsPDF('p', 'mm', 'a4'); 
      
      // Calculate dimensions for the image to fit A4
      const imgWidth = 210; 
      const imgHeight = (canvas.height * imgWidth) / canvas.width; 
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight); 
      pdf.save('resume.pdf'); 
    }).catch(error => {
      console.error('Error generating PDF:', error);
      alert('Failed to download the resume. Please try again.');
    });
  }
  
  
  