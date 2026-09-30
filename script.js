let presentCount = 0;
let absentCount = 0;

function markAttendance(button, status) {

    const student = button.closest(".student");

    const presentButton = student.querySelector(".present-btn");
    const absentButton = student.querySelector(".absent-btn");

    // Already marked
    if (
        presentButton.classList.contains("selected-present") ||
        absentButton.classList.contains("selected-absent")
    ) {
        return;
    }

    if (status === "present") {
        presentCount++;

        presentButton.classList.add("selected-present");
    }

    if (status === "absent") {
        absentCount++;

        absentButton.classList.add("selected-absent");
    }

    document.getElementById("present").textContent = presentCount;
    document.getElementById("absent").textContent = absentCount;
}

function resetAttendance() {

    presentCount = 0;
    absentCount = 0;

    document.getElementById("present").textContent = 0;
    document.getElementById("absent").textContent = 0;

    const presentButtons = document.querySelectorAll(".present-btn");
    const absentButtons = document.querySelectorAll(".absent-btn");

    presentButtons.forEach(button => {
        button.classList.remove("selected-present");
    });

    absentButtons.forEach(button => {
        button.classList.remove("selected-absent");
    });
}