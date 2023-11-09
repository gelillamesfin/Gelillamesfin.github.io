
//use this file for any code you want to try out

/*  Create 3 objects, student1, student2, student3
 property studentId :  101, 102, 103 respectively
 property quizAnswers:  [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
 push the students into an array, quizAnswers
 write a function to compute the score for a given student
 computeStudentScore(student1, [3, 1, 2, 4]) should return 3
 second argument is array of correct answers
*/

type Student = {
    studentId: number,
    quizAnswers: number[]
}

const student1 = {
    studentId: 101,
    quizAnswers: [1, 1, 2,4]
};

const student2 = {
    studentId: 102,
    quizAnswers: [2, 1, 2,2]
};

const student3 = {
    studentId: 103,
    quizAnswers: [3, 1, 3,4]
}//what does push the students into an array , quizAnswers mean on the slide ?
// const students=[student1, student2, student3];
// students;

console.log("expect 3: ", computeStudentScore(student1, [3, 1, 2, 4]));

function computeStudentScore(stu: Student, quizKey: number[]): number {

const answers = stu.quizAnswers;

 let numCorrect = 0;
 for (let i = 0; i < answers.length; i++){
    if (answers[i] === quizKey[i]){
        numCorrect = numCorrect + 1;
    }
 }
 return numCorrect;

}
student2;
student3;
console.log( computeStudentScore(student2, [3, 1, 2, 4]));
console.log( computeStudentScore(student3, [3, 1, 2, 4]));

function gradeQuiz(quizAns:number[],correctAns:number[]):number[]{
    let score=0;
    let newArray:[]=[];

    if(i=0;i<=correctAns.length;i++){
        if (quizAns[i]===correctAns[i]){
            score+=1;
        }
        newArray.push(score);
    }
}