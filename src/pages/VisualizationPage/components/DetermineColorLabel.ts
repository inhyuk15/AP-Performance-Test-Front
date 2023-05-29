const colorTable: string[] = ['blue', 'orange', 'red'];

const DetermineColorLabel = (dlStatus: number): string => {
  console.log(dlStatus);
  if (dlStatus >= 100) {
    return colorTable[0];
  }
  if (dlStatus >= 30) {
    return colorTable[1];
  }
  if (dlStatus >= 0) {
    return colorTable[2];
  }

  // 속도 데이터 아예 없는 경우
  return 'black';
};

export default DetermineColorLabel;
