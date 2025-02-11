async function fetchData() {
    try {
        const response = await fetch('your-api-endpoint'); 
        const data = await response.json();

        if (!data || data.length === 0) {  
            document.querySelector('.no-history').style.display = 'block';
            document.querySelector('.no-history').style.display = 'block';
            document.querySelector('.trackHistory').style.display = 'none';

        } else {
            document.querySelector('.no-history').style.display = 'none';

            const progress = document.querySelector('.requested-task-progress');
            if (progress) {
                progress.innerHTML = '';

                const progressElement = document.createElement('progress');
                progressElement.value = 50;
                progressElement.max = 100; 
                progress.appendChild(progressElement);
            }
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        document.querySelector('.no-history').style.display = 'block';
        document.querySelector('.trackHistory').style.display = 'none';

    }
}

fetchData();



    document.querySelector(".feedback-btn").addEventListener("click", () => {
      document.getElementById("feedbackModal").style.display = "block";
    });
  
    // Handle Star Rating Clicks
    document.querySelectorAll(".star").forEach((star) => {
      star.addEventListener("click", function () {
        let value = this.getAttribute("data-value");
        document.querySelectorAll(".star").forEach((s) => {
          s.classList.remove("active");
        });
        for (let i = 0; i < value; i++) {
          document.querySelectorAll(".star")[i].classList.add("active");
        }
      });
    });
  
  function closeFeedbackForm() {
    document.getElementById("feedbackModal").style.display = "none";
  }
  
  function submitFeedback() {
    let feedbackText = document.getElementById("feedbackText").value;
    let rating = document.querySelectorAll(".star.active").length;
    let feedbackButton = document.querySelector(".feedback-btn"); // Select the feedback button
  
    if (!feedbackText.trim()) {
      alert("Please enter your feedback.");
      return;
    }
  
    // Simulate feedback submission (You can replace this with an actual API request)
    alert(`Thank you for your feedback!\nRating: ${rating} stars\nMessage: ${feedbackText}`);
  
    // Disable the Feedback Button after submission
    feedbackButton.setAttribute("disabled", "true");
    feedbackButton.style.backgroundColor = "#ccc"; // Optional: Change style to indicate disabled state
    feedbackButton.innerText = "Submitted"; // Change button text
  
    // Close Modal & Reset Form
    document.getElementById("feedbackModal").style.display = "none";
    document.getElementById("feedbackText").value = "";
    document.querySelectorAll(".star").forEach((s) => s.classList.remove("active"));
  }
  
  