//functionality of a route

const books = require("express").Router();

books.get("/books", async function (req, res) {
  res.send([
    { bookName: "Book Ben", bookId: "xcvrgf" },
    { bookName: "Book Boom", bookId: "iyuitr" },
    { bookName: "Book ABCD", bookId: "nfgvcd" },
  ]);
});

const express = require("express");
const app = express();

const facts = [
  {
    content:
      "Hello, we're from the Health and Wellness Digital Associate. We wanted to reach out because you are a product manager for Dx Assistant. Our API team needs HIPAA compliance for their code. Is it okay to paste their code into the Dx Assistant chat bots? Thanks!",
    source: "",
  },
  {
    content:
      "The launch of our new product has been rescheduled to next Friday.",
    source: "",
  },
  {
    content: "Make sure all documents are submitted by the end of the day.",
    source: "",
  },
  {
    content: "The system update is scheduled for Sunday at midnight.",
    source: "",
  },
  {
    content:
      "Can you confirm if you will attend the training session tomorrow?",
    source: "",
  },
  {
    content:
      "The meeting agenda will include a discussion on the budget proposal.",
    source: "",
  },
  {
    content: "Our team is working diligently to meet the project deadline.",
    source: "",
  },
  {
    content:
      "The client asked for a detailed report on the project's progress.",
    source: "",
  },
  {
    content: "Let us know if you have any questions or concerns.",
    source: "",
  },
  {
    content: "The conference call is set for 3 PM on Wednesday.",
    source: "",
  },
  {
    content: "We need to finalize the presentation by week's end.",
    source: "",
  },
  {
    content: "The project manager will give an update during the meeting.",
    source: "",
  },
  {
    content: "Can you send me the most recent version of the document?",
    source: "",
  },
  {
    content: "The software update has several new features and improvements.",
    source: "",
  },
  {
    content: "We appreciate your feedback on the changes.",
    source: "",
  },
  {
    content: "The team's performance surpassed our expectations.",
    source: "",
  },
  {
    content: "Review the attached file and let me know your thoughts.",
    source: "",
  },
  {
    content: "The new policy will start next month.",
    source: "",
  },
  {
    content: "We are planning a team-building event for next Friday.",
    source: "",
  },
  {
    content: "The training program will cover several important topics.",
    source: "",
  },
  {
    content: "The server maintenance is scheduled for Saturday morning.",
    source: "",
  },
  {
    content: "Our goal is to enhance customer satisfaction.",
    source: "",
  },
  {
    content: "Can you give an update on the current status of the project?",
    source: "",
  },
  {
    content: "The IT department will perform a security audit next week.",
    source: "",
  },
  {
    content: "Ensure all files are backed up before the update.",
    source: "",
  },
  {
    content: "The marketing team is developing a new campaign.",
    source: "",
  },
  {
    content: "We need to schedule a follow-up meeting to discuss the results.",
    source: "",
  },
  {
    content: "The project's success is vital to our company's growth.",
    source: "",
  },
  {
    content: "We need to improve accuracy, speed, and efficiency.",
    source: "",
  },
  {
    content:
      "The event will start at 6 PM and will feature several guest speakers.",
    source: "",
  },
  {
    content:
      "The new policy will affect employees in HR, sales, and marketing.",
    source: "",
  },
  {
    content: "Please read the instructions carefully before starting the task.",
    source: "",
  },
  {
    content:
      "The meeting will cover budget planning, project timelines, and resource allocation.",
    source: "",
  },
  {
    content: "If you have any questions, contact the support team.",
    source: "",
  },
  {
    content: "The deadline for the report is Monday, June 10, 2024.",
    source: "",
  },
  {
    content: "Our company's mission is to innovate, inspire, and lead.",
    source: "",
  },
  {
    content: "The server will be down for maintenance on Saturday.",
    source: "",
  },
  {
    content:
      "The revoke process isn't functioning, thus necessitating a hard-coded formID value.",
    source: "",
  },
  {
    content:
      "Hi, we are from the Health and Wellness Digital Associate and we wanted to reach out because you are a product manager for the Dx Assistant. We have an API team that requires HIPAA compliance for their code. Is it ok to paste in the code that they have in the Dx Assistant chat bots? Thanks!",
    source: "",
  },
  {
    content:
      "The revoke flow is not working and a formID value must be hard coded.",
    source: "",
  },
  {
    content: "Can you verify if the meeting is at 10 AM on Monday?",
    source: "",
  },
  {
    content:
      "Please ensure that all documents are submitted by the end of the day.",
    source: "",
  },
  {
    content: "The system update will take place on Sunday at midnight.",
    source: "",
  },
  {
    content:
      "Can you confirm your attendance at the training session tomorrow?",
    source: "",
  },
  {
    content: "The meeting agenda includes a discussion on the budget proposal.",
    source: "",
  },
  {
    content: "Our team is working hard to meet the project deadline.",
    source: "",
  },
  {
    content:
      "The client requested a detailed report on the project's progress.",
    source: "",
  },
  {
    content: "Please let us know if you have any questions or concerns.",
    source: "",
  },
  {
    content: "The conference call is scheduled for 3 PM on Wednesday.",
    source: "",
  },
  {
    content: "We need to finalize the presentation by the end of the week.",
    source: "",
  },
  {
    content: "The project manager will provide an update during the meeting.",
    source: "",
  },
  {
    content: "Can you send me the latest version of the document?",
    source: "",
  },
];

const responseJson = {
  facts: facts,
  answerToUser: "Here are some facts from the sheet.",
  continueToModel: true,
  conditionalToModel: true,
  conversationProperties: {
    additionalProp1: {},
    additionalProp2: {},
    additionalProp3: {},
  },
};

books.get("/api/ta-agent/facts", async function (req, res) {
  res.json(responseJson);
});

module.exports = books;
