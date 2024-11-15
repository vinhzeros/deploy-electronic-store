export default  async function Home (){
  const res = await fetch("http://localhost:3000/products" );
  const data = await res.json();
  console.log(data);
  return (
  <>
      <div class="container">
                <div class="row mt-2 ">
                    <div class="col-md-9 m-0 p-0">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>

                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://file.hstatic.net/200000722513/file/web_slider_800x400_laptop_gaming.png" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item ">
                                    <img src="https://file.hstatic.net/200000722513/file/man_hinh_-_web_slider_800x400_65a0642fcf8349c484dc3f79b71c7deb.png" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item ">
                                    <img src="https://file.hstatic.net/200000722513/file/gearvn-sam-laptop-msi-nhan-mo-hinh-katana-cuc-ngau-banner_5127b896ec22483e9a3fd020925b6021.jpg" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-3 m-0">
                        <img class="img-fluid" src="https://file.hstatic.net/200000722513/file/slider_6-6_920a2a63301a4e6694c8502ccfac4929.png" alt="" />
                        <img class="img-fluid mt-3 mb-3" src="https://file.hstatic.net/200000722513/file/right_3_41b504bb8f4c4539adaf8155cbf7499c.png" alt="" />
                        <img class="img-fluid " src="https://file.hstatic.net/200000722513/file/bot_2_52563cb8e940437bade56e0a309cb088.png" alt="" />
                    </div>
                </div>
            </div>
    <h1>Đây là trang chủ</h1>
  
    </>
  );
};