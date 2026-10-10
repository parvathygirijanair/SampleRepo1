class Developer extends Company{
writeCode() {console.log("Developer can write code")}
testApplication(){console.log("Developer can test application")}
fixBugs() {console.log("Developer can fix bugs")}

}
let developer=new Developer();
developer.writeCode();
developer.testApplication();
developer.fixBugs();
developer.employeeRegistration();
import { Company } from "./Company.js";