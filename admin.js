function logout() {
    // Optional: Clear any session or local storage data
    localStorage.clear();
    sessionStorage.clear();

    // Redirect to home page
    window.location.href = 'home.html'; 
}

document.addEventListener("DOMContentLoaded", function() {
    const statusItems = document.querySelectorAll(".course-box ul li");
    const boxes = document.querySelectorAll(".box");
  
    statusItems.forEach(item => {
      item.addEventListener("click", function() {
        statusItems.forEach(i => i.classList.remove("active"));
        this.classList.add("active");
  
        const status = this.textContent.toLowerCase();
        updateTaskStatus(status);
      });
    });
  
    function updateTaskStatus(status) {
      boxes.forEach(box => {
        if (status === "finished") {
          if (box.dataset.status === "in-progress") {
            box.dataset.status = "finished";
            box.dataset.date = new Date().toLocaleDateString();
            box.querySelector("p").textContent = "Task finished on " + box.dataset.date;
          }
        } else if (status === "in progress") {
          box.dataset.status = "in-progress";
          box.dataset.date = "";
          box.querySelector("p").textContent = box.querySelector("p").textContent.split(" - ")[0] + " - progress";
        }
      });
    }
  });
  function logout() {
    alert("Logging out...");
    // Implement actual logout logic if needed
}

function logout() {
  alert("Logging out...");
  // Implement actual logout logic if needed
}
