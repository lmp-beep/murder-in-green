import weapon from "../images/gun.png";
import crimeScene from "../images/crime-scene.png";
import transportation from "../images/car.png";
import disposal from "../images/trashcan.png";

export const QuestionsData = [
  {
    id: 0,
    question: `Choose your Crime:`,
    options: [
      { answer: "A: Murder", co2: -50 },
      { answer: "B: Bank Robbery", co2: 0 },
      { answer: "C: Kidnapping", co2: 0 },
    ],
  },
  {
    id: 1,
    question: `Choose the Weapon:`,
    options: [
      { answer: "A: Gun", co2: 20 },
      { answer: "B: Knife", co2: 10 },
      { answer: "C: Wooden Club/Bat", co2: 5 },
    ],
    imgSrc: weapon,
  },
  {
    id: 2,
    question: `Choose the Crime Scene:`,
    imgSrc: crimeScene,
    options: [
      { answer: `A: The victim's home apartment`, co2: 20 },
      { answer: "B: Office building", co2: 10 },
      { answer: "C: Outside ", co2: 5 },
    ],
  },
  {
    id: 3,
    question: `Choose the Means of Body Disposal and Evidence:`,
    imgScr: disposal,
    options: [
      { answer: "A: Barrel of Acid", co2: 70 },
      { answer: "B: Fire", co2: 26 },
      { answer: "C: Bury it in the woods", co2: 15 },
    ],
  },
  {
    id: 4,
    question: `Choose the type of vehicle to make your getaway:`,
    imgSrc: transportation,
    options: [
      { answer: "A: SM Car", co2: 26 },
      { answer: "B: MD Car", co2: 75 },
      { answer: "C: LG Car", co2: 120 },
    ],
  },
];
