import { User } from "./User/index";
import { Company } from "./Company/index";
import { CustomMap } from "./CustomMap/CustomMap";

const user = new User();
const company = new Company();

const map = new CustomMap();
map.addMarker(user);
console.log(user);
