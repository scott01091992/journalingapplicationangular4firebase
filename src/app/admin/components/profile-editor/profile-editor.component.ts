import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.sass']
})
export class ProfileEditorComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url:'/upload'});

  profile = {
    profilepic: "./../../../assets/profile/profilepic.png",
    about: {
      name: "Brandon Scott",
      dob: "01/09/1992",
      location: "Kent WA",
      description: "I am an optimistic computer enthusiast who aspires to become a developer in order to exercise my interests in problem solving and code"
    },
    values: ["Scientific Method", "The Golden Rule", "Mathematics", "Logic", "Enjoying Life"],
    goals: {
      primary: [
        "Get hired as a Developer"
      ],
      shortTerm: [
        "Build an Angular5 application",
        "Learn Korean",
        "Practice using design tools",
        "Find new source of income"
      ],
      longTerm: [
        "Get BA Degree in Computer Science or Computer Networking",
        "Learn a Machine Language",
        "Build an Application using Java"
      ]
    },
    weaknesses: [
      "Putting other before myself",
      "Addictive Personality",
      "Can't seem to understand art",
      "More energy than I can seem to find a use for",
      "Too many goals at the same time",
      "Easily discouraged"
    ],
    strengths: [
      "Problem Solving and Strategic Thinking",
      "JavaScript Development",
      "Enjoy researching and learning new things",
      "Ambitious in quality of my work",
      "Honest with myself and others",
      "Try to find the optimal approach to all things",
      "Try to remain unbiased in all situations",
      "Seek the truth, regardless of whether or not I like it",
      "Customer Service, human interaction and empathy",
      "Taking action without instruction and working autonomously"
    ],
    interests: {
      optimization: {
        imgpath: "./../../../../assets/static/optimizationicon.svg",
        list: [
          "Productivity",
          "Game Theory",
          "Algorithmic Thinking",
          "Planning",
          "Time Saving",
          "Organization"
        ]
      }
      ,
      design: {
        imgpath: "./../../../../assets/static/designicon.svg",
        list: [
          "User Experience",
          "Logo Design",
          "Color Theory",
          "Typography",
          "Marketing",
          "Adobe CC",
          "Styleguides"
        ]
      },
      development: {
        imgpath: "./../../../../assets/static/developmenticon.svg",
        list: [
          "Angular Frameworks",
          "EMCA",
          "Object Oriented Programming",
          "Pre-Processors",
          "Database Modeling",
          "Workflows",
          "Information Architecture",
          "Search Engine Optimization",
          "Modern Frameworks"
        ]
      },
      gaming: {
        imgpath: "./../../../../assets/static/gamingicon.svg",
        list: [
          "Theory Crafting",
          "Macro Competitive Strategy",
          "Game Mechanics and Systems",
          "Min/Maxing",
          "Cooperative Strategy",
          "Character Building"
        ]
      },
      science: {
        imgpath: "./../../../../assets/static/scienceicon.svg",
        list: [
          "Physics",
          "Quantum Physics",
          "Psychology",
          "Chemistry",
          "Cosmology",
          "Mechanical Engineering",
          "Electrical Engineering",
          "Computer Science",
          "Sociology",
          "Statistical Analysis",
          "Neural Networks"
        ]
      },
      investigation: {
        imgpath: "./../../../../assets/static/investigationicon.svg",
        list: [
          "Observation",
          "Detailed Note Taking",
          "Documentation",
          "Body Language Understanding",
          "Pattern Recognition",
          "Abstract Connections",
          "Data Analysis",
          "Surveillance"
        ]
      },
      miscellaneous: {
        imgpath: "./../../../../assets/static/miscellaneousicon.svg",
        list: [
          "Cooking",
          "Meditation",
          "Self Improvement",
          "Life Documenation",
          "Film Photography",
          "Travel",
          "Long Distance Running",
          "Cognitive Improvement"
        ]
      }
    }
  };

  propEdit = {
    name: false,
    dob: false,
    location: false,
    description: false
  }

  newValue = "";
  newGoal = "";
  newStrength = "";
  newWeakness = "";
  newInterests = [];

  interestModel = [];

  EditClick = (target) => {
    if(target == "name"){
      this.propEdit.name ? this.propEdit.name = false : this.propEdit.name = true;
    }else if(target == "dob"){
      this.propEdit.dob ? this.propEdit.dob = false : this.propEdit.dob = true;
    }else if(target == "location"){
      this.propEdit.location ? this.propEdit.location = false : this.propEdit.location = true;
    }else if(target == "description"){
      this.propEdit.description ? this.propEdit.description = false : this.propEdit.description = true;
    }else{
      console.log("Error: data = " + target);
    }
  }

  removeValue = (index) => {
    this.profile.values.splice(index, 1);
  }
  addValue = (val) => {
    this.profile.values.push(val);
    this.newValue = "";
  }

  removeGoal = (type, idx) => {
    if(type == "primary"){
      this.profile.goals.primary.splice(idx, 1);
    }else if (type == "shortTerm"){
      this.profile.goals.shortTerm.splice(idx, 1);
    }else if (type == "longTerm"){
      this.profile.goals.longTerm.splice(idx, 1);
    }else {
      console.log('invalid goal type');
    }
  }

  addGoalPrimary = (goal) => {
    this.profile.goals.primary.push(goal);
    this.newGoal = "";
  }
  addGoalShortTerm = (goal) => {
    this.profile.goals.shortTerm.push(goal);
    this.newGoal = "";
  }
  addGoalLongTerm = (goal) => {
    this.profile.goals.longTerm.push(goal);
    this.newGoal = "";
  }

  removeStrength = (idx) => {
    this.profile.strengths.splice(idx, 1);
  }
  addStrength = (strength) => {
    this.profile.strengths.push(strength);
    this.newStrength = "";
  }

  removeWeakness = (idx) => {
    this.profile.weaknesses.splice(idx, 1);
  }
  addWeakness = (weakness) => {
    this.profile.weaknesses.push(weakness);
    this.newWeakness = "";
  }

  removeInterest = (interest, idx) => {
    this.profile.interests[interest].list.splice(idx, 1);
  }

  addInterest = (e, interestName) => {
    console.log(e);
    this.profile.interests[interestName].list.push(e.target.previousElementSibling.value);
    e.target.previousElementSibling.value = "";
  }

  changeImg = (e) => {
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
