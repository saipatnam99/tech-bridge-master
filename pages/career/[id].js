import { useRouter } from "next/router";
import Link from "next/link";


const jobDetails = {
  "bpo-services": {
    title: "BPO Services (Chat & Voice Process)",
    experience: "0 - 10 years",
    education: "Any Graduate",
    responsibilities: [
      "Handle customer queries via chat & voice",
      "Resolve customer complaints efficiently",
      "Ensure high-quality service delivery",
    ],
  },
  "web-development": {
    title: "Web Development",
    experience: "1 - 10 years",
    education: "B.Tech, MCA, or related field",
    responsibilities: [
      "Develop and maintain websites",
      "Collaborate with designers and backend developers",
      "Ensure high performance and responsiveness",
    ],
  },
  "medical-billing": {
    title: "Medical Billing",
    experience: "0 - 8 years",
    education: "Healthcare or Finance Background",
    responsibilities: [
      "Process insurance claims and billing",
      "Ensure compliance with medical coding standards",
      "Work with clients to resolve disputes",
    ],
  },
};

const JobDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const job = jobDetails[id];

  if (!job) {
    return <h1>Job not found</h1>;
  }

  return (
    <div className={"jobContainer"}>
      <h1>{job.title}</h1>
      <p><strong>Experience:</strong> {job.experience}</p>
      <p><strong>Educational Qualification:</strong> {job.education}</p>
      <h2>Roles & Responsibilities:</h2>
      <ul>
        {job.responsibilities.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
      <Link href="/apply">
        <button className={"applyNowBtn"}>Apply Now</button>
      </Link>
    </div>
  );
};

export default JobDetail;
