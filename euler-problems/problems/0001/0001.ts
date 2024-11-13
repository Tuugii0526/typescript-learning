import { AbstractSolution,RunSolution } from "../../utils/solution";

@RunSolution
export class Solution1 extends AbstractSolution {
    getProblemName(): string {
        return "Multiplies of 3 or 5"
    }
    protected solve(){
        return this.getSumOfDivisorsOf3and5(49)
    }
    private  getSumOfDivisorsOf3and5(limit:number):number{
          let sumOfDivisorsOfThree=this.getSumOfDivisorsOfNumber(3,limit)
          let sumOfDivisorsOfFive=this.getSumOfDivisorsOfNumber(5,limit)
          let sumOfDivisorsOfFifteen=this.getSumOfDivisorsOfNumber(15,limit)
          return sumOfDivisorsOfThree+sumOfDivisorsOfFive-sumOfDivisorsOfFifteen
    }
    private getSumOfDivisorsOfNumber(num:number,limit:number):number{
        let sum=0
        for(let i=0;i<limit;i++)
        {
            if(i%num)
            {
                sum+=i
            }
        }
        return sum
    }
}