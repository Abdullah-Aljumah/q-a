const express = require("express");

const idkModel = require("../../db/model/idk");

const createIdk = (req, res) => {
  const { idk } = req.body;

  const newIdk = new idkModel({ idk: idk });
  try {
    newIdk
      .save()
      .then((result) => {
        res.status(200).json({ Message: "idk Created" });
        console.log("idk created");
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (error) {
    res.status(400).json(error);
  }
};

const getIdks = (req, res) => {
  try {
    idkModel.find({}).then((result) => {
      res.status(200).json(result);
      console.log("get all idks ");
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteIdk = (req, res) => {
  const { id } = req.params;
  try {
    idkModel
      .findOneAndDelete({ _id: id }, { new: true })
      .then((result) => {
        if (result) {
          res.status(200).json({ Message: "idk deleted!" });
          console.log("idk deleted");
        } else {
          res.status(400).json({ Message: "idk not found!" });
        }
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateIdk = (req, res) => {
  const { id } = req.params;
  const { idk } = req.body;
  try {
    idkModel
      .findOneAndUpdate({ _id: id }, { idk: idk }, { new: true })
      .then((result) => {
        res.status(200).json({ Message: "idk has been updated!" });
        console.log("idk updated");
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { createIdk, getIdks, deleteIdk, updateIdk };
