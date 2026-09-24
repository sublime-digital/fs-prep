import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-one',
    templateUrl: './one.component.html',
    styleUrls: ['./one.component.css'],
    standalone: false
})
export class OneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  question = ""

  freeclicks() {
    //user can read 50 affirmations
    //counter reaches 50
    //user receives a modal to pay $5 to unlock all affirmations
  }

  allquestions = [
    "What is a normal distibution?",
    "What does y=mx+b measure?",
    "What is pi equal to?",
    "What is a quadratic equation used for?",
    "What is an imaginary number?",
    "What is a real number?",
    "What is a rational number?",
    "What is an irrational number?",
    "What is a whole number?",
    "What is a complex number?",
    "What is the square root of -1?",
    "Why would electrical engineers use imaginary numbers?",
    "How can you instantly convert a percentage to a fraction?",
    "How can you instantly convert a decimal to a fraction?",
    "What is a natural number?",
    "What is an exponent?",
    "Describe what is meant by order of operations?",
    "How can we find the area of a triangle?",
    "How can we find the perimeter of a triangle?",
    "What does multiplying your weight by 0.4536 accomplish?",
    "What is Alternative hypothesis in statistics?",
    "What is Binary logistic regression in statistics?",
    "What is Binary variables in statistics?",
    "What is Categorical variables in statistics?",
    "What is Attribute variables in statistics?",
    "What is Qualitative variables in statistics?",
    "What is Confidence interval of the prediction in statistics?",
    "What is Continuous variables in statistics?",
    "What is Correlation in statistics?",
    "What is Pearson product moment correlation in statistics?",
    "What is Spearman rank-order correlatio in statistics?",
    "What is Descriptive statistics in statistics?",
    "What is Effect in statistics?",
    "What is Unbiased estimator in statistics?",
    "What is Biased estimator in statistics?",
    "What is Estimator in statistics?",
    "What is Factors in statistics?",
    "What is Fitted line plots in statistics?",
    "What is Fitted values in statistics?",
    "What is Predicted values in statistics?",
    "What is Random factors in statistics?",
    "What is Fixed and Random factors in statistics?",
    "What is Hypothesis tests in statistics?",
    "What is Statistical inference in statistics?",
    "What is Inferential statistics in statistics?",
    "What is Mode in statistics?",
    "What is Nominal logistic regression in statistics?",
    "What is Nominal variables in statistics?",
    "What is Ordinal logistic regression in statistics?",
    "What is Ordinary least squares in statistics?",
    "What is OLS in statistics?",
    "What is Linear least squares in statistics?",
    "What are outliers in statistics?",
    "What is a P-value in statistics?",
    "What is a Parameter in statistics?",
    "What are Poisson variables in statistics?",
    "What is Population in statistics?",
    "What is Prediction intervals in statistics?",
    "What is PI in statistics?",
    "What is R-squared in statistics?",
    "What is Coefficient of determination in statistics?",
    "What is Regression analysis in statistics?",
    "What is Coefficients in statistics?",
    "What is Regression coefficients in statistics?",
    "What is Reliability in statistics?",
    "What is Residuals in statistics?",
    "What is Sample in statistics?",
    "What is Significance level in statistics?",
    "What is Alpha (significance level) in statistics?",
    "What is Standard error of the regression in statistics?",
    "What is Standardization in statistics?",
    "What is Standard scores in statistics?",
    "What is Statistics in statistics?",
    "What is Type I error in statistics?",
    "What is Type II error in statistics?",
    "What is Validity in statistics?",
    "What is A/B testing in Machine Learning?",
    "What is an accelerator chip in Machine Learning?",
    "What is accuracy in Machine Learning?",
    "What is an action in Reinforcement Learning?",
    "What is an activation function in Machine Learning?",
    "What is an active learning in Machine Learning?",
    "What is AdaGrad in Machine Learning?",
    "What is an agent in Reinforcement Learning?",
    "What is agglomerative clustering in Machine Learning?",
    "What is anomaly detection in Machine Learning?",
    "What is the AR acronym stand for?",
    "Describe the standard algorithms used in augmented reality today",
    "What does area under the PR curve typically measure?",
    "What does area under the ROC curve typically measure?",
    "What does acronym AUC typically denote as it relates to artificial intelligence?",
    "What do scientists mean by artificial general intelligence?",
    "What do scientists typically mean by artificial intelligence?",
    "What do scientists typically mean by ATTENTION as it relates to artificial intelligence?",
    "What do scientists typically mean by ATTRIBUTES as it relates to artificial intelligence?",
    "What do scientists typically mean by ATTRIBUTE SAMPLING as it relates to artificial intelligence?",
    "What do scientists typically mean by automation bias?",
    "What do scientists typically mean by AutoML?",
    "What do scientists typically mean by Auxiliary Loss?",
    "What do scientists typically mean by axis-aligned condition?",

  ]

  getNew() {
    this.question = this.allquestions[Math.floor(Math.random()*this.allquestions.length)];
  }

}
