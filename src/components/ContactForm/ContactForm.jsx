import React, { useState } from "react";
import "./ContactForm.scss";
import sendMessage from "../../requests/sendMessage";
import formatFormData from "../../helpers/formatFormData";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    telegram: "",
    services: "",
    businessDescription: "",
    promotionGoals: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Зміна значення у formData
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проста валідація: перевірка, чи введено значення
    if (!formData.businessDescription.trim()) {
      setError("Please enter something before submitting");
      return;
    }

    // Отримання об'єкта даних для відправки
    const formattedData = formatFormData(formData);

    try {
      // Відправка даних на сервер
      await sendMessage(formattedData);

      // Логування в консоль успішної відправки
      console.log("Sent successfully:", formattedData);

      // Очищення полів вводу та скидання помилок
      setFormData({
        name: "",
        phoneNumber: "",
        telegram: "",
        services: "",
        businessDescription: "",
        promotionGoals: "",
      });
      setError(null);
    } catch (error) {
      // Виведення помилки в консоль у разі невдачі
      console.error("Error sending:", error);
      setError("An error occurred while sending. Try again.");
    }
  };

  return (
    <div className="formsent">
      <form onSubmit={handleSubmit}>
        <label className="form-text">
          Ім'я:
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label className="form-text">
          Номер телефону:
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label className="form-text">
          Телеграм:
          <input
            type="text"
            id="telegram"
            name="telegram"
            value={formData.telegram}
            onChange={handleChange}
          />
        </label>
        <label className="form-text">
          Які послуги:
          <input
            type="text"
            id="services"
            name="services"
            value={formData.services}
            onChange={handleChange}
          />
        </label>
        <label className="form-text">
          Опишіть бізнес:
          <textarea
            id="businessDescription"
            name="businessDescription"
            value={formData.businessDescription}
            onChange={handleChange}
            required
          />
        </label>
        <label className="form-text">
          Цілі просування:
          <textarea
            id="promotionGoals"
            name="promotionGoals"
            value={formData.promotionGoals}
            onChange={handleChange}
          />
        </label>
        {error && <p className="error-message">{error}</p>}
        <button className="form-button" type="submit">
          Відправити
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
