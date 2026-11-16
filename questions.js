const questionsData = [
  {
    correct: "B",
    title: "Khi người bệnh đến khám, nhân viên y tế nên làm gì đầu tiên?",
    options: [
      "A. Yêu cầu người bệnh lấy số thứ tự.",
      "B. Chào hỏi, hướng dẫn người bệnh với thái độ thân thiện.",
      "C. Tiếp tục làm việc riêng.",
      "D. Yêu cầu người bệnh tự tìm phòng khám."
    ]
  },
  {
    correct: "C",
    title: "Khi người bệnh lo lắng trước phẫu thuật NVYT nên làm gì?",
    options: [
      "A. Nói rằng không có gì phải lo lắng.",
      "B. Yêu cầu người bệnh không được hỏi nhiều.",
      "C. Lắng nghe, động viên và giải thích trong phạm vi chuyên môn.",
      "D. Đề nghị người bệnh tự hỏi bác sĩ."
    ]
  },
  {
    correct: "D",
    title: "Khi người bệnh hỏi về nguy cơ của phẫu thuật, nhân viên y tế nên làm gì?",
    options: [
      "A. Khẳng định phẫu thuật chắc chắn thành công.",
      "B. Né tránh câu hỏi.",
      "C. Tự đưa ra những cam kết ngoài chuyên môn.",
      "D. Giải thích trong phạm vi chuyên môn và hướng dẫn hỏi bác sĩ khi cần."
    ]
  },
  {
    correct: "B",
    title: "Khi người bệnh lớn tiếng tại quầy tiếp đón, nhân viên y tế nên làm gì?",
    options: [
      "A. Lớn tiếng yêu cầu người bệnh giữ trật tự.",
      "B. Bình tĩnh lắng nghe, trao đổi và tìm nguyên nhân bức xúc.",
      "C. Bỏ mặc người bệnh.",
      "D. Đe dọa mời bảo vệ ngay trong mọi trường hợp."
    ]
  },
  {
    correct: "D",
    title: "Khi người bệnh xúc phạm nhân viên y tế, cách xử lý phù hợp nhất là gì?",
    options: [
      "A. Xúc phạm lại để đáp trả.",
      "B. Im lặng chịu đựng trong mọi tình huống.",
      "C. Tự ý chấm dứt việc chăm sóc.",
      "D. Giữ bình tĩnh, đặt giới hạn giao tiếp và báo người có trách nhiệm nếu cần."
    ]
  },
  {
    correct: "A",
    title: "Khi xảy ra tranh cãi giữa người bệnh và nhân viên y tế, người chứng kiến nên làm gì?",
    options: [
      "A. Bình tĩnh hỗ trợ, lắng nghe các bên và báo người phụ trách khi cần.",
      "B. Đứng về phía đồng nghiệp mà không tìm hiểu sự việc.",
      "C. Quay video và đăng lên mạng xã hội.",
      "D. Tham gia tranh cãi để bảo vệ quan điểm cá nhân."
    ]
  },
  {
    correct: "C",
    title: "Khi gặp lãnh đạo bệnh viện, nhân viên nên có thái độ như thế nào?",
    options: [
      "A. Thờ ơ, không cần chào hỏi.",
      "B. Chỉ chào khi lãnh đạo chào trước.",
      "C. Chào hỏi lễ phép, thái độ nghiêm túc và tôn trọng.",
      "D. Tránh tiếp xúc để không bị giao việc."
    ]
  },
  {
    correct: "A",
    title: "Khi lãnh đạo góp ý về công việc, nhân viên nên làm gì?",
    options: [
      "A. Lắng nghe nghiêm túc, tiếp thu và điều chỉnh phù hợp.",
      "B. Ngắt lời để giải thích ngay.",
      "C. Phản ứng khó chịu vì cảm thấy bị phê bình.",
      "D. Im lặng nhưng không thực hiện nội dung đã thống nhất."
    ]
  },
  {
    correct: "B",
    title: "Khi lãnh đạo đang phát biểu hoặc giao nhiệm vụ, nhân viên nên làm gì?",
    options: [
      "A. Nói chuyện riêng với đồng nghiệp.",
      "B. Tập trung lắng nghe, không ngắt lời và ghi lại nội dung cần thiết.",
      "C. Sử dụng điện thoại cho việc riêng.",
      "D. Bỏ đi khi chưa nghe xong."
    ]
  },
  {
    correct: "D",
    title: "Khi đồng nghiệp mắc lỗi trong công việc, cách ứng xử phù hợp nhất là gì?",
    options: [
      "A. Phê bình gay gắt trước tập thể.",
      "B. Kể lỗi của đồng nghiệp cho nhiều người.",
      "C. Che giấu lỗi dù có nguy cơ ảnh hưởng người bệnh.",
      "D. Góp ý trên tinh thần xây dựng và báo cáo theo quy định nếu cần."
    ]
  },
  {
    correct: "A",
    title: "Khi cần nhờ đồng nghiệp hỗ trợ công việc, bạn nên làm gì?",
    options: [
      "A. Đề nghị lịch sự, nói rõ nội dung cần hỗ trợ và cảm ơn.",
      "B. Ra lệnh cho đồng nghiệp thực hiện.",
      "C. Cho rằng đồng nghiệp có trách nhiệm phải giúp mình.",
      "D. Tỏ thái độ khó chịu nếu đồng nghiệp chưa trả lời ngay."
    ]
  },
  {
    correct: "B",
    title: "Vì sao nhân viên cần giữ trật tự khi lãnh đạo đang phát biểu trong cuộc họp?",
    options: [
      "A. Vì lãnh đạo không muốn nghe ý kiến của nhân viên.",
      "B. Vì giữ trật tự thể hiện sự tôn trọng người phát biểu và những người tham dự.",
      "C. Vì nhân viên không được phép trao đổi bất kỳ nội dung gì.",
      "D. Vì chỉ cần giữ trật tự khi có lãnh đạo cấp cao tham dự."
    ]
  },
  {
    correct: "C",
    title: "Khi lãnh đạo đang phổ biến nhiệm vụ, nhân viên nói chuyện riêng gây ảnh hưởng đến người xung quanh là hành vi như thế nào?",
    options: [
      "A. Bình thường vì không ảnh hưởng đến người nói chuyện.",
      "B. Chấp nhận được nếu nội dung nói chuyện không liên quan đến cuộc họp.",
      "C. Không phù hợp vì gây mất tập trung và thể hiện sự thiếu tôn trọng cuộc họp.",
      "D. Không có vấn đề nếu người nói chuyện vẫn nghe được nội dung chính."
    ]
  },
  {
    correct: "A",
    title: "Khi muốn phát biểu ý kiến trong cuộc họp, nhân viên nên làm gì?",
    options: [
      "A. Xin phép chủ trì hoặc chờ đến lượt phát biểu.",
      "B. Nói ngay khi có ý kiến, không cần quan tâm người khác đang nói.",
      "C. Trao đổi riêng với người bên cạnh trong lúc lãnh đạo phát biểu.",
      "D. Nói to để mọi người chú ý đến ý kiến của mình."
    ]
  },
  {
    correct: "D",
    title: "Vì sao không nên nói chuyện riêng khi đồng nghiệp đang phát biểu?",
    options: [
      "A. Vì người phát biểu có thể không thích nghe tiếng nói chuyện.",
      "B. Vì chỉ cần giữ trật tự khi lãnh đạo phát biểu.",
      "C. Vì người nói chuyện riêng có thể bị nhắc nhở.",
      "D. Vì gây ảnh hưởng đến người phát biểu và quyền được lắng nghe của những người tham dự."
    ]
  },
  {
    correct: "B",
    title: "Khi có ý kiến khác với nội dung lãnh đạo đang trình bày, nhân viên nên làm gì?",
    options: [
      "A. Trao đổi ngay với người ngồi bên cạnh để tìm người đồng tình.",
      "B. Lắng nghe hết nội dung, sau đó xin phép phát biểu ý kiến một cách lịch sự.",
      "C. Nói chen vào để lãnh đạo biết mình không đồng ý.",
      "D. Thể hiện sự không đồng tình bằng cách nói chuyện riêng."
    ]
  },
  {
    correct: "C",
    title: "Hành vi nào thể hiện văn hóa hội họp chuyên nghiệp?",
    options: [
      "A. Chỉ tập trung lắng nghe khi nội dung liên quan trực tiếp đến mình.",
      "B. Vừa nghe lãnh đạo vừa trao đổi riêng với đồng nghiệp.",
      "C. Tập trung lắng nghe, giữ trật tự và phát biểu đúng lúc, đúng cách.",
      "D. Tự do trao đổi nếu cho rằng nội dung cuộc họp không quan trọng."
    ]
  },
  {
    correct: "C",
    title: "Trong giờ ăn trưa tại căng tin bệnh viện, khi có người bệnh và người cao tuổi cùng dùng bữa, NVYT nên lựa chọn cách giao tiếp nào?",
    options: [
      "A. Nói chuyện thoải mái, cười đùa lớn tiếng vì đây là thời gian nghỉ ngơi cá nhân.",
      "B. Chỉ cần giữ thái độ lịch sự khi đang trực tiếp khám, chữa bệnh cho người bệnh.",
      "C. Nói chuyện với âm lượng vừa phải, sử dụng ngôn từ lịch sự, tôn trọng những người xung quanh.",
      "D. Có thể nói chuyện lớn tiếng nếu không trực tiếp ảnh hưởng đến công việc chuyên môn."
    ]
  },
  {
    correct: "B",
    title: "Giờ nghỉ trưa có vài người nói chuyện rất to và cười đùa khiến người bệnh lớn tuổi ngồi gần đó khó chịu. Hành vi nào dưới đây là phù hợp nhất?",
    options: [
      "A. Tiếp tục nói chuyện vì người bệnh có thể lựa chọn chỗ ngồi khác.",
      "B. Giảm âm lượng, điều chỉnh cách giao tiếp và chú ý đến cảm nhận của những người xung quanh.",
      "C. Chỉ giảm âm lượng khi có lãnh đạo bệnh viện xuất hiện.",
      "D. Cho rằng người bệnh lớn tuổi khó tính nên không cần quan tâm."
    ]
  },
  {
    correct: "C",
    title: "Khi trò chuyện với đồng nghiệp trong bệnh viện, một nhân viên sử dụng những từ ngữ thiếu lịch sự. Nhận định nào sau đây đúng nhất?",
    options: [
      "A. Có thể sử dụng từ ngữ tùy ý vì đang nói chuyện riêng với đồng nghiệp.",
      "B. Chỉ cần không nói trực tiếp với người bệnh thì không ảnh hưởng đến hình ảnh bệnh viện.",
      "C. Cần lựa chọn ngôn từ phù hợp, văn minh và tôn trọng người nghe, kể cả trong những cuộc trò chuyện ngoài chuyên môn.",
      "D. Ngôn từ trong giờ nghỉ không liên quan đến đạo đức nghề nghiệp."
    ]
  }
];
