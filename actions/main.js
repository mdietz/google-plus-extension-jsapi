$(document).ready(function() {
  var plus = new GooglePlusAPI();

  plus.init();
  plus.refreshCircles(function(){}, false);

  var create_circle_func = function() {
    circle_name = $("#circ_name")[0].value;
    circle_desc = $("#circ_desc")[0].value;
    console.log(circle_name);
    console.log(circle_desc);
    comma_sep_profiles = $("#profile_urls")[0].value;
    if(comma_sep_profiles != ''){
      var re = new RegExp("[0-9]{2,}", "g");
      var matched = [];
      var found;
      while((found = re.exec(comma_sep_profiles)) != null){
        matched.push(found[0]);
      }


      for( i in matched ){
        console.log(matched[i]);
        matched[i] = matched[i].toString();
      }

      plus.lookupUsers(function(data){ console.log(data); }, matched);

    }

    plus.createCircle(function(circleID) {
      console.log(circleID);
      plus.addPeople(function(){}, circleID, matched);
    }, circle_name, circle_desc);

  };

  $("#create_circle").click(create_circle_func);

  }); // End ready function
