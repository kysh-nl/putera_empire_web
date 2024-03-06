document.addEventListener('DOMContentLoaded', function () {
  const quoteForm = document.getElementById('quote-form');

  quoteForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // For simplicity, let's just show a success message
    const name = document.getElementById('name').value;
    const insuranceType = document.getElementById('insurance-type').value;

    alert(`Thank you, ${name}! Your ${insuranceType} insurance quote is on its way.`);

    // You can add logic here to send the form data to a server for further processing.
  });
});
