import React from 'react'

const Contactinfo = () => {
  return (
    <div>
           <div className="container mt-5">
        {/* Top Info Cards */}
     <div className="row text-center mb-5 ms-lg-5 me-lg-5">
  <div className="col-md-4 mb-4">
    <div className="p-4 bg-white rounded shadow-sm">
      <div className="mb-3">
        <div className="d-inline-flex justify-content-center align-items-center bg-primary rounded-circle" style={{ width: "60px", height: "60px" }}>
          <i className="bi bi-geo-alt-fill text-white fs-4"></i>
        </div>
      </div>
      <p className="mb-0">House #5, Street Number #98, Brasília-70000-000, Brazil.</p>
    </div>
  </div>

  <div className="col-md-4 mb-4">
    <div className="p-4 bg-white rounded shadow-sm">
      <div className="mb-3">
        <div className="d-inline-flex justify-content-center align-items-center bg-primary rounded-circle" style={{ width: "60px", height: "60px" }}>
          <i className="bi bi-envelope-fill text-white fs-4"></i>
        </div>
      </div>
      <p className="mb-0">
        info@example.com<br />info@example.com
      </p>
    </div>
  </div>

  <div className="col-md-4 mb-4">
    <div className="p-4 bg-white rounded shadow-sm">
      <div className="mb-3">
        <div className="d-inline-flex justify-content-center align-items-center bg-primary rounded-circle" style={{ width: "60px", height: "60px" }}>
          <i className="bi bi-telephone-fill text-white fs-4"></i>
        </div>
      </div>
      <p className="mb-0">
        +208-666-01112<br />+380961381877
      </p>
    </div>
  </div>
</div>



      </div>
    </div>
  )
}

export default Contactinfo
