import React from "react";

function NgheThuat() {
  return (
    <section
      id="nghe-thuat"
      className="bg-[#F2E6EE] w-full h-[calc(100vh-50px)] min-w-[342px] min-h-[600px]"
    >
      <div className="w-full h-[calc(100%-50px)] flex justify-center items-center">
        <div className="w-full h-[calc(50%)]">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gridGap:"20px 20px",
                padding: "5px",
              }}
            >
              <img
                src="/images/nhanhac.jpg"
                alt="Nhạc"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                }}
              />
              <img
                src="/images/nghethua.jpg"
                alt="Nghệ thuật"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                }}
              />
              <img
                src="/images/cahue.jpg"
                alt="Ca Huế"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                }}
              />
              <img
                src="/images/bieudien.jpg"
                alt="Biểu diễn"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                margin: "10px",
              }}
            >
              <img
                src="/images/aodai.jpg"
                alt="Ảnh 1"
                style={{
                  width: "50%",
                  height: "400px",
                  objectFit: "fill",
                  borderRadius: "8px",
                  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                }}
              />
              <img
                src="/images/trinhdien.jpg"
                alt="Ảnh 2"
                style={{
                  width: "50%",
                  height: "400px",
                  objectFit: "fill",
                  borderRadius: "8px",
                  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                }}
              />
            </div>
          </div>
          </div>
    </section>
  );
}

export default NgheThuat;
