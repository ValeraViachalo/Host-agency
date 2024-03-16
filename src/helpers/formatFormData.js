function formatFormData(formData) {
  const labels = {
    name: "Ім'я: ",
    phoneNumber: "Номер телефону: ",
    businessDescription: "Опис бізнесу: ",
    promotionGoals: "Цілі просування: ",
  };

  let formattedData = "";

  for (const key in formData) {
    if (formData[key]) {
      formattedData += `${labels[key]}${formData[key]}\n`;
    }
  }

  return formattedData;
}

export default formatFormData;
