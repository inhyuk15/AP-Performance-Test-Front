import axios from 'axios';

export const BUILDING_POSITION = {
  // E1 ~ E12
  국제언어교육원: [36.362411, 127.345852],
  정심화국제문화회관: [36.363236, 127.346193],
  자연사박물관: [36.363479, 127.345539],
  공대2호: [36.364162, 127.346148],
  공대3호: [36.365367, 127.346144],
  공대4호: [36.365115, 127.347281],
  인재개발원: [36.36606, 127.345751],
  경상대: [36.367519, 127.345957],
  경상대별관: [36.36771, 127.34684],
  대학본부: [36.368816, 127.346841],
  대학본부별관: [36.367959, 127.347011],
  농업생명공학관: [36.368625, 127.34979],
  상록회관: [36.368491, 127.350355],
  농대1호: [36.369179, 127.352303],
  농대2호: [36.370359, 127.352859],
  농대3호: [36.370327, 127.351861],
  환경소재공학과공장동: [36.370991, 127.354349],
  농업과학기술센터: [36.369145, 127.353743],

  // N1 ~ N15
  도서관: [36.369666, 127.345943],
  정보화본부: [36.370536, 127.347684],
  학군단: [36.372319, 127.347231],
  골프연습장: [36.371551, 127.348405],
  학생생활관: [36.374627, 127.347021],
  이인구인재관: [36.375574, 127.347301],
  제3후생관: [36.371542, 127.344762],
  박물관: [36.371075, 127.345287],
  예술대미술관: [36.370877, 127.343633],
  예술대디자인관: [36.371744, 127.343426],
  예술대음악1호관: [36.373288, 127.344048],
  예술대음악2호관: [36.373771, 127.344276],
  예술대오케스트라홀: [36.372786, 127.344069],
  생명시스템과학대: [36.375991, 127.343868],
  법학전문대학원: [36.376752, 127.345001],
  수의과대: [36.376813, 127.343755],
  동물병원: [36.377166, 127.342896],
  생활과학대: [36.376201, 127.342826],
  실내체육관: [36.371551, 127.341587],

  // W1 ~ W15
  산학연: [36.365359, 127.344885],
  공대5호: [36.366714, 127.344301],
  공대1호: [36.367715, 127.344405],
  자연대1호: [36.369311, 127.343661],
  자연대2호: [36.370011, 127.343727],
  약학대: [36.369001, 127.343139],
  인문대: [36.368299, 127.342036],
  한누리회관: [36.367481, 127.342604],
  제1후생관: [36.367822, 127.343181],
  공동실험실습관: [36.368739, 127.341004],
  백마교양교육관: [36.367751, 127.340815],
  자연대기초1호관: [36.366288, 127.339977],
  자연대기초2호관: [36.366771, 127.340107],
  사회과학대: [36.366687, 127.342317],
  사회과학대강의동: [36.366381, 127.342529],
  약초원관리동: [36.365877, 127.341357],
  노천극장: [36.365486, 127.342326],
  사범대: [36.368181, 127.340347],
};

export interface IPeopleCntInBuilding {
  [location: string]: number;
}

interface IApiResponse {
  outblock: Array<{ MSG: number }>;
  RESULT: IPeopleCntInBuilding;
}

const fetchJsonFromUrl = async (url: string): Promise<IApiResponse> => {
  try {
    const response = await axios.get<IApiResponse>(url);
    return response.data;
  } catch (error: unknown) {
    console.error(
      `Error fetching data from ${url}: ${(error as Error).message}`
    );
    throw error;
  }
};

const host = (import.meta as any).env.VITE_SERVER;
const httpUrl = `http://${host}/api/pulse_cnt`;

export const setPeopleCntInBuilding = async (
  peopleCntInBuilding: IPeopleCntInBuilding
): Promise<IPeopleCntInBuilding> => {
  const updatedPeopleCnt: IPeopleCntInBuilding = { ...peopleCntInBuilding };
  try {
    const fetchData = await fetchJsonFromUrl(httpUrl);
    const peopleCntData = fetchData.RESULT;
    Object.entries(peopleCntData).forEach(([location, client]) => {
      const matchingKey = Object.keys(BUILDING_POSITION).find(key =>
        location.includes(key)
      );
      if (matchingKey) {
        updatedPeopleCnt[matchingKey] = Number(client);
      }
    });
  } catch (error) {
    console.error('Failed to fetch data: ', error);
    // If fetching fails, initialize every key to 0
    Object.keys(BUILDING_POSITION).forEach(key => {
      updatedPeopleCnt[key] = 0;
    });
  }

  // console.log(peopleCntInBuilding);
  return updatedPeopleCnt;
};
