import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"


class QuestionsService {
    async getQuestions() {
        console.log('getting random questions')
        const response = await fetch('https://opentdb.com/api.php?amount=1')
        const data = await response.json()
        console.log(data.results)
        let newQuestions = data.results.map(question => new Question(question))
        console.log(newQuestions)
        AppState.questions = newQuestions
    }

    async getHistoryQuestions() {
        console.log('Getting History Questions')
        const response = await fetch('https://opentdb.com/api.php?amount=1&category=23')
        const data = await response.json()
        console.log(data.results)
        let newQuestions = data.results.map(question => new Question(question))
        console.log(newQuestions)
        AppState.questions = newQuestions
    }

    async getMythologyQuestions() {
        console.log('Getting Mythology Questions')
        const response = await fetch('https://opentdb.com/api.php?amount=1&category=20')
        const data = await response.json()
        console.log(data.results)
        let newQuestions = data.results.map(question => new Question(question))
        console.log(newQuestions)
        AppState.questions = newQuestions
    }

    async getScienceQuestions() {
        console.log('Getting Science Questions')
        const response = await fetch('https://opentdb.com/api.php?amount=1&category=30')
        const response2 = await fetch('https://opentdb.com/api.php?amount=1&category=17')
        const response3 = await fetch('https://opentdb.com/api.php?amount=1&category=18')
        const response4 = await fetch('https://opentdb.com/api.php?amount=1&category=19')
        const data = await response.json()
        const data2 = await response2.json()
        const data3 = await response3.json()
        const data4 = await response4.json()
        console.log(data.results, data2.results, data3.results, data4.results)
        let newQuestions = data.results.concat(data2.results, data3.results, data4.results)
        let questionBundle = newQuestions.map(question => new Question(question))
        AppState.questions = questionBundle

    }

    async getGenQuestions() {
        console.log('Getting General Knowledge Questions')
        const response = await fetch('https://opentdb.com/api.php?amount=1&category=9')
        const data = await response.json()
        console.log(data.results)
        let newQuestions = data.results.map(question => new Question(question))
        console.log(newQuestions)
        AppState.questions = newQuestions
    }

    checkIfTrue(answer) {
        if (answer == AppState.questions[0].correctAnswer) {
            window.alert("correct!")
        } else {
            window.alert("failure!")
        }
    }
}

export const questionsService = new QuestionsService()