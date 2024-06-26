import React, { useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import mockData from "./mockData.json";
import logo from "./logo.png";

  const App: React.FC = () => {
  const [selectedMajor, setSelectedMajor] = useState<string | null>(null);
  const [jobResults, setJobResults] = useState<any[]>([]);
  const apiKey = "5453bcb93d4fe3f86a1422daf97f29c7ab6be4f792791d89523a60893db38576";

  const majors: string[] = [
    "Accounting",
    "Agricultural Business",
    "Animal Science",
    "Anthropology",
    "Architecture",
    "Art History",
    "Biochemistry",
    "Biology",
    "Business Administration",
    "Chemical Engineering",
    "Chemistry",
    "Civil Engineering",
    "Communications",
    "Computer Science",
    "Criminal Justice",
    "Dental Hygiene",
    "Economics",
    "Education",
    "Electrical Engineering",
    "English",
    "Environmental Science",
    "Fashion Design",
    "Finance",
    "Food Science",
    "Graphic Design",
    "Health Science",
    "History",
    "Hospitality Management",
    "Industrial Engineering",
    "Information Technology",
    "Interior Design",
    "International Relations",
    "Journalism",
    "Kinesiology",
    "Linguistics",
    "Management",
    "Marketing",
    "Mathematics",
    "Mechanical Engineering",
    "Medical Technology",
    "Music",
    "Nursing",
    "Nutrition",
    "Occupational Therapy",
    "Pharmacy",
    "Philosophy",
    "Physical Therapy",
    "Physics",
    "Political Science",
    "Psychology",
    "Public Relations",
    "Radiology",
    "Social Work",
    "Sociology",
    "Software Engineering",
    "Spanish",
    "Speech-Language Pathology",
    "Sports Management",
    "Statistics",
    "Theater",
    "Urban Planning",
    "Veterinary Science",
    "Web Development",
    "Wildlife Biology",
    "Women’s Studies",
    "Zoology",
    "Accounting",
    "Agricultural Business",
    "Animal Science",
    "Anthropology",
    "Architecture",
    "Art History",
    "Biochemistry",
    "Biology",
    "Business Administration",
    "Chemical Engineering",
    "Chemistry",
    "Civil Engineering",
    "Communications",
    "Computer Science",
    "Criminal Justice",
    "Dental Hygiene",
    "Economics",
    "Education",
    "Electrical Engineering",
    "English",
    "Environmental Science",
    "Fashion Design",
    "Finance",
    "Food Science",
    "Graphic Design",
    "Health Science",
    "History",
    "Hospitality Management",
    "Industrial Engineering",
    "Information Technology",
    "Interior Design",
    "International Relations",
    "Journalism",
    "Kinesiology",
    "Linguistics",
    "Management",
    "Marketing",
    "Mathematics",
    "Mechanical Engineering",
    "Medical Technology",
    "Music",
    "Nursing",
    "Nutrition",
    "Occupational Therapy",
    "Pharmacy",
    "Philosophy",
    "Physical Therapy jobs",
    "Physics",
    "Political Science",
    "Psychology",
    "Public Relations",
    "Radiology",
    "Social Work",
    "Sociology",
    "Software Engineering",
    "Spanish",
    "Speech-Language Pathology",
    "Sports Management",
    "Statistics",
    "Theater",
    "Urban Planning",
    "Veterinary Science",
    "Web Development",
    "Wildlife Biology",
    "Women’s Studies",
    "Zoology",
  
  ];

  const handleMajorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMajor(event.target.value);
  };


  useEffect(() => {
    const fetchJobsByMajor = () => {
      if (selectedMajor) {
        const filteredJobs = mockData.filter(job => job.major === selectedMajor);
        setJobResults(filteredJobs);
      }
    };

    fetchJobsByMajor();
  }, [selectedMajor]);

  return (

    <>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="container mt-5">
        <div className="text-right mb-3">
          <select
            id="majorSelect"
            onChange={handleMajorChange}
            value={selectedMajor || ""}
            className="ml-2"
          >
            <option value= "" disabled>
              Select a major
            </option>    
            {majors.map((major, index) => (
              <option key={index} value={major}>
                 {major}
              </option>
            ))}
          </select>
        </div>
        {/* Wrap the boxes in a container with horizontal scrolling */}
        <div className="scroll-container">
          {jobResults && jobResults.slice(0, 9).map((job, index) => (
            <div key={index} className="placeholder-box">
              <div className="title-box">{job.title}</div>
              <p className="placeholder-text">{ job.snippet}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;

 