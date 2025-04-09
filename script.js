// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.section');

  // Function to deactivate all sections
  function clearActiveSections() {
    sections.forEach(section => section.classList.remove('active'));
  }

  // Add click event to each navigation button
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Get the target section ID from the button's data attribute
      const targetID = button.getAttribute('data-target');
      const targetSection = document.getElementById(targetID);

      // Hide all sections, then display the selected one after a brief delay
      clearActiveSections();
      setTimeout(() => {
        targetSection.classList.add('active');
      }, 100);
    });
  });
});
