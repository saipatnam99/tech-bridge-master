// pages/serviceDetails/[id].js

import { useRouter } from "next/router";
import { expertise } from "@/assets/data/dummydata"; // Your dummy data
// import styles from "../../styles/components/service.module.scss"; // SCSS styles

const ServiceDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Get the id from the URL

  // Find the corresponding service from the expertise data
  const service = expertise.find((item) => item.title.toLowerCase().replace(/ /g, "-") === id);

  if (!service) {
    return <p>Service not found.</p>;
  }

  return (
    <section className={"serviceDetails"}>
      <div className="container">
        <h1 className={"title"}>{service.title}</h1>
        <div className={"details"}>
          <div className={"image"}>
            <img src={service.cover} alt={service.title} className={"serviceImage"} />
          </div>
          <div className={"description"}>
            <h2>Description</h2>
            <ul>
              {service.desc.map((descItem, index) => (
                <li key={index}>{descItem.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
