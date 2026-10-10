class SBI extends RBI{
deposite(){ console.log("Customer can deposite amount")}
withdraw() {console.log("Customer can withdraw amount")}
internetbanking() { console.log("Customer can internet banking")}

}
const sbi=new SBI();
sbi.deposite();
sbi.withdraw();
sbi.internetbanking();
sbi.KYC();
import{RBI} from "./Bank.js"