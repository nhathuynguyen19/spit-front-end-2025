import React from "react";
import DiemNhan from "../components/DiemNhan";

function MoreInfo() {
  return (
    <section className="bg-white text-black font-playfair pb-4">
      <div className="block pt-8 pb-8 text-lg md:text-xl">
        <h2 className="font-bold italic text-center">
          Những Điểm Nhấn Không Thể Bỏ Lỡ
        </h2>
      </div>
      <DiemNhan
        title="Đêm Hoàng Cung"
        src="https://www.youtube.com/embed/HTwBETfg6M0?si=7UIoilbbOIvUCUC6"
        desc="Tái hiện lại không gian cung đình lộng lẫy, uy nghiêm của các vua
              chúa triều Nguyễn. Bạn sẽ được chiêm ngưỡng những nghi thức cung
              đình xưa, thưởng thức yến tiệc cung đình và say đắm trong những
              điệu múa cung đình uyển chuyển, tinh tế. Đây không chỉ là một buổi
              biểu diễn, mà còn là một chuyến đi ngược dòng thời gian, giúp bạn
              hiểu hơn về văn hóa và lối sống của hoàng tộc."
      />
      <DiemNhan
        title="Lễ hội Áo Dài"
        src="https://www.youtube.com/embed/afcQ0UDBAl4?si=T_bgXUTsHY1KGM_F"
        desc="Biến những cây cầu và con đường của Huế thành sàn diễn thời trang
              ấn tượng. Hàng trăm tà áo dài truyền thống và cách tân sẽ được
              trình diễn, tôn vinh vẻ đẹp duyên dáng của người phụ nữ Việt. Sắc
              màu của những tà áo dài hòa quyện với khung cảnh lãng mạn của sông
              Hương, cầu Trường Tiền tạo nên một bức tranh vô cùng thơ mộng và
              đáng nhớ."
      />
      <DiemNhan
        title="Lễ hội Đường phố"
        src="https://www.youtube.com/embed/gMrCB1vjuhY?si=nGv5yoqCjhB2HoGk"
        desc="Đắm mình trong không khí sôi động, náo nhiệt của Lễ hội đường phố.
              Các đoàn nghệ thuật trong và ngoài nước sẽ trình diễn những tiết
              mục ca múa nhạc, diễu hành đầy màu sắc trên các tuyến phố chính.
              Đây là cơ hội tuyệt vời để bạn giao lưu, chụp ảnh và tận hưởng
              những khoảnh khắc vui tươi cùng các nghệ sĩ và người dân."
      />
      <DiemNhan
        title="Lễ hội Ẩm thực"
        src="https://www.youtube.com/embed/iipX9nVbh14?si=h9eUpiGGuHRFIKRJ"
        desc="Khám phá thế giới ẩm thực phong phú của xứ Huế tại các khu chợ quê
              hay lễ hội ẩm thực. Bạn sẽ được thưởng thức từ những món ăn cung
              đình cầu kỳ, tinh tế đến các món ăn dân dã, đường phố nhưng vô
              cùng hấp dẫn như bún bò Huế, chè hẻm, bánh bột lọc... Mỗi món ăn
              đều là một câu chuyện văn hóa, thể hiện sự khéo léo và tâm hồn của
              người dân Huế."
      />
      <DiemNhan
        title="Giao lưu văn hóa quốc tế"
        src="https://www.youtube.com/embed/ir9fBEi8pIw?si=b_5imHL1PmVYfDay"
        desc="Festival Huế không chỉ là của riêng Huế, mà còn là cầu nối văn hóa
              giữa Việt Nam và thế giới. Hàng chục đoàn nghệ thuật đến từ các
              quốc gia như Hàn Quốc, Pháp, Nhật Bản, Tây Ban Nha… mang đến những
              màn trình diễn độc đáo, đa dạng, giúp bạn mở rộng tầm mắt và trải
              nghiệm những nền văn hóa khác nhau."
      />
    </section>
  );
}

export default MoreInfo;
