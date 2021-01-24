var Graphical = {
	unit_type: "px",
	drawEllipse: function(parent_obj, id, x_radius, y_radius, center_x, center_y, fill_color) {
		if (parent_obj.contains(document.getElementById(id))) {
			shape = document.getElementById(id);
			document.getElementById(id).style.position = "absolute";
			document.getElementById(id).style.width = (x_radius * 2).toString() + this.unit_type;
			document.getElementById(id).style.height = (y_radius * 2).toString() + this.unit_type;
			document.getElementById(id).style.left = (center_x - x_radius).toString() + this.unit_type;
			document.getElementById(id).style.top = (center_y - y_radius).toString() + this.unit_type;
			document.getElementById(id).style.backgroundColor = fill_color;
			shape.style.borderRadius = "100%";
		} else {
			shape = document.createElement("DIV");
			shape.id = id;
			shape.style.position = "absolute";
			shape.style.width = (x_radius * 2).toString() + this.unit_type;
			shape.style.height = (y_radius * 2).toString() + this.unit_type;
			shape.style.left = (center_x - x_radius).toString() + this.unit_type;
			shape.style.top = (center_y - y_radius).toString() + this.unit_type;
			shape.style.backgroundColor = fill_color;
			shape.style.borderRadius = "100%";
			parent_obj.appendChild(shape);
		}
		return shape;
	},
	drawRect: function(parent_obj, id, width, height, center_x, center_y, fill_color) {
		if (parent_obj.contains(document.getElementById(id))) {
			shape = document.getElementById(id);
			document.getElementById(id).style.position = "absolute";
			document.getElementById(id).style.width = (width).toString() + this.unit_type;
			document.getElementById(id).style.height = (height).toString() + this.unit_type;
			document.getElementById(id).style.left = (center_x - (width/2)).toString() + this.unit_type;
			document.getElementById(id).style.top = (center_y - (height/2)).toString() + this.unit_type;
			document.getElementById(id).style.backgroundColor = fill_color;
			shape.style.borderRadius = "0";
		} else {
			shape = document.createElement("DIV");
			shape.id = id;
			shape.style.position = "absolute";
			shape.style.width = (width).toString() + this.unit_type;
			shape.style.height = (height).toString() + this.unit_type;
			shape.style.left = (center_x - (width/2)).toString() + this.unit_type;
			shape.style.top = (center_y - (height/2)).toString() + this.unit_type;
			shape.style.backgroundColor = fill_color;
			shape.style.borderRadius = "0";
			parent_obj.appendChild(shape);
		}
		return shape;
	},
	drawImg: function(parent_obj, id, width, height, center_x, center_y, imageurl) {
		if (parent_obj.contains(document.getElementById(id))) {
			shape = document.getElementById(id);
			document.getElementById(id).style.position = "absolute";
			document.getElementById(id).style.width = (width).toString() + this.unit_type;
			document.getElementById(id).style.height = (height).toString() + this.unit_type;
			document.getElementById(id).style.left = (center_x - (width/2)).toString() + this.unit_type;
			document.getElementById(id).style.top = (center_y - (height/2)).toString() + this.unit_type;
			document.getElementById(id).style.backgroundImage = "url('" + imageurl + "')";
			document.getElementById(id).style.borderRadius = "0";
			document.getElementById(id).style.backgroundSize = "100% 100%";
		} else {
			shape = document.createElement("DIV");
			shape.id = id;
			shape.style.position = "absolute";
			shape.style.width = (width).toString() + this.unit_type;
			shape.style.height = (height).toString() + this.unit_type;
			shape.style.left = (center_x - (width/2)).toString() + this.unit_type;
			shape.style.top = (center_y - (height/2)).toString() + this.unit_type;
			shape.style.backgroundImage = "url('" + imageurl + "')";
			shape.style.borderRadius = "0";
			shape.style.backgroundSize = "100% 100%";
			parent_obj.appendChild(shape);
		}
		return shape;
	},
	drawSprite: function(parent_obj, id, width, height, center_x, center_y, spritesheeturl, spritesheetwidth, spritesheetheight, spritetop, spriteleft) {
		if (parent_obj.contains(document.getElementById(id))) {
			shape = document.getElementById(id);
			document.getElementById(id).style.position = "absolute";
			document.getElementById(id).style.width = (width).toString() + this.unit_type;
			document.getElementById(id).style.height = (height).toString() + this.unit_type;
			document.getElementById(id).style.left = (center_x - (width/2)).toString() + this.unit_type;
			document.getElementById(id).style.top = (center_y - (height/2)).toString() + this.unit_type;
			document.getElementById(id).style.borderRadius = "0";
			document.getElementById(id).style.overflow = "hidden";
			document.getElementById(id).innerHTML = "<div style='position: absolute; background-image: url(\"" + spritesheeturl + "\"); background-size: 100% 100%; width: " + spritesheetwidth.toString() + this.unit_type + "; height: " + spritesheetheight.toString() + this.unit_type + "; top: " + spritetop.toString() + this.unit_type + "; left: " + spriteleft.toString() + this.unit_type + ";'></div>";
		} else {
			shape = document.createElement("DIV");
			shape.id = id;
			shape.style.position = "absolute";
			shape.style.width = (width).toString() + this.unit_type;
			shape.style.height = (height).toString() + this.unit_type;
			shape.style.left = (center_x - (width/2)).toString() + this.unit_type;
			shape.style.top = (center_y - (height/2)).toString() + this.unit_type;
			shape.style.borderRadius = "0";
			shape.style.overflow = "hidden";
			shape.innerHTML = "<div style='position: absolute; background-image: url(\"" + spritesheeturl + "\"); background-size: 100% 100%; width: " + spritesheetwidth.toString() + this.unit_type + "; height: " + spritesheetheight.toString() + this.unit_type + "; top: " + spritetop.toString() + this.unit_type + "; left: " + spriteleft.toString() + this.unit_type + ";'></div>";
			parent_obj.appendChild(shape);
		}
		return shape;
	},
	rectCollision: function(item1, item2) {
		if (parseInt(item1.style.top.split(this.unit_type)[0]) + parseInt(item1.style.height.split(this.unit_type)[0]) >= parseInt(item2.style.top.split(this.unit_type)[0])) {
			if (parseInt(item1.style.left.split(this.unit_type)[0]) + parseInt(item1.style.width.split(this.unit_type)[0]) >= parseInt(item2.style.left.split(this.unit_type)[0])) {
				if (parseInt(item1.style.top.split(this.unit_type)[0]) <= parseInt(item2.style.top.split(this.unit_type)[0]) + parseInt(item2.style.height.split(this.unit_type)[0])) {
					if (parseInt(item1.style.left.split(this.unit_type)[0]) <= parseInt(item2.style.left.split(this.unit_type)[0]) + parseInt(item2.style.width.split(this.unit_type)[0])) {
						return true;
					}
				}
			}
		}
		else { return false; }
	},
	directionalCollision: function(item1, item2) {
		item1_bottom = parseInt(item1.style.top.split(this.unit_type)[0]) + parseInt(item1.style.height.split(this.unit_type)[0]);
		item2_bottom = parseInt(item2.style.top.split(this.unit_type)[0]) + parseInt(item2.style.height.split(this.unit_type)[0]);
		item1_right = parseInt(item1.style.left.split(this.unit_type)[0]) + parseInt(item1.style.width.split(this.unit_type)[0]);
		item2_right = parseInt(item2.style.left.split(this.unit_type)[0]) + parseInt(item2.style.width.split(this.unit_type)[0]);
		b_collision = item1_bottom - parseInt(item2.style.top.split(this.unit_type)[0]);
		t_collision = item2_bottom - parseInt(item1.style.top.split(this.unit_type)[0]);
		l_collision = item1_right - parseInt(item2.style.left.split(this.unit_type)[0]);
		r_collision = item2_right - parseInt(item1.style.left.split(this.unit_type)[0]);
		if (this.rectCollision(item1,item2)){
		if (t_collision < b_collision && t_collision < l_collision && t_collision < r_collision ) {
			return "top";
			console.log("h");
		}
		if (b_collision < t_collision && b_collision < l_collision && b_collision < r_collision) {
			return "bottom";
		}
		if (l_collision < r_collision && l_collision < t_collision && l_collision < b_collision) {
			return "left";
		}
		if (r_collision < l_collision && r_collision < t_collision && r_collision < b_collision ) {
			return "right";
		}
		}
		else { return "not_touchign"; }
	}
}