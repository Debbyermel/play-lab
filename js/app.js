$(document).ready(function () {
  $('#toggle-progress').on('click', function () {
    $('#progress-hide').toggle();
    $('#details-hide').toggle();
  });
});

function toggleTittle() {
  const tittle = document.getElementById("toggle-progress");
  if (tittle.innerHTML === "Ver progreso") {
    tittle.innerHTML = "Ver descripción";
  } else {
    tittle.innerHTML = "Ver progreso";
  }
}

$(function () {
  initiateFollow();
});

function initiateFollow() {

  $("a.unfollow").on({
    mouseout: function () {
      $(this).children("span").text("Seguiendo");
    },
    mouseover: function () {
      $(this).children("span").text("Dejar de seguir");
    },
    click: function () {
      $(this).children("a.unfollow span").text("Seguir proyecto");
      $(this).removeClass("unfollow");
      $(this).addClass("follow");
      $(this).off();
      initiateFollow();
    }
  });

  $("a.follow").on("click", function () {
    $(this).children("span").text("Dejar de seguir");
    $(this).removeClass("follow");
    $(this).addClass("unfollow");
    $(this).off();
    initiateFollow();
  });
}