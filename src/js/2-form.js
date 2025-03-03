const formData = {
  email: "",
  message: ""
};

const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";


    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}


loadFormData();


form.addEventListener("input", (event) => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});


form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  if (!formData.email.trim() || !formData.message.trim()) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData); 

 
  localStorage.removeItem(STORAGE_KEY);
  formData.email = "";
  formData.message = "";
  form.reset(); 
});
