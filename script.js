function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
 
class Mygallary extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="gallery-section">
    <div class="container-fluid p-0 m-0">
        <div class="row p-0 m-0">
            <div class="col p-0 m-0">
                <div class="first-line-img d-flex">
                    <div class="bg-img-one all-properties"></div>
                    <div
                        class="bg-img-two flex-here justify-content-center align-items-center d-flex flex-column">
                        <hr class="hrs gallery-line">
                        <h2 class="font-family-c header-headings text-center text-white photo-line-h ">PHOTO
                            <br>GALLERY
                        </h2>
                        <span class="box-border">
                            <i class="fa-solid text-white fa-chevron-up fa-rotate-90"></i>
                        </span>
                    </div>
                    <div class="bg-img-three flex-here all-properties"></div>
                </div>
                <div class="first-line-img d-flex">
                    <div class="bg-img-four all-properties"></div>
                    <div
                        class="bg-img-five hide-img all-properties flex-here justify-content-center align-items-center flex-column">
                    </div>
                    <div class="bg-img-six all-properties flex-here"></div>
                </div>
            </div>
        </div>
    </div>
</section>
    `;
  }
}

customElements.define("Mygallary", imagegallary);

