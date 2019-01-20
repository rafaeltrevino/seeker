$(function () {
  $("#submit-candidate").on("click", function (event) {
    var id = $("#idnum").data("id");
    var headword = $("#headword").val();
    var description = $("#description").val();
    var d = new Date();
    var datetime = d.toUTCString();
    var newData = {
      id: id,
      headword: headword,
      description: description,
      datetime_completed: datetime,
      status_candidate: 0,
      status_pending: 1,
      status_completed: 0
    };
    $.ajax("/api/images/" + id, {
      type: "PUT",
      data: newData
    }).then(function () {
      location.reload();
    })
  })

  $(".change-status").on("click", function (event) {
    var id = $(this).data("id");
    var newStatus = {
      id: id,
      status_candidate: 0,
      status_pending: 0,
      status_completed: 1
    };
    $(`#${id}`).addClass("zoomOut animated");
    $.ajax("/api/images/status/" + id, {
      type: "PUT",
      data: newStatus
    }).then(
      function () {
        location.reload();
      }
    );
  });

  $(".reject").on("click", function (event) {
    var id = $(this).data("id");
    var newStatus = {
      id: id,
      status_candidate: 0,
      status_pending: 0,
      status_completed: 0
    };
    $(`#${id}`).addClass("zoomOut animated");
    $.ajax("/api/images/status/" + id, {
      type: "PUT",
      data: newStatus
    }).then(
      function () {
        location.reload();
      }
    );
  });
});