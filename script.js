// function openNav() {
//   document.getElementById("mySidenav").style.width = "100%";
//   document.getElementById("mySidenav").style.padding = "200px 120px 0px 120px"; // restore the padding when opened
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("mySidenav").style.padding = "0"; // remove the padding when closed
// }

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  
  // Check if the screen width is less than or equal to 768px
  if (window.innerWidth <= 768) {
    document.getElementById("mySidenav").style.padding = "150px 80px 0px 80px"; // Apply smaller padding
  } else {
    document.getElementById("mySidenav").style.padding = "200px 120px 0px 120px"; // Apply larger padding
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.padding = "0"; // Remove padding when closed
}
// class Mygallary extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `
//     <section class="gallery-section">
//     <div class="container-fluid p-0 m-0">
//         <div class="row p-0 m-0">
//             <div class="col p-0 m-0">
//                 <div class="first-line-img d-flex">
//                     <div class="bg-img-one all-properties"></div>
//                     <div
//                         class="bg-img-two flex-here justify-content-center align-items-center d-flex flex-column">
//                         <hr class="hrs gallery-line">
//                         <h2 class="font-family-c header-headings text-center text-white photo-line-h ">PHOTO
//                             <br>GALLERY
//                         </h2>
//                         <span class="box-border">
//                             <i class="fa-solid text-white fa-chevron-up fa-rotate-90"></i>
//                         </span>
//                     </div>
//                     <div class="bg-img-three flex-here all-properties"></div>
//                 </div>
//                 <div class="first-line-img d-flex">
//                     <div class="bg-img-four all-properties"></div>
//                     <div
//                         class="bg-img-five hide-img all-properties flex-here justify-content-center align-items-center flex-column">
//                     </div>
//                     <div class="bg-img-six all-properties flex-here"></div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>
//     `;
//   }
// }

// customElements.define("Mygallary", imagegallary);

////////////////

document.getElementById('contactForm').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent default form submission

  const form = event.target;
  const overlay = document.getElementById('spinner-overlay');
  const successMessage = document.getElementById('success-message');

  // Show spinner overlay
  overlay.style.display = 'block';

  try {
    // Collect form data
    const formData = new FormData(form);

    // Send form data via fetch
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      successMessage.style.display = 'block';
      form.reset();
    } else {
      alert('There was an error submitting the form. Please try again.');
    }
  } catch (error) {
    alert('An unexpected error occurred. Please try again.');
    console.error(error);
  } finally {
    // Hide spinner overlay
    overlay.style.display = 'none';
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 5000); // Hide success message after 5 seconds
  }
});