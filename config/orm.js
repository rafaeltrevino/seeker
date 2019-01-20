const connection = require('../config/connection.js');

function ORM(table) {
  this.table = table;

  this.all = function () {
      const sql = `SELECT id, image_link, headword, description, datetime_completed, status_candidate, status_pending, status_completed FROM ??`;
      return new Promise(function (resolve, reject) {
        connection.query(sql, table, function (err, data) {
          console.log(data);
          if (err) reject(err);

          // Push only images IDs that have not been transcribed into an array
          let availableImages = [];
          for (key in data) {
            if (data[key].status_candidate == false && data[key].status_pending == false && data[key].status_completed == false) {
              availableImages.push(data[key].id);
            };
          };

          // Select a random number matching the index of availableImages
          let rand = Math.floor((Math.random() * availableImages.length) + 1);
          // Select the id number of the randomly selected available image
          let newCandidate = availableImages[rand];
          // Iterate over all of the data, set the status_candidate of the selected available image to "true" and all others to "false"
          for (i = 0; i < data.length; i++) {
            if (data[i].id == newCandidate) {
              data[i].status_candidate = true
            } else {
              data[i].status_candidate = false
            };
          };

          // Return the data with a single, random candidate to be transcribed
          resolve(data);
        });
      });
    },

    this.update = function (hw, desc, dt, s_cand, s_pend, s_comp, id) {
      const sql = `UPDATE ?? SET headword = ?, description = ?, datetime_completed = ?, status_candidate = ?, status_pending = ?, status_completed = ? WHERE id = ?`;
      return new Promise(function (resolve, reject) {
        connection.query(sql, [table, hw, desc, dt, s_cand, s_pend, s_comp, id], function (err, data) {
          if (err) reject(err);
          resolve(data);
        });
      });
    }

  this.updateStatus = function (s_cand, s_pend, s_comp, id) {
    const sql = `UPDATE ?? SET status_candidate = ?, status_pending = ?, status_completed = ? WHERE id = ?`;
    return new Promise(function (resolve, reject) {
      connection.query(sql, [table, s_cand, s_pend, s_comp, id], function (err, data) {
        if (err) reject(err);
        resolve(data);
      });
    });
  }

};

module.exports = ORM;