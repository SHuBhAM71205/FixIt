// async function fetchData() {
//     try {
//         const response = await fetch('your-api-endpoint'); 
//         const data = await response.json();

//         if (!data || data.length === 0) {  
//             document.querySelector('.no-history').style.display = 'block';
//             document.querySelector('.no-history').style.display = 'block';
//             document.querySelector('.trackHistory').style.display = 'none';

//         } else {
//             document.querySelector('.no-history').style.display = 'none';

//             const progress = document.querySelector('.requested-task-progress');
//             if (progress) {
//                 progress.innerHTML = '';

//                 const progressElement = document.createElement('progress');
//                 progressElement.value = 50;
//                 progressElement.max = 100; 
//                 progress.appendChild(progressElement);
//             }
//         }
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         document.querySelector('.no-history').style.display = 'block';
//         document.querySelector('.trackHistory').style.display = 'none';

//     }
// }

// fetchData();



document.addEventListener("DOMContentLoaded", () => {
    // Open Feedback Modal
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
  });
  
  // Close Feedback Modal
  function closeFeedbackForm() {
    document.getElementById("feedbackModal").style.display = "none";
  }
  
  // Handle Form Submission
  function submitFeedback() {
    let feedbackText = document.getElementById("feedbackText").value;
    let rating = document.querySelectorAll(".star.active").length;
  
    if (!feedbackText.trim()) {
      alert("Please enter your feedback.");
      return;
    }
  
    alert(`Thank you for your feedback!\nRating: ${rating} stars\nMessage: ${feedbackText}`);
    
    // Close Modal & Reset Form
    document.getElementById("feedbackModal").style.display = "none";
    document.getElementById("feedbackText").value = "";
    document.querySelectorAll(".star").forEach((s) => s.classList.remove("active"));
  }
  