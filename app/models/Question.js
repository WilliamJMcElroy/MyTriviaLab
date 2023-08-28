export class Question {

    constructor({ category, type, difficulty, question, correct_answer, incorrect_answers }) {
        this.category = category
        this.type = type
        this.difficulty = difficulty
        this.question = question
        this.correctAnswer = correct_answer
        this.incorrectAnswers = incorrect_answers || []
    }
    get Randomizer() {
        let allAnswers = [...this.correctAnswer, this.incorrectAnswers]
        allAnswers = allAnswers.sort()
        let template = ''
        allAnswers.forEach(a => template += `<button onclick="app.QuestionsController.checkIfTrue(${a})">${allAnswers[0]}</button>
        <button onclick="app.QuestionsController.checkIfTrue(${a})">${allAnswers[1]}</button>
        <button onclick="app.QuestionsController.checkIfTrue(${a})">${allAnswers[2]}</button>
        <button onclick="app.QuestionsController.checkIfTrue(${a})">${allAnswers[3]}</button>
        <button onclick="app.QuestionsController.checkIfTrue(${a})">${allAnswers[4]}</button>
        
        `)
        return template

    }
    get QuestionsTemplate() {
        return `
    <div class="col-12">
    <div class="card p-0">
    <h3 class="text-center fw-bold text-primary">Question in the category of ${this.category}</h4>
    <
    <h4 class="text-center fw-bold text-primary">Type of Question: ${this.type} Difficulty: ${this.difficulty}</h4>
    <h4 class="text-center fw-bold text-primary px-2">${this.question}</h4>
    <h5>${this.Randomizer}</h5>
    `
    }



}
