import { useState } from "react";
import { useRouter } from "next/router";

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    graduation: "",
    passedOutYear: "",
    experience: "",
    noticePeriod: "",
    resume: null, // Added Resume Upload
  });

  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.mobileNumber) newErrors.mobileNumber = "Mobile Number is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.graduation) newErrors.graduation = "Graduation is required";
    if (!formData.passedOutYear) newErrors.passedOutYear = "Passed Out Year is required";
    if (!formData.resume) newErrors.resume = "Resume is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Allowed file types: PDF, DOC, DOCX (max 2MB)
    if (
      file &&
      ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type) &&
      file.size <= 2 * 1024 * 1024
    ) {
      setFormData({ ...formData, resume: file });
      setErrors({ ...errors, resume: "" });
    } else {
      setErrors({ ...errors, resume: "Invalid file type or size (Max: 2MB, Format: PDF, DOC, DOCX)" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("mobileNumber", formData.mobileNumber);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("graduation", formData.graduation);
    formDataToSend.append("passedOutYear", formData.passedOutYear);
    formDataToSend.append("experience", formData.experience);
    formDataToSend.append("noticePeriod", formData.noticePeriod);
    formDataToSend.append("resume", formData.resume);

    const getFormUrl = "https://getform.io/f/bwnnnzwa"; // Replace with your Getform URL

    try {
      const response = await fetch(getFormUrl, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Application submitted successfully!");
        router.push("/"); // Redirect to home page after submission

        // Reset Form
        setFormData({
          fullName: "",
          mobileNumber: "",
          email: "",
          graduation: "",
          passedOutYear: "",
          experience: "",
          noticePeriod: "",
          resume: null,
        });
      } else {
        alert("Submission failed, please try again.");
      }
    } catch (error) {
      alert("Error submitting form.");
    }
  };

  return (
    <div className="formContainer">
      <h1>Apply for a Job</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="formGroup">
          <label>Full Name*</label>
          <input type="text" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>

        <div className="formGroup">
          <label>Mobile Number*</label>
          <input type="number" value={formData.mobileNumber} onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })} />
          {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
        </div>

        <div className="formGroup">
          <label>Email*</label>
          <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="formGroup">
          <label>Highest Graduation*</label>
          <input type="text" value={formData.graduation} onChange={(e) => setFormData({ ...formData, graduation: e.target.value })} />
          {errors.graduation && <span className="error">{errors.graduation}</span>}
        </div>

        <div className="formGroup">
          <label>Passed Out Year*</label>
          <input type="number" value={formData.passedOutYear} onChange={(e) => setFormData({ ...formData, passedOutYear: e.target.value })} />
          {errors.passedOutYear && <span className="error">{errors.passedOutYear}</span>}
        </div>

        <div className="formGroup">
          <label>Experience (Optional)</label>
          <input type="text" value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} />
        </div>

        <div className="formGroup">
          <label>Notice Period (Optional)</label>
          <input type="text" value={formData.noticePeriod} onChange={(e) => setFormData({ ...formData, noticePeriod: e.target.value })} />
        </div>

        <div className="formGroup">
          <label>Upload Resume (PDF/DOC/DOCX, Max: 2MB)*</label>
          <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
          {errors.resume && <span className="error">{errors.resume}</span>}
        </div>

        <button type="submit" className="submitBtn">Submit</button>
      </form>
    </div>
  );
};

export default ApplyForm;
