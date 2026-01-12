import { useState } from "react";
import SurveyForm from "./SurveyForm";

const SurveyContainer = () => {
  const [surveyForm, setSurveyForm] = useState({
    name: "",
    email: "",
    movie: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (name, value) => {
    setSurveyForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!surveyForm.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!surveyForm.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(surveyForm.email)) {
      newErrors.email = "The email format is incorrect.";
    }

    if (!surveyForm.movie) {
      newErrors.movie = "Please choose your favorite movie.";
    }

    return newErrors;
  };

  const submitSurvey = () => {
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
    }
  };

  const resetSurvey = () => {
    setSurveyForm({
      name: "",
      email: "",
      movie: "",
      comment: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <SurveyForm
      surveyForm={surveyForm}
      errors={errors}
      isSubmitted={isSubmitted}
      onChange={handleChange}
      onSubmit={submitSurvey}
      onReset={resetSurvey}
    />
  );
};

export default SurveyContainer;
