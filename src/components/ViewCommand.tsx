import {is_loaded, loaded_data} from '../../data/mocked_data/mocked_data';

export const ViewCommand = () => {
  if (is_loaded) {
    return (
      <div>
        <h2>Loaded Data</h2>
        <p>{loaded_data}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>No Data Loaded</h2>
      </div>
    );
  }
};