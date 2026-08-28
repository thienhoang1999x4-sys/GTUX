const questionsData = [
  {
    correct: "C",
    title: "Bạn phát hiện đồng nghiệp trả lời người bệnh với thái độ chưa phù hợp. Bạn nên:",
    options: [
      "A. Phê bình trước mặt người bệnh.",
      "B. Im lặng.",
      "C. Góp ý riêng với đồng nghiệp sau khi công việc ổn định.",
      "D. Báo ngay lên Ban Giám đốc."
    ]
  },
  {
    correct: "C",
    title: "Người bệnh chờ hơn 30 phút và bắt đầu lớn tiếng tại quầy tiếp đón. NVYT nên:",
    options: [
      "A. Yêu cầu người bệnh giữ trật tự.",
      "B. Giải thích ngắn gọn rồi tiếp tục làm việc.",
      "C. Bình tĩnh xin lỗi, giải thích nguyên nhân và thông báo thời gian dự kiến.",
      "D. Mời bảo vệ xử lý."
    ]
  },
  {
    correct: "C",
    title: "Một người bệnh lớn tuổi không nghe rõ hướng dẫn dùng thuốc. Bạn nên:",
    options: [
      "A. Nói nhanh hơn.",
      "B. Nhờ người khác giải thích.",
      "C. Nói chậm, rõ ràng và kiểm tra lại đến khi người bệnh đã hiểu mới thôi.",
      "D. Ghi vào giấy rồi bỏ đi."
    ]
  },
  {
    correct: "C",
    title: "Người nhà liên tục hỏi: \"Bao giờ đến lượt?\" trong khi bạn chưa biết chính xác thời gian. Bạn nên:",
    options: [
      "A. Nói \"không biết\".",
      "B. Im lặng.",
      "C. Giải thích tình hình và hẹn cập nhật khi có thông tin.",
      "D. Đề nghị hỏi nơi khác."
    ]
  },
  {
    correct: "C",
    title: "Người bệnh phàn nàn vì đã lấy máu xét nghiệm rồi mà phải làm lại xét nghiệm. Cách ứng xử phù hợp là:",
    options: [
      "A. Nói do máy hỏng.",
      "B. Đổ lỗi cho đồng nghiệp.",
      "C. Giải thích lý do chuyên môn và xin lỗi vì sự bất tiện.",
      "D. Yêu cầu người bệnh hợp tác."
    ]
  },
  {
    correct: "C",
    title: "Người bệnh đang bức xúc và nói rất to. Bạn nên:",
    options: [
      "A. Tranh luận.",
      "B. Nói to hơn.",
      "C. Bình tĩnh lắng nghe, không ngắt lời và giải thích.",
      "D. Bỏ đi."
    ]
  },
  {
    correct: "C",
    title: "Sau khi giải thích, người bệnh vẫn chưa hiểu. Bạn nên:",
    options: [
      "A. Nói lại nguyên văn.",
      "B. Chuyển sang thuật ngữ chuyên môn.",
      "C. Giải thích bằng ví dụ đơn giản hơn.",
      "D. Kết thúc cuộc trao đổi."
    ]
  },
  {
    correct: "C",
    title: "Trong giờ cao điểm, đồng nghiệp nhờ hỗ trợ tiếp đón người bệnh. Bạn nên:",
    options: [
      "A. Từ chối.",
      "B. Chỉ hỗ trợ khi lãnh đạo yêu cầu.",
      "C. Chủ động hỗ trợ trong khả năng để giảm thời gian chờ.",
      "D. Bỏ công việc của mình để sang hỗ trợ cho bạn."
    ]
  },
  {
    correct: "C",
    title: "Một người bệnh quay video tại khu vực tiếp đón vì cho rằng chờ quá lâu. Bạn nên:",
    options: [
      "A. Giằng điện thoại.",
      "B. Yêu cầu xóa video.",
      "C. Bình tĩnh trao đổi, giải thích và mời đến khu vực phù hợp để giải quyết.",
      "D. Bỏ mặc."
    ]
  },
  {
    correct: "C",
    title: "Người bệnh muốn gặp bác sĩ ngay khi bác sĩ đang cấp cứu. Bạn nên:",
    options: [
      "A. Từ chối.",
      "B. Để người bệnh tự chờ.",
      "C. Giải thích lý do và thông báo thời gian dự kiến.",
      "D. Không trả lời."
    ]
  },
  {
    correct: "C",
    title: "Khi đang giải thích tình trạng bệnh cho một bệnh nhân lớn tuổi bị lãng tai, người bệnh liên tục hỏi lại những điều bạn vừa nói. Thái độ đúng mực nhất là:",
    options: [
      "A. Thể hiện sự khó chịu, nhăn mặt và nói nhanh cho xong.",
      "B. Gọi người nhà vào nghe thay, không nói chuyện với người bệnh nữa.",
      "C. Kiên nhẫn, nói to, chậm rãi, rõ ràng từng ý, có thể kết hợp viết ra giấy nếu cần thiết.",
      "D. Nói đùa cợt rằng bác lãng tai quá để không khí bớt căng thẳng."
    ]
  },
  {
    correct: "C",
    title: "Trong khi hướng dẫn, người bệnh liên tục cắt lời. Bạn nên:",
    options: [
      "A. Tỏ thái độ khó chịu.",
      "B. Dừng hướng dẫn.",
      "C. Bình tĩnh lắng nghe rồi tiếp tục giải thích.",
      "D. Mời người khác."
    ]
  },
  {
    correct: "C",
    title: "Bạn vô tình nói hơi lớn tiếng với người bệnh vì áp lực công việc. Sau đó nên:",
    options: [
      "A. Coi như không có chuyện gì.",
      "B. Giải thích mình bận.",
      "C. Chủ động xin lỗi và điều chỉnh thái độ.",
      "D. Tránh gặp lại."
    ]
  },
  {
    correct: "C",
    title: "Bệnh án điện tử bị lỗi, người bệnh phải chờ lâu. Bạn nên:",
    options: [
      "A. Để người bệnh tiếp tục chờ.",
      "B. Đổ lỗi cho phần mềm.",
      "C. Xin lỗi, giải thích nguyên nhân và cập nhật tiến độ xử lý.",
      "D. Bảo người bệnh về."
    ]
  },
  {
    correct: "C",
    title: "Bệnh nhân A đến khám vào giờ cao điểm, phòng khám đang rất đông. Bệnh nhân phàn nàn và lớn tiếng vì phải chờ hơn 1 tiếng rưỡi. Bạn là điều dưỡng phòng khám, bạn sẽ xử lý thế nào?",
    options: [
      "A. Lờ đi vì đang bận, coi như không nghe thấy.",
      "B. Lớn tiếng yêu cầu bệnh nhân giữ trật tự để người khác còn làm việc.",
      "C. Dừng tay, mỉm cười, xin lỗi vì sự chờ đợi, giải thích nhẹ nhàng về tình trạng đông bệnh nhân và kiểm tra lại số thứ tự giúp họ.",
      "D. Nói bệnh nhân nếu không chờ được thì có thể sang bệnh viện khác khám."
    ]
  },
  {
    correct: "B",
    title: "Khi thực hiện thủ thuật cho bệnh nhi, bé khóc thét và người mẹ tỏ ra rất xót con, có lời lẽ gay gắt với bạn vì \"bạn làm đau nên con khóc\". Cách ứng xử chuẩn mực là:",
    options: [
      "A. Trách người mẹ không hiểu đã có lời nói gay gắt với bạn.",
      "B. Dừng lại, đồng cảm với tâm lý xót con của người mẹ, nhẹ nhàng giải thích và hướng dẫn mẹ cách dỗ dành, giữ bé để thao tác an toàn nhất.",
      "C. Mời người mẹ ra khỏi phòng ngay lập tức.",
      "D. Bảo người mẹ dỗ con khi nào con nín thì làm tiếp."
    ]
  },
  {
    correct: "C",
    title: "Lãnh đạo khoa phân công cho bạn một nhiệm vụ đột xuất mà bạn chưa từng có kinh nghiệm xử lý, lo sợ sẽ xảy ra sai sót. Bạn nên làm gì?",
    options: [
      "A. Nhận lời ngay lập tức nhưng sau đó nhờ đồng nghiệp khác làm hộ.",
      "B. Thẳng thừng từ chối vì đó không phải việc của mình.",
      "C. Cảm ơn sự tin tưởng của lãnh đạo, nhưng khéo léo trình bày những hạn chế của bản thân và xin được hướng dẫn hoặc phối hợp cùng người có kinh nghiệm.",
      "D. Báo cáo vượt cấp lên Ban Giám đốc viện về việc trưởng khoa phân công sai."
    ]
  },
  {
    correct: "B",
    title: "Việc lắng nghe chủ động mang lại lợi ích lớn nhất là:",
    options: [
      "A. Rút ngắn cuộc trò chuyện.",
      "B. Giúp người bệnh cảm thấy được tôn trọng.",
      "C. Giảm số lượng hồ sơ.",
      "D. Tăng tốc độ khám bệnh."
    ]
  },
  {
    correct: "C",
    title: "Khi bạn có ý kiến đóng góp nhằm cải tiến quy trình khám bệnh tại khoa nhưng trái ngược với quan điểm của Trưởng khoa, cách giao tiếp phù hợp nhất là:",
    options: [
      "A. Cãi tay đôi với Trưởng khoa trong cuộc họp giao ban buổi sáng.",
      "B. Viết bài ẩn danh lên mạng xã hội của bệnh viện để phản đối.",
      "C. Đề đạt ý kiến một cách có cơ sở, dữ liệu cụ thể trong các cuộc họp chuyên môn hoặc gặp riêng để trao đổi trên tinh thần xây dựng.",
      "D. Im lặng, chấp nhận làm theo quy trình cũ dù biết nó không hiệu quả."
    ]
  },
  {
    correct: "D",
    title: "Bệnh nhân gửi tin nhắn qua Fanpage của bệnh viện bày tỏ thái độ rất tiêu cực và sử dụng từ ngữ xúc phạm về trải nghiệm khám bệnh hôm nay. Người trực Fanpage nên:",
    options: [
      "A. Chặn (Block) tài khoản của bệnh nhân ngay lập tức.",
      "B. Trả lời bằng thái độ thách thức, yêu cầu bệnh nhân có bằng chứng mới được nói.",
      "C. Xóa bình luận, tin nhắn để lãnh đạo không thấy.",
      "D. Phản hồi nhanh chóng, thể hiện sự thấu cảm, xin lỗi về những trải nghiệm không tốt và xin số điện thoại để trực tiếp lắng nghe, xử lý sự việc (offline)."
    ]
  }
];
