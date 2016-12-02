var ARROWS = {
  keyboard_arrow_up: "keyboard_arrow_down",
  keyboard_arrow_down: "keyboard_arrow_up",
};

$(document).ready(function(){
  $(".mdl-button.mdl-button--icon.mdl-js-button.mdl-js-ripple-effect.arrow")
    .click(function() {
      var a = $(this).find("i.material-icons");
      var content = a[0].textContent;
      a.replaceWith('<i class="material-icons">'+ARROWS[content]+'</i>');
      var b = $(this).parent().parent().find(".query-card-code").toggle();
  });
  $(".mdl-button.mdl-button--icon.mdl-js-button.mdl-js-ripple-effect.play")
    .click(function() {
      var db = $(this).prev()[0].textContent.split('-')[0].trim();
      var query = $(this).parent().parent().find(".query-card-code > span")[0].textContent;
      var data = $(this).parent().parent().find("form").find("input");
      if (data[0].name == "id_del_usuario") {
        query = query.replace("user_id",data[0].value);
      }
      if (data[0].name == "user_id") {
        query = query.replace("user_id",data[0].value);
        if (data[1].value == "") {
          query = query.replace(", 'receptant': receptant_id", "");
        } else {
          query = query.replace("receptant_id",data[1].value);
        }
        if (data[2].value == "" || data[3].value == "") {
          query = query.replace(", 'date':{'$gte': 'start_date', '$lte': 'end_date'}","");
        } else {
          query = query.replace("start_date",data[2].value);
          query = query.replace("end_date",data[3].value);
        }
        if (data[4].value == "" || data[5].value == "") {
          query = query.replace(", 'lat':{'$gte': min_lat, '$lte': max_lat}","");
        } else {
          query = query.replace("min_lat",data[4].value);
          query = query.replace("max_lat",data[5].value);
        }
        if (data[6].value == "" || data[7].value == "") {
          query = query.replace(", 'long':{'$gte': min_lon, '$lte': max_lon}","");
        } else {
          query = query.replace("min_lon",data[6].value);
          query = query.replace("max_lon",data[7].value);
        }
      }
      window.location.assign(location.href+db+'?query='+query);
  });
});
