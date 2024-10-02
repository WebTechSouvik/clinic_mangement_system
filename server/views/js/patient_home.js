import { patients } from "./data.js";

(function () {
	let currentBtn = 1;
	let pageShowStart = currentBtn;
	let pageShowEnd = currentBtn + 5;
	let currentPos = 0;

	const scrollContainer = document.querySelector(".scroll-container");
	const allPageLinks = document.querySelectorAll(".page-item");
	const prevBtn = document.querySelector(".prev-btn");
	const nextBtn = document.querySelector(".next-btn");
	const tableBody = document.querySelector("#table-body");

	console.log(tableBody);

	// Load content inside table based on page number
	function loadTableContent(currentBtn) {
		const start = currentBtn == 1 ? currentBtn * 10 - 10 : currentBtn * 10 - 10 - 1;
		const end = currentBtn * 10 - 1;
		const contents = patients.slice(start, end);

		tableBody.innerHTML = "";

		contents.forEach((content) => {
			const tr = document.createElement("tr");
			tr.innerHTML = `
        <td scope="row">${content.id}</td>
        <td class="text-center">${content.name}</td>
        <td class="text-center">${content.phone_number}</td>
        <td class="text-center">${content.gender}</td>
        <td class="text-center">${content.city}</td>
        <td class="text-center">
          <a href="/patient/details">
            <button type="submit" class="btn btn-primary btn-sm">View</button>
          </a>
        </td>
        <td class="text-center">
       
            <button type="submit" class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#modalDialogScrollableAppoinment">Appointment</button>
        
          <div class="modal fade" id="modalDialogScrollableAppoinment" tabindex="-1" aria-labelledby="modalDialogScrollableLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-md">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modalDialogScrollableLabel">Add Appoinment</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <!-- Add Patient Form -->
                  <form id="addPatientForm"  class="text-start"  enctype="multipart/form-data" action="/appoinment/add" method="post">
                    <div class="mb-3">
                      <label for="patientName" class="form-label">Patient Name</label>
                      <input type="text" class="form-control" id="patientName" value="John Doe" required readonly>
                    </div>
					<div class="mb-3">
              			<label for="appoinment_category" class="form-label">Appointment Category</label>
              			<select class="form-select" id="appoinment_category" required>
                			<option value="" selected disabled>Choose...</option>
                			<option value="orthopedic">Orthopedic</option>
                			<option value="dermatology">Dermatology</option>
                			<option value="dental">Dental</option>
                			<option value="others">Others</option>
              			</select>
            		</div>
					<div class="mb-3" id="otherCategoryField" style="display:none;">
             			 <label for="customCategory" class="form-label">Enter Appointment Category</label>
              			<input type="text" class="form-control" id="customCategory" placeholder="Enter appointment category">
            		</div>
                    <div class="mb-3">
                      <label for="clinicName" class="form-label">Clinic Name</label>
                      <input type="text" class="form-control" id="clinicName" placeholder="Enter clinic name" required>
                    </div>
                    <div class="mb-3">
                      <label for="venue" class="form-label">Clinic Venue</label>
                      <input type="text" class="form-control" id="venue" placeholder="Enter clinic venue"  required>
                    </div>
                    <div class="mb-3">
                      <label for="date" class="form-label">Appointment Date</label>
                      <input type="date" class="form-control" id="date" required>
                    </div>
					<div class="mb-3">
 						<label for="appointmentTime" class="form-label">Appointment Time</label>
  						<input type="time" class="form-control" id="appointmentTime" required>
					</div>
					<div class="mb-3">
 						<label for="doctorFirstName" class="form-label">Doctor First Name</label>
  						<input type="text" class="form-control" id="doctorFirstName" placeholder="Enter Doctor First Name" required>
					</div>
    				<div class="mb-3">
                        <label for="doctorlastName" class="form-label">Doctor Last Name</label>
                        <input type="text" class="form-control" id="doctorlastName" placeholder="Enter Doctor Last Name" required>
                    </div>
					<div class="mb-3">
                        <label for="doctorPhoneNo" class="form-label">Doctor Phone No.</label>
                        <input type="tel" class="form-control" id="doctorPhoneNo" placeholder="+1 (555) 123-4567" required>
                    </div>
					<div class="mb-3">
  						<label for="doctorAbout" class="form-label">Doctor About</label>
  						<textarea class="form-control" id="doctorAbout" rows="5" placeholder="Write about the doctor..." required></textarea>
					</div>

					<div class="mb-3">
                      <label for="fees" class="form-label">Fees</label>
                      <input type="number" class="form-control" id="fees" placeholder="Enter fees">
                    </div>

                    <!-- Image Upload Section -->
                    <div class="mb-3">
                      <label for="prescription" class="form-label">Upload Doctor Prescription</label>
                      <input type="file" class="form-control" id="prescription" name="prescription" accept="image/*">
                    </div>
                    <div class="d-flex justify-content-end">
                      <button type="submit" class="btn btn-primary">Appoinment</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td class="d-flex justify-content-center">
          <form action="#">
            <button type="submit" class="btn btn-danger btn-sm">Delete</button>
          </form>
        </td>
      `;
			tableBody.append(tr);
			// handleCategoryChange();
		});
	}

	// Highlight the current page button on click previous and next button
	function toggleBtn(e, val, max) {
		if (currentBtn == max) return;
		if (val == 1) {
			prevBtn.children[0].classList.remove("disabled");
		} else {
			nextBtn.children[0].classList.remove("disabled");
		}

		// Scroll left to show next page button
		if (currentBtn == pageShowEnd && val == 1) {
			scrollContainer.style.transform = `translateX(${currentPos - 45}px)`;
			currentPos -= 45;
			pageShowEnd++;
			pageShowStart++;
		}

		// Scroll right to show previous page button
		if (pageShowStart == currentBtn && val == -1) {
			scrollContainer.style.transform = `translateX(${currentPos + 45}px)`;
			currentPos += 45;
			pageShowStart--;
			pageShowEnd--;
		}

		allPageLinks.forEach((link) => {
			const children = link.children;
			if (link.innerText == (currentBtn + val).toString()) {
				children[0].classList.add("active-btn");
				loadTableContent(currentBtn + val);
			} else {
				children[0].classList.remove("active-btn");
			}
		});

		currentBtn = currentBtn + val;
		if (currentBtn == max) {
			e.target.classList.add("disabled");
		}
	}

	// Add event listener to previous and next button
	prevBtn.addEventListener("click", (e) => toggleBtn(e, -1, 1));
	nextBtn.addEventListener("click", (e) => toggleBtn(e, 1, 12));

	// Highlight the current page on direct click
	scrollContainer.addEventListener("click", (e) => {
		allPageLinks.forEach((link) => {
			const children = link.children;
			children[0].classList.remove("active-btn");
		});

		e.target.classList.add("active-btn");
		currentBtn = +e.target.innerText;
		loadTableContent(currentBtn);
	});

	loadTableContent(currentBtn);
})();
