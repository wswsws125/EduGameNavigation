function showHideLayer(layerid, actionid) {
    if (actionid == 'show') {
        $('#' + layerid).show();
    } else {
        $('#' + layerid).hide();
    }
}

function  init_nav() {
    $(".bind_menu_a").bind({
        mouseover: function(){
            var $t = $(this);
            var layerid = $t.data('layerid');
            showHideLayer(layerid, 'show');
        },
        mouseout: function(){
            var $t = $(this);
            var layerid = $t.data('layerid');
            showHideLayer(layerid, 'hide');
        }
    });
}

$(function(){
    init_nav();
});

$(document).ready(function() {
    var temp = "none";

$("#li-two").click(function () {
      openMatter(2);
  });


  function openMatter(obj) {
       for (var i = 1; i < 12; i++) {
           if (i == obj) {
               temp = "block";
           } else {
               temp = "none";
           }
           document.getElementById("matter" + i).style.display = temp;

       }
   }
});
