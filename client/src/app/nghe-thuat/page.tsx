import React from "react";

function NgheThuat() {
  return (
    <section
      id="nghe-thuat"
      className="bg-[#F2E6EE] w-full h-[calc(100vh-50px)] min-w-[342px] min-h-[600px]"
    >
      <div className="cards">
        <div className="cards__inner">
          <div className="card">
            <img src="/images/nhanhac.png" alt="Nhạc" />
            <p>
              Nhã nhạc cung đình Huế – Di sản văn hóa phi vật thể được UNESCO
              công nhận, từng vang lên trong các nghi lễ triều đình Nguyễn.
            </p>
          </div>

          <div className="card">
            <img src="/images/nghethuat.jpg" alt="Nghệ thuật" />
            <p>
              Kiến trúc cung đình – Hoàng thành, lăng tẩm vua Nguyễn, chùa Thiên
              Mụ, điện Thái Hòa…
            </p>
          </div>

          <div className="card">
            <img src="/images/cahue.jpg" alt="Ca Huế" />
            <p>
              Ca Huế – Hình thức ca nhạc truyền thống trên sông Hương, kết hợp
              nhạc cụ dân tộc như đàn tranh, đàn nguyệt, sáo trúc.
            </p>
          </div>

          <div className="card">
            <img src="/images/bieudien.jpeg" alt="Biểu diễn" />
            <p>
              Giao lưu nghệ thuật quốc tế, kết hợp hiện đại và truyền thống.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NgheThuat;
