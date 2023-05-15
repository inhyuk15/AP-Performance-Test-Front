import F4Layout from './Layout/F4Layout';
import F5Layout from './Layout/F5Layout';
import F6Layout from './Layout/F6Layout';

import PushDataToMap from './PushDataToMap';

const LayoutCompletion = () => {
  PushDataToMap();
  return (
    <div>
      <F4Layout />;
      <br />
      <F5Layout />;
      <br />
      <F6Layout />;
    </div>
  );
};

export default LayoutCompletion;
