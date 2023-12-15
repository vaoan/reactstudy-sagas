import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { actions } from "models/reducers/equipment";
import { Equipment } from "models/reducers/equipment";

// Define the API endpoint for equipment
const EQUIPMENT_API = "https://api.example.com/equipment";

// Define the saga function to fetch equipment
function* fetchEquipment(): Generator<any, any, any> {
  try {
    // Make the API call using axios
    const response = yield call(axios.get, EQUIPMENT_API);
    // Dispatch the success action with the fetched equipment data
    const equipment: Equipment[] = response.data;
    yield put(actions.getAll(equipment));
  } catch (error) {
    // Dispatch the failure action if an error occurs
    //yield put(equipmentSlice.actions.fetchEquipmentFailure(error.message));
  }
}

// Define the saga watcher function
function* watchFetchEquipment() {
  yield takeLatest(actions.getAll.type, fetchEquipment);
}

// Export the saga watcher function
export function* equipmentSaga() {
  yield watchFetchEquipment();
}
