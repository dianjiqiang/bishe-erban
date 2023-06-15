export const formatClass = (class_id) => {
  switch (class_id) {
    case 5:
      return "一(1)班";
    case 6:
      return "一(2)班";
    case 7:
      return "一(3)班";
    case 8:
      return "二(1)班";
    case 9:
      return "二(2)班";
    case 10:
      return "二(3)班";
    case 11:
      return "三(1)班";
    case 12:
      return "三(2)班";
    case 13:
      return "三(3)班";
    case 2:
      return "一年级组";
    case 3:
      return "二年级组";
    case 4:
      return "三年级组";
    default:
      return "全体学生";
  }
};

export const formatStudentListData = (list, charge, count, class_id) => {
  // 获取班级总填写数量
  const newObject = {
    name: formatClass(class_id),
    headTeacher: charge,
    distributed: count,
    students: list,
  };
  let min = count;
  list.forEach((item, index) => {
    if (Number(item.finish_que) === count) {
      item.quality = "优";
    } else if (count - item.finish_que <= 3) {
      item.quality = "中";
    } else {
      item.quality = "差";
    }
    item.key = index + 1;
    if (item.finish_que < min) {
      min = item.finish_que;
    }
  });
  newObject.allNumber = min;
  return newObject;
};
