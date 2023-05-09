import Container from './Container';
import SquareUnit from './Layout/SquareUnit';
import SquareBackground from './Layout/SquareBackground';
import F5Data from './FloorData/F5Data.json';

const F5Layout = () => {
  return (
    <div>
      <Container>
        <SquareBackground
          // Background Color
          width={F5Data.Container.SquareBackground.width}
          height={F5Data.Container.SquareBackground.height}
          gridColumn={F5Data.Container.SquareBackground.gridColumn}
          gridRow={F5Data.Container.SquareBackground.gridRow}
          backgroundColor={F5Data.Container.SquareBackground.backgroundColor}
        />
        {F5Data.Container.SquareUnit.map(unit => (
          // Room
          <SquareUnit
            key={unit.id}
            width={unit.width}
            height={unit.height}
            backgroundColor="orange"
            gridColumn={unit.gridColumn}
            gridRow={unit.gridRow}
          />
        ))}
      </Container>
    </div>
  );
};

export default F5Layout;
