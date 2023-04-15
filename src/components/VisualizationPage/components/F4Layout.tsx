import Container from './Container';
import SquareUnit from './Layout/SquareUnit';
import SquareBackground from './Layout/SquareBackground';
import F4Data from './FloorData/F4Data.json';

const F4Layout = () => {
  return (
    <div>
      <Container>
        <SquareBackground
          // Background Color
          width={F4Data.Container.SquareBackground.width}
          height={F4Data.Container.SquareBackground.height}
          gridColumn={F4Data.Container.SquareBackground.gridColumn}
          gridRow={F4Data.Container.SquareBackground.gridRow}
          backgroundColor={F4Data.Container.SquareBackground.backgroundColor}
        />
        {F4Data.Container.SquareUnit.map(unit => (
          // Room
          <SquareUnit
            key={unit.id}
            width={unit.width}
            height={unit.height}
            backgroundColor="skyblue"
            gridColumn={unit.gridColumn}
            gridRow={unit.gridRow}
          />
        ))}
      </Container>
    </div>
  );
};

export default F4Layout;
