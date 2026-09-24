import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-us-world-economy',
    templateUrl: './us-world-economy.component.html',
    styleUrls: ['./us-world-economy.component.css'],
    standalone: false
})
export class USWorldEconomyComponent implements OnInit {

  //@Input() firstname: Customer;


  constructor() { }

  ngOnInit(): void {
    this.url ="https://ocw.mit.edu/courses/14-770-introduction-to-political-economy-fall-2017/";
  }

  name = ""
  url = ""

  courseURL = [
    {url:"https://ocw.mit.edu/courses/14-770-introduction-to-political-economy-fall-2017/", name:"First let's get an 'Overview of Political Economy'"},
    {url:"https://ocw.mit.edu/courses/17-100j-political-economy-i-spring-2016/", name:"Next, please complete the course 'Political Economy I'"},
    {url:"https://ocw.mit.edu/courses/17-148-political-economy-of-globalization-spring-2006/", name:"We should also learn 'Political Economy of Globalization'"},
    {url:"https://ocw.mit.edu/courses/17-181-sustainability-political-economy-science-and-policy-fall-2016/", name:"Here is a great course titled: 'Sustainability: Political Economy, Science, And Policy'"},
    {url:"https://ocw.mit.edu/courses/21h-383-technology-and-the-global-economy-1000-2000-fall-2016/", name:"Let's learn 'Technology And The Global Economy, 1000-2000'"},
    {url:"https://ocw.mit.edu/courses/15-225-economy-and-business-in-modern-china-and-india-spring-2008/", name:"Please refresh on 'Economy and Business in Modern China And India'"},
    {url:"https://ocw.mit.edu/courses/11-946-planning-in-transition-economies-for-growth-and-equity-spring-2004/", name:"Let's discuss 'Planning in Transition Economies for Growth and Equity'"},
    {url:"https://ocw.mit.edu/courses/14-75-political-economy-and-economic-development-fall-2012/", name:"Next, finish the course on 'Political Economy And Economic Development'"},
    {url:"https://ocw.mit.edu/courses/17-196-globalization-fall-2005/", name:"Please define 'Globalization'"},
    {url:"https://ocw.mit.edu/courses/17-561-european-politics-fall-2020/", name:"Please study 'European Politics'"},
    {url:"https://ocw.mit.edu/courses/14-472-public-economics-ii-spring-2004/", name:"Next, finish 'Public Economics II' assignments"},
    {url:"https://ocw.mit.edu/courses/15-014-applied-macro-and-international-economics-ii-spring-2016/", name:"Good job. Now finish 'Applied Macro- And International Economics II'"},
    {url:"https://ocw.mit.edu/courses/11-409-institutions-of-modern-capitalism-spring-2020/", name:"Nice! Next up we have 'Macro And International Economics'"},
    {url:"https://guides.loc.gov/federalist-papers/full-text#TheFederalistPapers-10", name:"Please read 'Federalist Paper' by President Madison"},
      ]

  getNew() {
    this.name = this.courseURL[Math.floor(Math.random()*this.courseURL.length)].name;
    this.url = this.courseURL[Math.floor(Math.random()*this.courseURL.length)].url;
  }

}
