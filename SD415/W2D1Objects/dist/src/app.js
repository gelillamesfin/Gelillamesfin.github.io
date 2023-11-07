//use this file for any code you want to try out
const student1 = {
    studentId: 101,
    quizAnswers: [1, 1, 2, 4]
};
const student2 = {
    studentId: 101,
    quizAnswers: [2, 1, 2, 2]
};
const student3 = {
    studentId: 101,
    quizAnswers: [3, 1, 3, 4]
};
const classQuiz1 = [student1, student2, student3];
classQuiz1;
console.log("expect 3: ", computeStudentScore(student1, [3, 1, 2, 4]));
function computeStudentScore(stu, quizKey) {
    /* get the student answers */
    const answers = stu.quizAnswers;
    /* loop through the parallel arrays and count the matches and return that */
    let numCorrect = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === quizKey[i]) {
            numCorrect = numCorrect + 1;
        }
    }
    return numCorrect;
}
student2;
student3;
export {};
