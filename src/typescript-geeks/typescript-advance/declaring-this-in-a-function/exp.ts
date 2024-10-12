// interface Course{
//     course:string;
//     id:string;
//     changeCourse:()=>void;
// }
// const course:Course={
//     course:'Javascript',
//     id:"1234",
//     changeCourse:function (this:Course)
//     {
//         this.course='Step by step . time by time'
//     }
// }
// console.log(`course's course is :${course.course}`)
// course.changeCourse()
// console.log(`course's course is :${course.course}`)
// function greet(this:{name:string},greeting:string){
//     console.log(`${greeting},${this.name}`)
// }
// const person={name:'Tuguldur'}
// greet.call(person,'helo')