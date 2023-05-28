const colorTable: string[] = ['blue', 'orange', 'red'];

const DetermineColorLabel = (downStream: number): string => {
  if (downStream >= 20) {
    return colorTable[0];
  }
  if (downStream >= 10) {
    return colorTable[1];
  }
  if (downStream >= 0) {
    return colorTable[2];
  }

  // 속도 데이터 아예 없는 경우
  return 'black';
};

export default DetermineColorLabel;
