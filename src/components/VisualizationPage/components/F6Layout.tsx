import Container from './Container';
import SquareUnit from './Layout/SquareUnit';
import SquareBackground from './Layout/SquareBackground';
import F6Data from './FloorData/F6Data.json';

const F6Layout = () => {
  return (
    <div>
      <Container>
        <SquareBackground
          // Background Color
          width={F6Data.Container.SquareBackground.width}
          height={F6Data.Container.SquareBackground.height}
          gridColumn={F6Data.Container.SquareBackground.gridColumn}
          gridRow={F6Data.Container.SquareBackground.gridRow}
          backgroundColor={F6Data.Container.SquareBackground.backgroundColor}
        />
        {F6Data.Container.SquareUnit.map(unit => (
          // Room
          <SquareUnit
            key={unit.id}
            width={unit.width}
            height={unit.height}
            backgroundColor="violet"
            gridColumn={unit.gridColumn}
            gridRow={unit.gridRow}
          />
        ))}
      </Container>
    </div>
  );
};

export default F6Layout;
