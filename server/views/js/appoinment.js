import { appoinments } from "./data.js";

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
	console.log(tableBody)

	// load content inside table basis on page number
	function loadTableContent(currentBtn) {
		const start = currentBtn * 9 - 9 + 1;
		const end = currentBtn * 9 + 1;
		const contents = appoinments.slice(start, end);
		tableBody.innerHTML = "";
		contents.forEach((content) => {
			const tr = document.createElement("tr");
			tr.innerHTML = ` 
                        <td scope="row" class="text-center">${content.clinic_name}</td>
                         <td class="text-center">${content.patient}</td>
                                        <td class="text-center">${content.date}</td>
                                        <td class="text-center">${content.time}</td>

                                    
                                        <td class="text-center">
                                            <a href="/appoinment/detalis">
                                                <button type="submit" class="btn btn-primary btn-sm">View</button>
                                            </a>
                                        </td>
                                          <td class="text-center">
                                            <a href="/medicine/1234">
                                                <button type="submit" class="btn btn-primary btn-sm">View</button>
                                            </a>
                                        </td>
                                          <td class="text-center">
                                            <a href="/test/1234">
                                                <button type="submit" class="btn btn-primary btn-sm">View</button>
                                            </a>
                                        </td>

                                        <td class="text-center d-flex justify-content-center">
                                       
                                            <a href="">
                                                <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                                            </a>
                                        </td>`

			tableBody.append(tr);
		});
	}


	// highlight the current page button on click previous and next button

	function toggleBtn(e, val, max) {
		if (currentBtn == max) return;
		if (val == 1) {
			prevBtn.children[0].classList.remove("disabled");
		} else {
			nextBtn.children[0].classList.remove("disabled");
		}

		// scroll left for show next page button

		if (currentBtn == pageShowEnd && val == 1) {
			scrollContainer.style.transa = `translateX(${currentPos - 45
				}px)`;
			currentPos -= 45;
			pageShowEnd++;
			pageShowStart++;
		}

		// scroll right for show previous page button           <td>${content.clinic_name}</td>

		if (pageShowStart == currentBtn && val == -1) {
			scrollContainer.style.transa = `translateX(${currentPos + 45
				}px)`;
			currentPos += 45;
			pageShowStart--;
			pageShowEnd--;
		}

		allPageLinks.forEach((link) => {
			if (link.innerText == (currentBtn + val).toString()) {
				const children = link.children;
				children[0].classList.add("active-btn");

				loadTableContent(currentBtn + val);
			} else {
				const children = link.children;
				children[0].classList.remove("active-btn");
			}
		});

		currentBtn = currentBtn + val;
		if (currentBtn == max) {
			e.target.classList.add("disabled");
		}
	}

	// add event listener to previous and next button
	prevBtn.addEventListener("click", (e) => toggleBtn(e, -1, 1));
	nextBtn.addEventListener("click", (e) => toggleBtn(e, 1, 12));

	// highlight the current page direct click on page button

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
