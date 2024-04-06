function validateForm() {
    // Get form elements
    const firstName = document.querySelector('#first-name');
    const lastName = document.querySelector('#last-name');
    const dob = document.querySelector('#dob');
    const email = document.querySelector('#email');
    const gender = document.querySelector('input[name="gender"]:checked');
    const hobbies = document.querySelector('#hobbies');
  
    // Validate form
    if (firstName.value === '' || lastName.value === '' || dob.value === '' || email.value === '') {
      alert('Please fill in all required fields.');
      return false;
    }
  
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email.value)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    if (!gender.checked || hobbies.value === '') {
      alert('Please select a gender and a hobby.');
      return false;
    }
  
    // Submit form data to server
    submitFormData(firstName.value, lastName.value, dob.value, email.value, gender.value, hobbies.value);
  
    // Prevent default form submit
    return false;
  }
  
  // Submit form data to server
  function submitFormData(firstName, lastName, dob, email, gender, hobbies) {
    // Create new form data object
    const formData = new FormData();
  
    // Append form data to form data object
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('dob', dob);
    formData.append('email', email);
    formData.append('gender', gender);
    formData.append('hobbies', hobbies);
  
    // Send form data to server
    fetch('submit-form.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      // Handle response from server
      console.log(data);
      alert('Form data submitted successfully.');
    })
    .catch(error => {
      // Handle error
      console.error(error);
      alert('Error submitting form data.');
    });
  }