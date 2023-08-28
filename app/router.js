import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { QuestionsController } from "./controllers/QuestionsController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: [QuestionsController],
    view:  /*html*/`
    <div class="container-fluid">
    <button onclick="app.QuestionsController.getQuestions()" class="btn btn-success"> New Batch of Random Questions</button>
    <button onclick="app.QuestionsController.getHistoryQuestions()" class="btn">History Questions</button>
    <button onclick="app.QuestionsController.getMythologyQuestions()" class="btn">Mythology Questions</button>
    <button onclick="app.QuestionsController.getScienceQuestions()" class="btn">Science Questions [all]</button>
    <button onclick="app.QuestionsController.getGenQuestions()" class="btn">General Knowledge Questions</button>
    <section id="questions" class="row g-1">

    </section>
    </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]