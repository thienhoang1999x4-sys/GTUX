const questionsData = [
  {
    correct: "C",
    title: "Bạn phát hiện đồng nghiệp trả lời người bệnh với thái độ chưa phù hợp. Bạn nên:",
    options: [
      "Phê bình trước mặt người bệnh.",
      "Im lặng.",
      "Góp ý riêng với đồng nghiệp sau khi công việc ổn định.",
      "Báo ngay lên Ban Giám đốc."
    ]
  },
  {
    correct: "C",
    title: "Người bệnh chờ hơn 30 phút và bắt đầu lớn tiếng tại quầy tiếp đón. NVYT nên:",
    options: [
      "Yêu cầu người bệnh giữ trật tự.",
      "Giải thích ngắn gọn rồi tiếp tục làm việc.",
      "Bình tĩnh xin lỗi, giải thích nguyên nhân và thông báo thời gian dự kiến.",
      "Mời bảo vệ xử lý."
    ]
  },
  {
    correct: "C",
    title: "Một người bệnh lớn tuổi không nghe rõ hướng dẫn dùng thuốc. Bạn nên:",
    options: [
      "Nói nhanh hơn.",
      "Nhờ người khác giải thích.",
      "Nói chậm, rõ ràng và kiểm tra lại đến khi người bệnh đã hiểu mới thôi.",
      "Ghi vào giấy rồi bỏ đi."
    ]
  },
  {
    correct: "C",
    title: "Người nhà liên tục hỏi: \"Bao giờ đến lượt?\" trong khi bạn chưa biết chính xác thời gian. Bạn nên:",
    options: [
      "Nói \"không biết\".",
      "Im lặng.",
      "Giải thích tình hình và hẹn cập nhật khi có thông tin.",
      "Đề nghị hỏi nơi khác."
    ]
  },
  {
    correct: "C",
    title: "Người bệnh phàn nàn vì đã lấy máu xét nghiệm rồi mà phải làm lại xét nghiệm. Cách ứng xử phù hợp là:",
    options: [
      "Nói do máy hỏng.",
      "Đổ lỗi cho đồng nghiệp.",
      "Giải thích lý do chuyên môn và xin lỗi vì sự bất tiện.",
      "Yêu cầu người bệnh hợp tác."
    ]
  },
  {
    correct: "C",
    title: "Người bệnh đang bức xúc và nói rất to. Bạn nên:",
    options: [
      "Tranh luận.",
      "Nói to hơn.",
      "Bình tĩnh lắng nghe, không ngắt lời và giải thích.",
      "Bỏ đi."
    ]
  },
  {
    correct: "C",
    title: "Sau khi giải thích, người bệnh vẫn chưa hiểu. Bạn nên:",
    options: [
      "Nói lại nguyên văn.",
      "Chuyển sang thuật ngữ chuyên môn.",
      "Giải thích bằng ví dụ đơn giản hơn.",
      "Kết thúc cuộc trao đổi."
    ]
  },
  {
    correct: "C",
    title: "Trong giờ cao điểm, đồng nghiệp nhờ hỗ trợ tiếp đón người bệnh. Bạn nên:",
    options: [
      "Từ chối.",
      "Chỉ hỗ trợ khi lãnh đạo yêu cầu.",
      "Chủ động hỗ trợ trong khả năng để giảm thời gian chờ.",
      "Bỏ công việc của mình để sang hỗ trợ cho bạn."
    ]
  },
  {
    correct: "C",
    title: "Một người bệnh quay video tại khu vực tiếp đón vì cho rằng chờ quá lâu. Bạn nên:",
    options: [
      "Giằng điện thoại.",
      "Yêu cầu xóa video.",
      "Bình tĩnh trao đổi, giải thích và mời đến khu vực phù hợp để giải quyết.",
      "Bỏ mặc."
    ]
  },
  {
    correct: "C",
    title: "Người bệnh muốn gặp bác sĩ ngay khi bác sĩ đang cấp cứu. Bạn nên:",
    options: [
      "Từ chối.",
      "Để người bệnh tự chờ.",
      "Giải thích lý do và thông báo thời gian dự kiến.",
      "Không trả lời."
    ]
  },
  {
    correct: "C",
    title: "Khi đang giải thích tình trạng bệnh cho một bệnh nhân lớn tuổi bị lãng tai, người bệnh liên tục hỏi lại những điều bạn vừa nói. Thái độ đúng mực nhất là:",
    options: [
      "Thể hiện sự khó chịu, nhăn mặt và nói nhanh cho xong.",
      "Gọi người nhà vào nghe thay, không nói chuyện với người bệnh nữa.",
      "Kiên nhẫn, nói to, chậm rãi, rõ ràng từng ý, có thể kết hợp viết ra giấy nếu cần thiết.",
      "Nói đùa cợt rằng bác lãng tai quá để không khí bớt căng thẳng."
    ]
  },
  {
    correct: "C",
    title: "Trong khi hướng dẫn, người bệnh liên tục cắt lời. Bạn nên:",
    options: [
      "Tỏ thái độ khó chịu.",
      "Dừng hướng dẫn.",
      "Bình tĩnh lắng nghe rồi tiếp tục giải thích.",
      "Mời người khác."
    ]
  },
  {
    correct: "C",
    title: "Bạn vô tình nói hơi lớn tiếng với người bệnh vì áp lực công việc. Sau đó nên:",
    options: [
      "Coi như không có chuyện gì.",
      "Giải thích mình bận.",
      "Chủ động xin lỗi và điều chỉnh thái độ.",
      "Tránh gặp lại."
    ]
  },
  {
    correct: "C",
    title: "Bệnh án điện tử bị lỗi, người bệnh phải chờ lâu. Bạn nên:",
    options: [
      "Để người bệnh tiếp tục chờ.",
      "Đổ lỗi cho phần mềm.",
      "Xin lỗi, giải thích nguyên nhân và cập nhật tiến độ xử lý.",
      "Bảo người bệnh về."
    ]
  },
  {
    correct: "C",
    title: "Bệnh nhân A đến khám vào giờ cao điểm, phòng khám đang rất đông. Bệnh nhân phàn nàn và lớn tiếng vì phải chờ hơn 1 tiếng rưỡi. Bạn là điều dưỡng phòng khám, bạn sẽ xử lý thế nào?",
    options: [
      "Lờ đi vì đang bận, coi như không nghe thấy.",
      "Lớn tiếng yêu cầu bệnh nhân giữ trật tự để người khác còn làm việc.",
      "Dừng tay, mỉm cười, xin lỗi vì sự chờ đợi, giải thích nhẹ nhàng về tình trạng đông bệnh nhân và kiểm tra lại số thứ tự giúp họ.",
      "Nói bệnh nhân nếu không chờ được thì có thể sang bệnh viện khác khám."
    ]
  },
  {
    correct: "B",
    title: "Khi thực hiện thủ thuật cho bệnh nhi, bé khóc thét và người mẹ tỏ ra rất xót con, có lời lẽ gay gắt với bạn vì \"bạn làm đau nên con khóc\". Cách ứng xử chuẩn mực là:",
    options: [
      "Trách người mẹ không hiểu đã có lời nói gay gắt với bạn.",
      "Dừng lại, đồng cảm với tâm lý xót con của người mẹ, nhẹ nhàng giải thích và hướng dẫn mẹ cách dỗ dành, giữ bé để thao tác an toàn nhất.",
      "Mời người mẹ ra khỏi phòng ngay lập tức.",
      "Bảo người mẹ dỗ con khi nào con nín thì làm tiếp."
    ]
  },
  {
    correct: "C",
    title: "Lãnh đạo khoa phân công cho bạn một nhiệm vụ đột xuất mà bạn chưa từng có kinh nghiệm xử lý, lo sợ sẽ xảy ra sai sót. Bạn nên làm gì?",
    options: [
      "Nhận lời ngay lập tức nhưng sau đó nhờ đồng nghiệp khác làm hộ.",
      "Thẳng thừng từ chối vì đó không phải việc của mình.",
      "Cảm ơn sự tin tưởng của lãnh đạo, nhưng khéo léo trình bày những hạn chế của bản thân và xin được hướng dẫn hoặc phối hợp cùng người có kinh nghiệm.",
      "Báo cáo vượt cấp lên Ban Giám đốc viện về việc trưởng khoa phân công sai."
    ]
  },
  {
    correct: "B",
    title: "Việc lắng nghe chủ động mang lại lợi ích lớn nhất là:",
    options: [
      "Rút ngắn cuộc trò chuyện.",
      "Giúp người bệnh cảm thấy được tôn trọng.",
      "Giảm số lượng hồ sơ.",
      "Tăng tốc độ khám bệnh."
    ]
  },
  {
    correct: "C",
    title: "Khi bạn có ý kiến đóng góp nhằm cải tiến quy trình khám bệnh tại khoa nhưng trái ngược với quan điểm của Trưởng khoa, cách giao tiếp phù hợp nhất là:",
    options: [
      "Cãi tay đôi với Trưởng khoa trong cuộc họp giao ban buổi sáng.",
      "Viết bài ẩn danh lên mạng xã hội của bệnh viện để phản đối.",
      "Đề đạt ý kiến một cách có cơ sở, dữ liệu cụ thể trong các cuộc họp chuyên môn hoặc gặp riêng để trao đổi trên tinh thần xây dựng.",
      "Im lặng, chấp nhận làm theo quy trình cũ dù biết nó không hiệu quả."
    ]
  },
  {
    correct: "D",
    title: "Bệnh nhân gửi tin nhắn qua Fanpage của bệnh viện bày tỏ thái độ rất tiêu cực và sử dụng từ ngữ xúc phạm về trải nghiệm khám bệnh hôm nay. Người trực Fanpage nên:",
    options: [
      "Chặn (Block) tài khoản của bệnh nhân ngay lập tức.",
      "Trả lời bằng thái độ thách thức, yêu cầu bệnh nhân có bằng chứng mới được nói.",
      "Xóa bình luận, tin nhắn để lãnh đạo không thấy.",
      "Phản hồi nhanh chóng, thể hiện sự thấu cảm, xin lỗi về những trải nghiệm không tốt và xin số điện thoại để trực tiếp lắng nghe, xử lý sự việc (offline)."
    ]
  }
];
