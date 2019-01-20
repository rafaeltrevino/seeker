const images = require("../models/candidates.js");

module.exports = function (app) {
  app.put("/api/images/:id", function (req, res) {
    let id = req.body.id;
    let hw = req.body.headword;
    let desc = req.body.description;
    let dt = req.body.datetime_completed;
    let s_cand = req.body.status_candidate;
    let s_pend = req.body.status_pending;
    let s_comp = req.body.status_completed;

    images.update(hw, desc, dt, s_cand, s_pend, s_comp, id)
      .then(function (data) {
        if (data.changedRows == 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  });

  app.put("/api/images/status/:id", function (req, res) {
    let id = req.body.id;
    let s_cand = req.body.status_candidate;
    let s_pend = req.body.status_pending;
    let s_comp = req.body.status_completed;

    images.updateStatus(s_cand, s_pend, s_comp, id)
      .then(function (data) {
        if (data.changedRows == 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  });
};