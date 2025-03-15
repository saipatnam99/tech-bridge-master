import Link from "next/link";


const careers = [
  {
    id: "bpo-services",
    title: "BPO Services (Chat & Voice Process)",
    description: "Customer service and support.",
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Build modern applications.",
  },
  {
    id: "medical-billing",
    title: "Medical Billing",
    description: "Processing medical claims efficiently.",
  },
];

const Career = () => {
  return (
    <div className="careerContainer">
      <h1>Career Opportunities</h1>
      <div className="careerList">
        {careers.map((job) => (
          <div key={job.id} className="careerItem">
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <Link href={`/career/${job.id}`}>
              <button className={"applyBtn"}>Apply Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
