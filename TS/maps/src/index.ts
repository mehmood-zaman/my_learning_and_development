import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
let customMap = new CustomMap("map");
let user = new User();
let company = new Company();
customMap.addMarker(user);
customMap.addMarker(company);
