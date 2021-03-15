import {doCORSRequest, reqType} from './baseRequest';

const getPlayer = (id) => {
  const data = doCORSRequest(`${reqType.element}${id}/`);
  // const data = doCORSRequest(`${reqType.bootstrap}/`);
  return data;
}

export default getPlayer;