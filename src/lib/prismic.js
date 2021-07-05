import Prismic from '@prismicio/client';

const apiEndpoint = "https://chaufourierfr.cdn.prismic.io/api/v2";
const accessToken = "MC5ZTUp6MUJJQUFDUUFZNFBC.BUxX77-9U--_ve-_vSbvv73vv70v77-977-977-9IO-_vSHvv70177-977-9c--_vS1A77-977-977-977-977-977-9CQ";

export default Prismic.client(apiEndpoint, { accessToken })
