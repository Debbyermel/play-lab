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
    mouseover: function () {
      $(this).children("span").text("UnFollow");
    },
    mouseout: function () {
      $(this).children("span").text("Following");
    },
    click: function () {
      $(this).children("a.unfollow span").text("Follow");
      $(this).removeClass("unfollow");
      $(this).addClass("follow");
      $(this).unbind();
      initiateFollow();
    }
  });

  $("a.follow").on("click", function () {
    $(this).children("span").text("UnFollow");
    $(this).removeClass("follow");
    $(this).addClass("unfollow");
    $(this).unbind();
    initiateFollow();
  });
}