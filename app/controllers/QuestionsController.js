import { AppState } from "../AppState.js"
import { questionsService } from "../services/QuestionsService.js"
import { setHTML } from "../utils/Writer.js"
import { Question } from "../models/Question.js"

function _drawQuestions() {
    console.log("beginning draw")
    let questions = AppState.questions
    let content = ''
    questions.forEach(q => content += q.QuestionsTemplate)
    setHTML('questions', content)
}



export class QuestionsController {

    constructor() {
        this.getQuestions()
        AppState.on('questions', _drawQuestions)
    }

    async getQuestions() {
        await questionsService.getQuestions()
    }

    async getHistoryQuestions() {
        await questionsService.getHistoryQuestions()
    }

    async getMythologyQuestions() {
        await questionsService.getMythologyQuestions()
    }

    async getScienceQuestions() {
        await questionsService.getScienceQuestions()
    }

    async getGenQuestions() {
        await questionsService.getGenQuestions()
    }

    checkIfTrue(answer) {
        questionsService.checkIfTrue(answer)

    }
}
