import { CMS } from './cms';
import { Auth } from './auth';
import { Project } from './project';
import { Base } from './base';
declare class Spotbase extends Base {
}
interface Spotbase extends CMS, Auth, Project {
}
export default Spotbase;
